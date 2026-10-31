import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Response
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Invoice, InvoiceLine, InvoiceStatus, User, UserRole
from ..schemas import InvoiceResponse
from ..auth import get_current_user, require_staff_or_admin

router = APIRouter(prefix="/api/invoices", tags=["invoices"])

@router.get("/", response_model=List[InvoiceResponse])
def get_invoices(
    status: Optional[str] = None,
    customer_id: Optional[int] = None,
    overdue_only: bool = False,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Invoice)

    if current_user.role == UserRole.CUSTOMER:
        query = query.filter(Invoice.customer_id == current_user.id)
    elif customer_id:
        query = query.filter(Invoice.customer_id == customer_id)

    if status:
        query = query.filter(Invoice.status == status)

    if overdue_only:
        today = datetime.date.today()
        query = query.filter(
            Invoice.status == InvoiceStatus.CONFIRMED,
            Invoice.due_date < today,
            Invoice.amount_due > 0
        )

    return query.order_by(Invoice.id.desc()).all()

@router.get("/{invoice_id}", response_model=InvoiceResponse)
def get_invoice(
    invoice_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    if current_user.role == UserRole.CUSTOMER and inv.customer_id != current_user.id:
        raise HTTPException(status_code=403, detail="Forbidden")

    return inv

@router.post("/{invoice_id}/status")
def update_invoice_status(
    invoice_id: int,
    status_action: str, # "confirm" or "cancel"
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    if status_action == "confirm":
        if inv.status != InvoiceStatus.DRAFT:
            raise HTTPException(status_code=400, detail="Only Draft invoices can be confirmed")
        inv.status = InvoiceStatus.CONFIRMED
    elif status_action == "cancel":
        if inv.status == InvoiceStatus.PAID:
            raise HTTPException(status_code=400, detail="Cannot cancel a fully paid invoice")
        inv.status = InvoiceStatus.CANCELLED
    else:
        raise HTTPException(status_code=400, detail=f"Invalid action {status_action}")

    db.commit()
    db.refresh(inv)
    return {"message": f"Invoice updated to {inv.status}", "status": inv.status}

@router.post("/{invoice_id}/send")
def send_invoice(
    invoice_id: int,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    inv.sent_at = datetime.datetime.utcnow()
    db.commit()

    return {
        "message": f"Invoice {inv.invoice_number} successfully sent to {inv.customer.email}",
        "sent_at": inv.sent_at
    }

@router.get("/{invoice_id}/print", response_class=HTMLResponse)
def print_invoice(
    invoice_id: int,
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    cust = inv.customer
    lines_html = "".join([
        f"""
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 8px; text-align: left;">{line.description}</td>
            <td style="padding: 12px 8px; text-align: center;">{line.quantity}</td>
            <td style="padding: 12px 8px; text-align: right;">${line.unit_price:.2f}</td>
            <td style="padding: 12px 8px; text-align: right;">{line.tax_rate:.1f}%</td>
            <td style="padding: 12px 8px; text-align: right;">${line.discount_amount:.2f}</td>
            <td style="padding: 12px 8px; text-align: right; font-weight: 600;">${line.amount:.2f}</td>
        </tr>
        """
        for line in inv.lines
    ])

    status_badge_color = {
        "Draft": "#78350f",
        "Confirmed": "#1e3a8a",
        "Paid": "#14532d",
        "Cancelled": "#7f1d1d"
    }.get(inv.status, "#475569")

    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Invoice {inv.invoice_number} - Zebra5 Software</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            body {{
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 40px;
                color: #1F0E12;
                background-color: #F8F6F1;
            }}
            .invoice-wrapper {{
                max-width: 860px;
                margin: 0 auto;
                background: #FFFFFF;
                border: 1px solid rgba(197, 160, 73, 0.4);
                border-radius: 12px;
                padding: 40px;
                box-shadow: 0 10px 30px rgba(30, 4, 7, 0.05);
            }}
            .header {{
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #E5C365;
                padding-bottom: 24px;
                margin-bottom: 30px;
            }}
            .logo {{
                font-family: 'Cinzel', serif;
                font-size: 28px;
                font-weight: 800;
                color: #2C060C;
                letter-spacing: 1.5px;
            }}
            .logo span {{
                color: #B38F26;
            }}
            .invoice-title {{
                text-align: right;
            }}
            .invoice-title h1 {{
                margin: 0;
                font-family: 'Cinzel', serif;
                font-size: 26px;
                color: #2C060C;
                letter-spacing: 2px;
            }}
            .badge {{
                display: inline-block;
                padding: 4px 14px;
                border-radius: 9999px;
                color: #FFFDF9;
                background-color: {status_badge_color};
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-top: 6px;
                border: 1px solid rgba(212, 175, 55, 0.4);
            }}
            .info-grid {{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-bottom: 35px;
            }}
            .info-box h3 {{
                font-family: 'Cinzel', serif;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #B38F26;
                margin-bottom: 8px;
                border-bottom: 1px solid #F1D885;
                padding-bottom: 4px;
            }}
            table {{
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
            }}
            th {{
                background-color: #FAF5EC;
                padding: 12px 10px;
                font-family: 'Cinzel', serif;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #4E0C17;
                border-top: 1px solid #D4AF37;
                border-bottom: 2px solid #D4AF37;
            }}
            td {{
                padding: 12px 10px;
                border-bottom: 1px solid #F3EBDD;
                font-size: 13px;
            }}
            .summary-table {{
                width: 320px;
                margin-left: auto;
                margin-bottom: 30px;
                background: #FAF5EC;
                border-radius: 8px;
                border: 1px solid #E5C365;
            }}
            .summary-table td {{
                padding: 8px 14px;
                border: none;
            }}
            .total-row td {{
                font-family: 'Cinzel', serif;
                font-size: 16px;
                font-weight: 700;
                border-top: 2px solid #D4AF37 !important;
                color: #2C060C;
                background: #F3EBDD;
            }}
            .print-btn {{
                background: linear-gradient(135deg, #4E0C17, #2C060C);
                color: #FAF5EC;
                padding: 10px 22px;
                border: 1px solid #D4AF37;
                border-radius: 8px;
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: 0.5px;
                margin-bottom: 20px;
                box-shadow: 0 4px 12px rgba(44, 6, 12, 0.2);
            }}
            .print-btn:hover {{
                background: #6A1422;
            }}
            @media print {{
                .print-btn {{ display: none; }}
                body {{ padding: 0; background: white; }}
                .invoice-wrapper {{ border: none; box-shadow: none; padding: 0; }}
            }}
        </style>
    </head>
    <body>
        <div class="invoice-wrapper">
            <button class="print-btn" onclick="window.print()">🖨️ Print Invoice</button>
            <div class="header">
                <div>
                    <div class="logo">Zebra<span>5</span></div>
                    <p style="margin: 4px 0; color: #4E0C17; font-size: 13px; font-weight: 500;">Cloud Subscriptions & Enterprise Solutions</p>
                    <p style="margin: 4px 0; color: #7B1123; font-size: 12px;">billing@zebra5.io | +1 (800) 555-ZEBRA</p>
                </div>
                <div class="invoice-title">
                    <h1>INVOICE</h1>
                    <div style="font-size: 15px; font-weight: 700; color: #2C060C; margin-top: 4px; letter-spacing: 0.5px;">{inv.invoice_number}</div>
                    <div class="badge">{inv.status.upper()}</div>
                </div>
            </div>

        <div class="info-grid">
            <div class="info-box">
                <h3>Billed To:</h3>
                <div style="font-weight: bold; font-size: 16px;">{cust.name}</div>
                <div>{cust.company_name or ''}</div>
                <div>{cust.email}</div>
                <div>{cust.phone or ''}</div>
                <div>{cust.address or ''}</div>
            </div>
            <div class="info-box" style="text-align: right;">
                <h3>Invoice Details:</h3>
                <div><strong>Issue Date:</strong> {inv.issue_date}</div>
                <div><strong>Due Date:</strong> {inv.due_date}</div>
                <div><strong>Billing Period:</strong> {inv.billing_period_start or 'N/A'} to {inv.billing_period_end or 'N/A'}</div>
                <div><strong>Subscription Ref:</strong> {inv.subscription.subscription_number if inv.subscription else 'Direct'}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="text-align: left;">Description</th>
                    <th style="text-align: center;">Qty</th>
                    <th style="text-align: right;">Unit Price</th>
                    <th style="text-align: right;">Tax Rate</th>
                    <th style="text-align: right;">Discount</th>
                    <th style="text-align: right;">Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {lines_html}
            </tbody>
        </table>

        <table class="summary-table">
            <tr>
                <td>Subtotal (Untaxed):</td>
                <td style="text-align: right; font-weight: 500;">${inv.untaxed_amount:.2f}</td>
            </tr>
            <tr>
                <td>Discount:</td>
                <td style="text-align: right; color: #16a34a;">-${inv.discount_amount:.2f}</td>
            </tr>
            <tr>
                <td>Tax:</td>
                <td style="text-align: right;">+${inv.tax_amount:.2f}</td>
            </tr>
            <tr class="total-row">
                <td>Total:</td>
                <td style="text-align: right;">${inv.total_amount:.2f}</td>
            </tr>
            <tr>
                <td>Amount Paid:</td>
                <td style="text-align: right; color: #16a34a; font-weight: 600;">${inv.amount_paid:.2f}</td>
            </tr>
            <tr style="font-weight: bold; font-size: 16px; border-top: 1px solid #cbd5e1;">
                <td>Amount Due:</td>
                <td style="text-align: right; color: {'#dc2626' if inv.amount_due > 0 else '#16a34a'};">${inv.amount_due:.2f}</td>
            </tr>
        </table>

        <div style="border-top: 1px solid #E5C365; padding-top: 20px; font-size: 13px; color: #4E0C17;">
            <p><strong>Payment Terms:</strong> Please settle outstanding balances by due date via Bank Transfer or Portal Credit Card payment.</p>
            <p>Thank you for choosing Zebra5 Software!</p>
        </div>
        </div>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)
