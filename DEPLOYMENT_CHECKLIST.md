# ✅ Deployment Checklist

Use this checklist before deploying your KAR International website to production.

---

## 📋 Pre-Deployment Checklist

### Gmail Setup
- [ ] **2-Step Verification** enabled on `karinternationalinfotech@gmail.com`
- [ ] **App Password** generated (16 characters)
- [ ] App Password saved securely (you'll need it for deployment)

### Code Verification
- [ ] All files committed to Git
- [ ] `.env` file **NOT** committed (should be in `.gitignore`)
- [ ] Contact form tested locally (optional)
- [ ] No console errors in browser

### Deployment Platform Setup
- [ ] Account created on Vercel or Netlify
- [ ] GitHub repository connected
- [ ] Build settings configured correctly

---

## 🚀 Deployment Steps

### Step 1: Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Log in with: `karinternationalinfotech@gmail.com`
3. Enable 2-Step Verification (if not already)
4. Create App Password:
   - App: Mail
   - Device: Other → "KAR Website"
5. Copy the 16-character password (remove spaces)

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Configure settings:
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **BEFORE DEPLOYING**: Add Environment Variables:
   - `EMAIL_USER` = `karinternationalinfotech@gmail.com`
   - `EMAIL_PASSWORD` = `[your 16-char app password]`
7. Click "Deploy"
8. Wait 2-3 minutes

### Step 4: Verify Deployment
- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Theme toggle works
- [ ] Contact form displays correctly

### Step 5: Test Email Functionality
- [ ] Fill out contact form with test data
- [ ] Submit form
- [ ] See success message
- [ ] Check `karinternationalinfotech@gmail.com` inbox
- [ ] Verify email received with correct formatting
- [ ] Test "Reply" button (should go to test email)

---

## ✅ Post-Deployment Verification

### Functional Tests
- [ ] Homepage loads
- [ ] About page displays team/vision/mission
- [ ] Services page shows all services
- [ ] Products page displays products
- [ ] Contact form works
- [ ] Navigation menu functional
- [ ] Footer links work
- [ ] Theme toggle works (dark/light mode)

### Email Tests
- [ ] Contact form submission succeeds
- [ ] Email received at Gmail
- [ ] Email formatting looks professional
- [ ] All form fields appear in email
- [ ] Reply-To works correctly

### Mobile Tests
- [ ] Website responsive on mobile
- [ ] Menu hamburger works
- [ ] Contact form usable on mobile
- [ ] Images scale correctly

### Browser Tests
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

---

## 🔧 Configuration Check

### Environment Variables (on Vercel/Netlify)
```
EMAIL_USER=karinternationalinfotech@gmail.com
EMAIL_PASSWORD=[16-character-app-password]
```

### Build Settings
```
Framework: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Node Version: 18.x (or latest LTS)
```

---

## ⚠️ Common Issues & Fixes

### Issue: Email not sending
**Fix:**
- Check environment variables are set correctly
- Verify App Password (regenerate if needed)
- Check Gmail spam folder
- Wait 1-2 minutes (sometimes delayed)

### Issue: Build fails on Vercel
**Fix:**
- Check build logs for errors
- Verify `package.json` has all dependencies
- Try running `npm run build` locally first
- Clear Vercel cache and redeploy

### Issue: API endpoint not found (404)
**Fix:**
- Verify `vercel.json` exists in frontend folder
- Check `api` folder exists with `send-email.js`
- Redeploy the project

### Issue: CORS errors
**Fix:**
- Check `send-email.js` has CORS headers
- Verify you're calling `/api/send-email` not full URL

---

## 📱 Contact Information Update

If you need to change the recipient email:

1. **Update environment variable** on Vercel:
   - Go to Project → Settings → Environment Variables
   - Update `EMAIL_USER` to new email address

2. **Generate new App Password**:
   - For the new email account
   - Update `EMAIL_PASSWORD` variable

3. **Redeploy**:
   - Go to Deployments → Latest → "..." → Redeploy

---

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Website is live and accessible
- ✅ All pages load without errors
- ✅ Contact form submits successfully
- ✅ Email arrives at `karinternationalinfotech@gmail.com`
- ✅ Email formatting is professional
- ✅ Mobile version works correctly
- ✅ Theme toggle works
- ✅ No console errors

---

## 📞 Support Resources

- **Quick Start**: [QUICK_START.md](./QUICK_START.md)
- **Detailed Setup**: [EMAIL_SETUP.md](./EMAIL_SETUP.md)
- **Technical Details**: [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
- **Vercel Docs**: https://vercel.com/docs
- **Gmail App Passwords**: https://myaccount.google.com/apppasswords

---

## 🚀 Next Steps After Deployment

1. **Share your website URL** with stakeholders
2. **Monitor email inbox** for contact form submissions
3. **Set up custom domain** (optional):
   - Purchase domain (GoDaddy, Namecheap, etc.)
   - Connect to Vercel: Settings → Domains
4. **Set up analytics** (optional):
   - Google Analytics
   - Vercel Analytics
5. **Regular maintenance**:
   - Update content as needed
   - Monitor email functionality
   - Keep dependencies updated

---

**🎊 Congratulations! Your website is now live!**

Share it with the world: `https://your-project.vercel.app`
