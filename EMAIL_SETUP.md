# 📧 Email Configuration Setup Guide

This guide will help you set up email functionality for your KAR International website using Gmail App Passwords.

## 🎯 Overview

The contact form sends emails using a serverless function that works with:
- ✅ **Vercel** (Recommended)
- ✅ **Netlify**
- ✅ Any platform supporting serverless functions

---

## 📋 Prerequisites

Before you begin, ensure you have:
1. **Gmail Account**: `karinternationalinfotech@gmail.com`
2. **2-Step Verification** enabled on this Gmail account
3. Access to your deployment platform (Vercel/Netlify)

---

## 🔐 Step 1: Generate Gmail App Password

### Why App Password?
Google requires App Passwords for third-party applications to send emails securely through Gmail.

### Generate Steps:

1. **Go to Google Account Security**
   - Visit: https://myaccount.google.com/security
   - Log in with `karinternationalinfotech@gmail.com`

2. **Enable 2-Step Verification** (if not already enabled)
   - Under "How you sign in to Google"
   - Click "2-Step Verification"
   - Follow the setup wizard
   - ⚠️ **Important**: App Passwords only work with 2-Step Verification enabled

3. **Create App Password**
   - After 2-Step is enabled, go back to Security page
   - Under "How you sign in to Google"
   - Click "**App passwords**" (or visit: https://myaccount.google.com/apppasswords)
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Enter "KAR Website"
   - Click **Generate**

4. **Copy the Password**
   - You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - **Remove all spaces**: `abcdefghijklmnop`
   - ⚠️ **Save this password securely** - you won't see it again!

---

## 🚀 Step 2: Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Push your code to a GitHub repository

### Deployment Steps:

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "**Sign Up**" or "**Login**" with GitHub

2. **Import Your Project**
   - Click "**Add New**" → "**Project**"
   - Select your GitHub repository: `Rework_KarWeb`
   - Click "**Import**"

3. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variables** (CRITICAL)
   - Before deploying, click "**Environment Variables**"
   - Add these two variables:

   | Name | Value |
   |------|-------|
   | `EMAIL_USER` | `karinternationalinfotech@gmail.com` |
   | `EMAIL_PASSWORD` | `your-16-char-app-password` (paste the password from Step 1) |

   - Click "**Add**" for each variable

5. **Deploy**
   - Click "**Deploy**"
   - Wait 2-3 minutes for deployment to complete
   - Your site will be live at: `https://your-project.vercel.app`

6. **Test the Contact Form**
   - Go to your live website
   - Navigate to the Contact page
   - Fill out the form and submit
   - Check `karinternationalinfotech@gmail.com` for the email

---

## 🌐 Alternative: Deploy to Netlify

### Deployment Steps:

1. **Go to Netlify**
   - Visit: https://netlify.com
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "**Add new site**" → "**Import an existing project**"
   - Choose GitHub and select your repository

3. **Configure Build Settings**
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: frontend/dist
   ```

4. **Add Environment Variables**
   - Go to "**Site settings**" → "**Environment variables**"
   - Click "**Add a variable**"
   - Add:
     - `EMAIL_USER` = `karinternationalinfotech@gmail.com`
     - `EMAIL_PASSWORD` = `your-16-char-app-password`

5. **Deploy**
   - Click "**Deploy site**"
   - Wait for deployment to complete

---

## 🧪 Step 3: Local Testing (Optional)

To test locally before deploying:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Create .env file** (in `frontend` folder)
   ```env
   EMAIL_USER=karinternationalinfotech@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

3. **Run locally**
   ```bash
   cd frontend
   vercel dev
   ```

4. **Test**
   - Open browser: `http://localhost:3000`
   - Fill out contact form and submit

---

## 📝 How It Works

### Email Flow:
```
Contact Form (React)
     ↓
POST /api/send-email (Serverless Function)
     ↓
Nodemailer + Gmail SMTP
     ↓
📧 Email sent to karinternationalinfotech@gmail.com
```

### Email Template:
- Professional HTML email with your brand colors
- Includes all form data: name, email, phone, company, service, message
- Reply-To set to customer's email for easy responses
- Beautifully formatted with KAR International branding

---

## ✅ Verification Checklist

After setup, verify:

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] Environment variables added to deployment platform
- [ ] Website deployed successfully
- [ ] Contact form submits without errors
- [ ] Email received at `karinternationalinfotech@gmail.com`
- [ ] Reply-To field works (shows customer's email)

---

## 🔧 Troubleshooting

### Problem: "Failed to send email"
**Solutions:**
- Verify App Password is correct (no spaces, 16 characters)
- Check environment variables are set correctly
- Ensure 2-Step Verification is enabled
- Try generating a new App Password

### Problem: Email not received
**Solutions:**
- Check Gmail spam folder
- Verify `EMAIL_USER` is `karinternationalinfotech@gmail.com`
- Check Gmail account for "Critical security alert" (approve the login)
- Wait 1-2 minutes (sometimes delayed)

### Problem: Local testing not working
**Solutions:**
- Ensure `.env` file is in the `frontend` folder
- Make sure you're running `vercel dev`, not `npm run dev`
- Check `.env` file has no quotes around values
- Restart the dev server

### Problem: "Invalid credentials"
**Solutions:**
- App Password might be incorrect
- Generate a new App Password
- Remove any spaces from the password
- Ensure you're using App Password, not your regular Gmail password

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** to GitHub
   - Already added to `.gitignore`
   - Only use environment variables on hosting platform

2. **Keep App Password Secret**
   - Don't share it in code or screenshots
   - Generate a new one if compromised

3. **Use Different App Passwords**
   - One for production (Vercel/Netlify)
   - One for local development (if needed)

4. **Monitor Gmail Security**
   - Check https://myaccount.google.com/security regularly
   - Review "Recent security activity"

---

## 📧 Email Preview

When someone submits the contact form, you'll receive an email like this:

```
Subject: New Contact Form: John Doe - Web Application Development

🔔 New Contact Form Submission
KAR International InfoTech

Contact Details
👤 Name: John Doe
📧 Email: john.doe@example.com
📱 Phone: +1234567890
🏢 Company: Tech Solutions Inc
🎯 Service Interest: Web Application Development

💬 Message:
I'm interested in developing a custom web application for my business...

---
This email was sent from the KAR International website contact form.
Click reply to respond directly to the customer.
```

---

## 🆘 Need Help?

If you encounter any issues:

1. **Check the deployment logs** on Vercel/Netlify
2. **Test the API endpoint** directly: `https://your-site.com/api/send-email`
3. **Review environment variables** are correctly set
4. **Generate a fresh App Password** if in doubt

---

## 📚 Additional Resources

- [Google App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Nodemailer Documentation](https://nodemailer.com/)

---

**✨ That's it! Your contact form is now ready to send emails directly to your inbox.**
