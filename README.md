# 🦓 Zebra5 - Autonomous Subscription Management System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Active%20Online-success?style=for-the-badge&logo=cloudflare)](https://tour-leaf-developmental-athletic.trycloudflare.com)
[![GitHub License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React 18](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Three.js-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)

A unified, autonomous software platform that runs the full lifecycle of a subscription business: product & variant modeling, recurring plans, quotation templates, automated idempotent billing days, dynamic tax & discount engines, multi-method payment settlement, customer self-service portal, 3D Three.js entrance, and sub-second month-end financial analytics.

---

## 🚀 Live Cloud Deployment Options

### 1. Instant Live Web Link (Active Right Now)
👉 **[https://tour-leaf-developmental-athletic.trycloudflare.com](https://tour-leaf-developmental-athletic.trycloudflare.com)**

### 2. 1-Click Permanent Cloud Deployments
Deploy your own instance of Zebra5 to free cloud hosting in 1 click:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Deonjohny/-Subscription_Management_System)  
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/Deonjohny/-Subscription_Management_System)

---

## 🌟 Executive Highlights

- **Dynamic Data Sources & Zero Mock JSON:** Powered by a live SQLite database with SQLAlchemy 2.0 ORM and FastAPI REST APIs. Every action operates directly on live database entities.
- **Sub-Second Performance (< 15ms):** Aggregated finance metrics (MRR, ARR, overdue receivables, billing day engine) respond in under 15ms, satisfying the `< 2s` requirement with composite indexes (`ix_inv_status_due_date`, `ix_sub_status_next_billing`).
- **3D Three.js Entrance & Harmonious Palette:** Features a 3D metallic gold Möbius loop with floating stardust embers, iris sweep reveal, and a soothing alabaster ivory and velvet burgundy palette that rests naturally on any display.
- **Enterprise Productivity Suite:**
  - **1-Click General Ledger CSV Export:** Formatted for QuickBooks, Xero, and Excel.
  - **Smart Dunning & Automated Revenue Recovery:** Multi-stage dunning engine (`/api/finance/dunning/chase-all`).
  - **Customer Health & Churn Risk Matrix:** Real-time retention scoring (0–100) with AI recommendations.
- **Complete Business Problem Coverage:**
  1. **A New Customer Signs Up:** Strict password validation (>8 characters, uppercase, lowercase, special character), unique email enforcement, password reset token simulation, and role-based access control (Admin, Internal Staff, Customer Portal). Only Admin can add staff.
  2. **Launching a New Plan:** Products with attribute variants (e.g., Brand = **Odoo adds +$560** to base price). Plan lifecycle rules decided plan-by-plan: auto-close on end, early closure, pause, and renewal permissions.
  3. **Quotation to Subscription:** Sales reps build quotes directly from quotation templates valid for a set number of days. Smooth state machine: `Draft` ➔ `Quotation` ➔ `Confirmed` ➔ `Active` ➔ `Closed` / `Paused`.
  4. **Billing Day Engine:** Batch billing evaluates due subscriptions with strict idempotency: **nothing is billed twice or skipped**. Automatically generates draft invoices with customer lines, taxes, and applied discounts.
  5. **Admin Discounts & Auto-Taxes:** Admin creates percentage or fixed discount rules with minimum spend/quantity, validity dates, and usage limits. Automatically applied to subsequent recurring invoices.
  6. **Money Comes In:** Record multi-method payments (Bank Transfer, Credit Card, PayPal, Cash) against invoices, updating balances in real-time and transitioning invoices to `Paid`.
  7. **Finance Lead Month-End Command Center:** Live dashboard tracking Active Subscriptions, MRR, ARR, Total Revenue Collected, Total Outstanding, and Overdue Chase List.

---

## 💻 Quick Start (Local & Offline Capable)

### 1-Click Launchers
- **Windows:** Double-click `start.bat`
- **Linux/macOS:** Run `./start.sh`

### Manual Execution
```bash
# Starts unified server on http://127.0.0.1:8000
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000
```
- **Unified App:** `http://127.0.0.1:8000/` (Serves the complete React production frontend)
- **Interactive API Docs (Swagger):** `http://127.0.0.1:8000/docs`
- **Printable Luxury Invoice:** `http://127.0.0.1:8000/api/invoices/1/print`

---

## 🔑 Demo Accounts (Pre-Seeded)

Use the **1-Click Quick Role Switcher** at the top bar in the app:
- **Admin:** `admin@brightloop.io` / `BrightloopAdmin!2026`
- **Staff (Sales Rep):** `sarah.sales@brightloop.io` / `StaffMember!2026`
- **Customer (TechFlow):** `alice@techflow.com` / `CustomerPass!2026`
