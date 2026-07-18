# Stripe Setup Guide — CivilRightsMatch.com

**Model:** Flat fee per qualified lead delivered to an attorney.

---

## Part 1 — Stripe Dashboard (do this first)

### 1. Create your account
- Go to **stripe.com** → sign up with `civilrightsmatch@gmail.com`
- Complete identity verification (takes a few minutes)
- Set your business name: **CivilRightsMatch**

### 2. Get your API keys
- Dashboard → **Developers → API keys**
- Copy:
  - `Publishable key` → starts with `pk_live_...`
  - `Secret key` → starts with `sk_live_...`
- Also grab the **test** versions (`pk_test_...`, `sk_test_...`) for dev

### 3. Create the referral fee product
- Dashboard → **Product catalog → + Add product**
  - Name: `Client Lead Referral Fee`
  - Description: `Flat fee charged per qualified client lead delivered`
  - Pricing model: **One time**
  - Price: **$50.00**
  - Currency: USD
- Save → copy the **Price ID** (starts with `price_...`)

### 4. Set up a webhook endpoint
- Dashboard → **Developers → Webhooks → + Add endpoint**
  - URL: `https://civilrightsmatch.com/api/stripe/webhook`
  - Events to listen for:
    - `payment_intent.succeeded`
    - `payment_intent.payment_failed`
    - `customer.created`
- Copy the **Webhook signing secret** (starts with `whsec_...`)

### 5. Enable customer portal (optional, for attorneys to manage billing)
- Dashboard → **Settings → Billing → Customer portal**
- Toggle on, save defaults

---

## Part 2 — Environment Variables

Add these to `.env.local` (for the Next.js app on Vercel):

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_LEAD_FEE_PRICE_ID=price_...
```

Add to `.env.scripts` (for local agent scripts):
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_LEAD_FEE_PRICE_ID=price_...
```

Add to **Vercel** → Project → Settings → Environment Variables — same four keys.

---

## Part 3 — Code to Add

### Install Stripe SDK
```bash
cd /home/claude-bot/rights-directory
npm install stripe @stripe/stripe-js
```

### New API routes needed

**`app/api/stripe/create-customer/route.ts`**
Called when an attorney is approved and listed — saves their Stripe Customer ID so we can charge them later.

**`app/api/stripe/charge-lead-fee/route.ts`**
Called when we deliver a qualified lead to an attorney — charges their saved payment method the flat fee.

**`app/api/stripe/webhook/route.ts`**
Receives Stripe events (payment succeeded/failed) — logs outcome, triggers Discord notification.

**`app/api/stripe/setup-payment/route.ts`**
Returns a Stripe SetupIntent so an attorney can add their card on file (no charge yet).

---

## Part 4 — Attorney Onboarding Flow (how it works end-to-end)

```
1. Attorney applies via signup form
2. Intake Responder verifies + approves them
3. We email them: "Your profile is live. Add a payment method to receive leads."
   → Link to: civilrightsmatch.com/attorney/billing
4. Attorney adds their card via Stripe SetupIntent (saved, not charged)
5. When a client match is made:
   → We charge the attorney's saved card $50 (flat fee, charged on lead delivery)
   → Attorney immediately receives the client's contact info by email
   → If a lead turns out to be unqualified, issue a manual refund/credit via Stripe Dashboard
6. If charge fails → we hold the lead until payment is resolved
```

---

## Part 5 — Vercel Deployment

After adding env vars to Vercel:
```bash
# Trigger a redeploy to pick up new env vars
vercel --prod
```
Or push a commit — Vercel auto-deploys on push to main.

---

## Decisions locked in

- **Flat fee: $50 per lead**
- **Charge on delivery** — attorney is charged $50 when we send them the client's info; issue manual refunds/credits via Stripe Dashboard for unqualified leads
- **Every lead from day 1** — no minimum threshold

Once you have your Stripe keys from stripe.com, I can write all four API routes.
