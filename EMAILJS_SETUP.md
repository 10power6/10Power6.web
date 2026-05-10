# EmailJS Setup Guide

The contact form is now ready to send emails! Follow these steps to configure EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use EmailJS's free service
4. Configure the service and note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `contact_form_template`

**Email parameters (your template can use these):**
- `from_name` - Full name from form
- `from_email` - Email from form
- `company_name` - Company name from form
- `phone_number` - Phone from form
- `service_interested` - Service selection
- `message` - Project details/message
- `to_email` - Your business email

**Example template content:**
```
Subject: New Project Inquiry from {{from_name}}

Hello,

You have received a new inquiry:

Name: {{from_name}}
Company: {{company_name}}
Email: {{from_email}}
Phone: {{phone_number}}
Service Interested: {{service_interested}}

Message:
{{message}}

---
This inquiry was received via your website contact form.
```

4. Note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Under **API Keys**, copy your **Public Key** (starts with `pk_`)
3. This is what you'll use in the code for security

## Step 5: Update App.jsx

In `src/App.jsx`, find the ContactSection component and update these three lines:

```javascript
// Line ~288 - Initialize with your Public Key
emailjs.init("YOUR_PUBLIC_KEY_HERE"); 
// Replace with: emailjs.init("pk_your_actual_public_key");

// Line ~318-319 - Update with your Service and Template IDs
const result = await emailjs.send(
  "YOUR_SERVICE_ID_HERE",      // Replace: "service_xxxxx"
  "YOUR_TEMPLATE_ID_HERE",     // Replace: "template_xxxxx"
  {
    // ... rest of the data
  }
);
```

**Example:**
```javascript
emailjs.init("pk_test_1234567890abcdefg");

const result = await emailjs.send(
  "service_abc123def456",
  "template_xyz789uvw012",
  {
    // ...
  }
);
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Inquiry"
4. Check your email to confirm you received it
5. Also check your EmailJS dashboard to see the sent message

## Optional: Email to a Different Address

To send to a different email than your default, you can set up a verified recipient in EmailJS:

1. Go to **Account** → **Authorized senders**
2. Add additional email addresses

Or update the `to_email` field in the form data to any verified address.

## Troubleshooting

**"Failed to send email" message:**
- Verify your Public Key, Service ID, and Template ID are correct
- Make sure your email service is enabled in EmailJS
- Check that templates match the parameter names in the form

**Emails not being received:**
- Check spam/junk folder
- Verify the recipient email is authorized in EmailJS
- Check EmailJS dashboard for failed sends under Activity

**Rate limiting:**
- EmailJS free plan allows 200 emails/month
- For higher volume, upgrade your plan

## Security Notes

- Your Public Key is safe to expose in client-side code
- Never expose your Private Key in frontend code
- All form submissions are HTTPS encrypted
- The form validates inputs before sending

