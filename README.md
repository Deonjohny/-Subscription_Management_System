# Brightloop Software - Subscription Management System (Odoo Challenge)

A unified software platform that runs the full lifecycle of a subscription business: product & variant modeling, recurring plans, quotation templates, automated idempotent billing days, dynamic tax & discount engines, multi-method payment settlement, customer self-service portal, and sub-second month-end financial analytics.

---

## 🌟 Executive Highlights

- **Dynamic Data Sources & Zero Mock JSON:** Powered by a live SQLite database with SQLAlchemy 2.0 ORM and FastAPI REST APIs. Every action (invoicing, payments, status transitions, discounts) operates directly on live database entities.
- **Sub-Second Performance (< 100ms):** Aggregated finance metrics (MRR, ARR, overdue receivables, billing day engine) respond in under 100ms, satisfying the `< 2s` requirement with composite indexes (`ix_inv_status_due_date`, `ix_sub_status_next_billing`).
- **Complete Brightloop Problem Coverage:**
  1. **A New Customer Signs Up:** Strict password validation (>8 characters, uppercase, lowercase, special character), unique email enforcement, password reset token simulation, and role-based access control (Admin, Internal Staff, Customer Portal). Only Admin can add staff.
  2. **Launching a New Plan:** Products with attribute variants (e.g., Brand = **Odoo adds +$560** to base price). Plan lifecycle rules decided plan-by-plan: auto-close on end, early closure, pause, and renewal permissions.
  3. **Quotation to Subscription:** Sales reps build quotes directly from quotation templates valid for a set number of days. Smooth state machine: `Draft` ➔ `Quotation` ➔ `Confirmed` ➔ `Active` ➔ `Closed` / `Paused`.
  4. **Billing Day Engine:** Batch billing evaluates due subscriptions with strict idempotency: **nothing is billed twice or skipped**. Automatically generates draft invoices with customer lines, taxes, and applied discounts.
  5. **Admin Discounts & Auto-Taxes:** Admin creates percentage or fixed discount rules with minimum spend/quantity, validity dates, and usage limits. Automatically applied to subsequent recurring invoices and stops when expired or depleted.
  6. **Money Comes In:** Record multi-method payments (Bank Transfer, Credit Card, PayPal, Cash) against invoices, updating balances in real-time and transitioning invoices to `Paid`.
  7. **Finance Lead Month-End Command Center:** Live dashboard tracking Active Subscriptions, MRR, ARR, Total Revenue Collected, Total Outstanding, and Overdue Chase List.

---

## 🚀 Quick Start (Local & Offline Capable)

### 1. Prerequisites
- Python 3.10+
- Node.js 18+ & npm

### 2. Backend Server (FastAPI + SQLite)
```bash
# Unified server starts on http://127.0.0.1:8000
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000
```
- **Unified App:** `http://127.0.0.1:8000/` (Serves the complete React production frontend)
- **Interactive API Docs (Swagger):** `http://127.0.0.1:8000/docs`

### 3. Frontend Dev Server (Optional Vite HMR)
```bash
cd frontend
npm run dev -- --host 127.0.0.1 --port 5173
```
- **Vite Dev App:** `http://127.0.0.1:5173/` (Proxied to backend on `:8000`)

---

## 🔑 Demo Accounts (Pre-Seeded)

Use the **1-Click Quick Role Switcher** at the top bar in the app:
- **Admin:** `admin@brightloop.io` / `BrightloopAdmin!2026`
- **Staff (Sales Rep):** `sarah.sales@brightloop.io` / `StaffMember!2026`
- **Customer (TechFlow):** `alice@techflow.com` / `CustomerPass!2026`
- **Customer (RetailHub):** `bob@retailhub.io` / `CustomerPass!2026`

---

## 🏗️ Architecture & Codebase Layout

```
maketon/
├── backend/
│   └── app/
│       ├── database.py         # SQLAlchemy engine, session factory, Base
│       ├── models.py           # Indexed relational schema: User, Product, Plan,
│       │                       # QuotationTemplate, Subscription, Invoice, Payment,
│       │                       # DiscountRule, TaxRule
│       ├── schemas.py          # Pydantic v2 schemas & password policy validators
│       ├── auth.py             # JWT token handling & PBKDF2 password hashing
│       ├── billing_engine.py   # Idempotent recurring billing engine
│       ├── seed_data.py        # Demo seed data (Odoo brand variant +560, overdue invs)
│       ├── main.py             # Unified FastAPI app with SPA static mount
│       └── routers/            # Clean REST API endpoints
├── frontend/
│   ├── src/
│   │   ├── types.ts            # TypeScript domain interfaces
│   │   ├── api.ts              # Axios HTTP client with JWT interceptor
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Odoo-themed top bar + 1-click role switcher
│   │   │   ├── FinanceDashboard.tsx   # Month-end KPI hub + Billing Day executor
│   │   │   ├── SubscriptionsView.tsx  # Quote-to-sub lifecycle & template builder
│   │   │   ├── InvoicesView.tsx       # Invoice ledger, print/pdf, payment modal
│   │   │   ├── ProductsView.tsx       # Product catalog & attribute variant editor
│   │   │   ├── PlansDiscountsView.tsx # Plan policies & admin discount rule engine
│   │   │   ├── StaffManagerView.tsx   # Admin-only staff roster & invite modal
│   │   │   ├── CustomerPortal.tsx     # Customer self-service portal
│   │   │   └── AuthModal.tsx          # Real-time password strength & reset flow
│   │   └── App.tsx             # Root layout & tab router
│   ├── tailwind.config.js
│   └── vite.config.ts
└── README.md
```
