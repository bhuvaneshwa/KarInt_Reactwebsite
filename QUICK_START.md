# 🚀 Quick Start - Email Setup (5 Minutes)

Follow these simple steps to get your contact form working with email:

## ⚡ Step 1: Generate Gmail App Password (2 minutes)

1. Go to: **https://myaccount.google.com/apppasswords**
2. Log in with: `karinternationalinfotech@gmail.com`
3. If you see "2-Step Verification not enabled":
   - Click the link to enable it
   - Follow the setup (takes 1 minute)
   - Come back to App Passwords page
4. Select:
   - App: **Mail**
   - Device: **Other (Custom)** → Type "KAR Website"
5. Click **Generate**
6. **Copy the 16-character password** (remove spaces)
   - Example: `abcd efgh ijkl mnop` → Copy as `abcdefghijklmnop`

## 🌐 Step 2: Deploy to Vercel (3 minutes)

### A. First-Time Setup

1. **Push code to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Add email functionality"
   git push
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" (use GitHub)

3. **Import Project**
   - Click "Add New" → "Project"
   - Select your repository
   - Click "Import"

4. **Configure Settings**
   - Framework: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output: `dist`

5. **Add Environment Variables** ⚠️ IMPORTANT
   - Click "Environment Variables" before deploying
   - Add TWO variables:

   ```
   Name: EMAIL_USER
   Value: karinternationalinfotech@gmail.com
   
   Name: EMAIL_PASSWORD
   Value: [paste your 16-character app password here]
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### B. Already on Vercel?

1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add the two variables above
4. Go to "Deployments" → Click "..." → "Redeploy"

## ✅ Step 3: Test It (1 minute)

1. Go to your live website: `https://your-site.vercel.app`
2. Click "Contact" page
3. Fill out the form with test data
4. Click "Submit"
5. Check inbox: `karinternationalinfotech@gmail.com`
6. You should see a beautifully formatted email! ✉️

---

## 🎯 That's It!

Your contact form is now live and sending emails directly to your Gmail inbox.

**📖 For detailed setup or troubleshooting**, see: [EMAIL_SETUP.md](./EMAIL_SETUP.md)

---

## ⚠️ Common Issues

### "Failed to send email"
- Check if App Password is correct (no spaces, 16 characters)
- Verify environment variables are set in Vercel
- Make sure 2-Step Verification is enabled

### Email not received
- Check spam folder
- Wait 1-2 minutes
- Try sending another test

### Need to change email address?
1. Update environment variable `EMAIL_USER` in Vercel
2. Generate new App Password for that email
3. Update `EMAIL_PASSWORD` in Vercel
4. Redeploy

---

## 🆘 Quick Help

**Forgot App Password?**
- Generate a new one: https://myaccount.google.com/apppasswords

**Want to test locally?**
```bash
# 1. Create .env file in frontend folder
echo "EMAIL_USER=karinternationalinfotech@gmail.com" > .env
echo "EMAIL_PASSWORD=your-app-password" >> .env

# 2. Install Vercel CLI
npm install -g vercel

# 3. Run locally
cd frontend
vercel dev
```

---

**✨ Enjoy your working contact form!**
