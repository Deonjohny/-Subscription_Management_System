import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def create_demo_video(output_path="Brightloop_Demo_Walkthrough.mp4"):
    width, height = 1920, 1080
    fps = 30
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    burgundy_dark = (12, 3, 22)      # #160306 in BGR
    burgundy_mid = (23, 12, 78)      # #4E0C17 in BGR
    gold_bright = (133, 216, 241)    # #F1D885 in BGR
    gold_main = (55, 175, 212)       # #D4AF37 in BGR
    cream_white = (240, 247, 251)    # #FBF7F0 in BGR
    cream_card = (249, 253, 255)     # #FFFDF9 in BGR

    # Try loading system fonts or default
    try:
        font_serif_large = ImageFont.truetype("times.ttf", 68)
        font_serif_mid = ImageFont.truetype("times.ttf", 42)
        font_sans_bold = ImageFont.truetype("arialbd.ttf", 32)
        font_sans_reg = ImageFont.truetype("arial.ttf", 26)
        font_sans_small = ImageFont.truetype("arial.ttf", 20)
    except:
        font_serif_large = ImageFont.load_default()
        font_serif_mid = ImageFont.load_default()
        font_sans_bold = ImageFont.load_default()
        font_sans_reg = ImageFont.load_default()
        font_sans_small = ImageFont.load_default()

    slides = [
        {
            "tag": "CINEMATIC 3D INTRODUCTION",
            "title": "BRIGHTLOOP SOFTWARE",
            "subtitle": "Subscription Management & Autonomous Recurring Ledger OS",
            "theme": "dark",
            "points": [
                ("3D Three.js WebGL Entrance", "Interactive Gold Mobius Loop with mouse parallax & particle embers"),
                ("Zero Double-Billing Engine", "Strictly idempotent daily billing with interval stepping"),
                ("Burgundy & Gold Luxury Palette", "Cinematic styling tailored for high-trust enterprise finance"),
                ("Unified Architecture", "FastAPI Python backend + React 18 frontend + SQLite storage")
            ],
            "stats": [("MRR TARGET", "$2,940/mo"), ("RELIABILITY", "100% IDEMPOTENT"), ("RESPONSE", "< 15ms")]
        },
        {
            "tag": "EXECUTIVE COMMAND CENTER",
            "title": "Real-Time Finance Dashboard",
            "subtitle": "Instant Financial Intelligence Responding in < 2 Seconds",
            "theme": "light",
            "points": [
                ("Live MRR & ARR Scorecards", "Auto-computed from active subscription recurring intervals"),
                ("Automated Billing Day Runner", "Execute simulation runs without duplicate invoice creation"),
                ("Aging Overdue Tracker", "Monitors 30+ day unpaid balances with automated collection actions"),
                ("Composite Database Indexing", "ix_inv_status_due_date & ix_sub_status_next_billing")
            ],
            "stats": [("ACTIVE SUBS", "2 ACCOUNTS"), ("REVENUE COLLECTED", "$8,096.00"), ("OVERDUE", "$805.00")]
        },
        {
            "tag": "LIFECYCLE MANAGEMENT",
            "title": "Subscriptions & Quotation Templates",
            "subtitle": "From Draft Proposal to Active License & Automated Renewal",
            "theme": "light",
            "points": [
                ("Visual Lifecycle Ribbon", "Progression through Draft -> Confirmed -> Active -> Closed"),
                ("Pre-Configured Quote Templates", "Preset recurring intervals with automatic non-payment close rules"),
                ("Dynamic Interval Stepping", "Monthly, Quarterly, Biannual, and Annual automatic advancing"),
                ("Customer Assignment", "Direct association with enterprise corporate profiles")
            ],
            "stats": [("TEMPLATE REUSABILITY", "UNLIMITED"), ("AUTO-CLOSE", "CONFIGURABLE"), ("INTERVALS", "4 TIERS")]
        },
        {
            "tag": "PRODUCT CATALOG & PRICING",
            "title": "Dynamic Products & Variants",
            "subtitle": "Tiered Offerings with Add-on Variant Surcharges",
            "theme": "light",
            "points": [
                ("Cloud ERP Base Edition", "Multi-user subscription baseline pricing"),
                ("Odoo Brand Add-on Variant", "+$560 surcharge dynamically reflected on quotes & invoices"),
                ("Volume Discount Automation", "10% tier discount automatically applied on >= 5 units"),
                ("Multi-Tier Tax System", "Standard VAT 15% and enterprise duty compliance")
            ],
            "stats": [("BASE PRICE", "$1,200.00"), ("ODOO ADD-ON", "+$560.00"), ("VOLUME DISCOUNT", "10% OFF")]
        },
        {
            "tag": "INVOICING & RECONCILIATION",
            "title": "Invoices Ledger & Printable Letterhead",
            "subtitle": "Automated Generation, Direct Settlement & Luxury Letterhead",
            "theme": "light",
            "points": [
                ("Automated Invoice Numbering", "Chronological sequences (INV-2026-0001, 0002...)"),
                ("Multi-Method Payments", "Instant recording for Credit Card, Wire Transfer, and Portal Pay"),
                ("Printable HTML Invoice", "Burgundy & Gold letterhead formatted for print/PDF export"),
                ("Status State Machine", "Draft -> Confirmed -> Paid (or Overdue/Cancelled)")
            ],
            "stats": [("SETTLEMENT SPEED", "INSTANT"), ("PRINT ENGINE", "CSS3 PRINT"), ("AUDIT TRAIL", "FULL")]
        },
        {
            "tag": "SELF-SERVICE EXPERIENCE",
            "title": "Customer Portal & Role-Based Access",
            "subtitle": "Empowering End-Users While Enforcing Strict Security",
            "theme": "dark",
            "points": [
                ("Personalized Customer View", "Alice (TechFlow) views active subscriptions & invoice status"),
                ("Online Direct Checkout", "Instant payment processing directly within the portal view"),
                ("Staff Management Matrix", "Admin-only staff onboarding with fine-grained permissions"),
                ("Strict Password Policy", "Enforces >8 chars, uppercase, lowercase, and special characters")
            ],
            "stats": [("ADMIN ACCESS", "FULL CONTROL"), ("STAFF ACCESS", "OPERATIONAL"), ("PORTAL ACCESS", "SELF-SERVICE")]
        }
    ]

    duration_per_slide = 4.5  # seconds
    frames_per_slide = int(duration_per_slide * fps)
    transition_frames = 15

    for slide_idx, s in enumerate(slides):
        is_dark = s["theme"] == "dark"
        bg_rgb = (22, 3, 6) if is_dark else (251, 247, 240)
        fg_rgb = (255, 253, 249) if is_dark else (44, 6, 12)
        card_rgb = (44, 6, 12) if is_dark else (255, 253, 249)
        border_gold = (212, 175, 55)

        for f in range(frames_per_slide):
            img = Image.new("RGB", (width, height), bg_rgb)
            draw = ImageDraw.Draw(img)

            # Draw ambient gold accent glow or header bar
            if is_dark:
                # Top header bar
                draw.rectangle([0, 0, width, 8], fill=border_gold)
                # Radial gold ring accent in background
                center_x, center_y = 1500, 540
                radius = 320 + int(np.sin(f * 0.05) * 15)
                draw.ellipse([center_x - radius, center_y - radius, center_x + radius, center_y + radius], outline=(78, 12, 23), width=3)
                radius2 = 240 + int(np.cos(f * 0.06) * 12)
                draw.ellipse([center_x - radius2, center_y - radius2, center_x + radius2, center_y + radius2], outline=(212, 175, 55), width=2)
            else:
                draw.rectangle([0, 0, width, 8], fill=border_gold)
                draw.rectangle([0, 8, width, 65], fill=(44, 6, 12))
                draw.text((60, 24), "BRIGHTLOOP SOFTWARE • SUBSCRIPTION MANAGEMENT OS", fill=(241, 216, 133), font=font_sans_small)

            # Slide Tag
            tag_y = 60 if is_dark else 100
            draw.text((60, tag_y), f"●  {s['tag']}", fill=border_gold, font=font_sans_bold)

            # Slide Title & Subtitle
            draw.text((60, tag_y + 45), s["title"], fill=fg_rgb, font=font_serif_large)
            draw.text((60, tag_y + 130), s["subtitle"], fill=(180, 160, 140) if is_dark else (123, 17, 35), font=font_serif_mid)

            # Feature Points Cards
            start_y = tag_y + 220
            for i, (p_title, p_desc) in enumerate(s["points"]):
                cy = start_y + i * 140
                # Draw card box
                draw.rounded_rectangle([60, cy, 1150, cy + 115], radius=12, fill=card_rgb, outline=border_gold, width=1)
                # Accent indicator
                draw.rectangle([60, cy + 20, 68, cy + 95], fill=border_gold)
                draw.text((85, cy + 18), p_title, fill=border_gold if is_dark else (78, 12, 23), font=font_sans_bold)
                draw.text((85, cy + 62), p_desc, fill=(220, 215, 205) if is_dark else (70, 70, 80), font=font_sans_reg)

            # Right Side Stats Pillars
            stat_x = 1240
            for j, (s_label, s_val) in enumerate(s["stats"]):
                sy = start_y + j * 190
                draw.rounded_rectangle([stat_x, sy, 1840, sy + 160], radius=16, fill=card_rgb, outline=border_gold, width=2)
                draw.text((stat_x + 35, sy + 25), s_label, fill=border_gold, font=font_sans_bold)
                draw.text((stat_x + 35, sy + 75), s_val, fill=fg_rgb, font=font_serif_mid)

            # Bottom Ribbon
            draw.rectangle([0, height - 55, width, height], fill=(44, 6, 12) if not is_dark else (30, 4, 8))
            draw.text((60, height - 40), f"Brightloop Software • Demonstration Walkthrough • Slide {slide_idx+1} of {len(slides)}", fill=(220, 200, 160), font=font_sans_small)
            draw.text((width - 450, height - 40), "GitHub: Deonjohny/-Subscription_Management_System", fill=border_gold, font=font_sans_small)

            # Convert PIL image to BGR frame for OpenCV
            frame = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

            # Fade in/out transition
            if f < transition_frames:
                alpha = f / transition_frames
                frame = cv2.convertScaleAbs(frame, alpha=alpha, beta=0)
            elif f > (frames_per_slide - transition_frames):
                alpha = (frames_per_slide - f) / transition_frames
                frame = cv2.convertScaleAbs(frame, alpha=alpha, beta=0)

            out.write(frame)

    out.release()
    print(f"Video created successfully at: {output_path} ({os.path.getsize(output_path)} bytes)")

if __name__ == "__main__":
    create_demo_video()
