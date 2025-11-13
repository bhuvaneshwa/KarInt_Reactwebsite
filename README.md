# 🌟 KAR International InfoTech - Website

A modern, responsive business website for KAR International InfoTech built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📧 Contact Form Email Setup

The contact form sends emails to `karinternationalinfotech@gmail.com` using Gmail App Password authentication.

### ⚡ Quick Setup (5 minutes)

**See [QUICK_START.md](./QUICK_START.md) for step-by-step instructions.**

**TL;DR:**
1. Generate Gmail App Password: https://myaccount.google.com/apppasswords
2. Deploy to Vercel with environment variables:
   - `EMAIL_USER`: karinternationalinfotech@gmail.com
   - `EMAIL_PASSWORD`: your-16-char-app-password
3. Done! ✨

### 📚 Documentation
- **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup guide
- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - Detailed setup & troubleshooting
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Technical overview

---

## 🏗️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Email Service**: Nodemailer + Gmail SMTP
- **Deployment**: Vercel (recommended) or Netlify
- **Architecture**: Static site with serverless functions

---

## 📁 Project Structure

```
frontend/
├── api/                    # Serverless functions
│   ├── send-email.js      # Email API endpoint
│   └── package.json       # API dependencies
├── public/                # Static assets
│   ├── images/           # Public images
│   └── logo.png
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── theme/           # Theme configuration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env.example         # Environment variables template
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies
```

---

## 🎨 Features

### Website Features
- ✅ Modern, responsive design
- ✅ Dark/Light theme toggle
- ✅ Dynamic service pages
- ✅ Product showcase
- ✅ About page with team section
- ✅ Contact form with validation
- ✅ Newsletter subscription
- ✅ Case studies & testimonials
- ✅ Career opportunities page

### Contact Form Features
- ✅ Client-side validation
- ✅ Email notifications
- ✅ Professional email templates
- ✅ Loading states
- ✅ Success/error messages
- ✅ Mobile responsive
- ✅ Service category dropdown
- ✅ Dynamic "Other" option field

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your repository
   - Configure:
     - Framework: **Vite**
     - Root Directory: **frontend**
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Add Environment Variables**
   - `EMAIL_USER`: karinternationalinfotech@gmail.com
   - `EMAIL_PASSWORD`: [your Gmail app password]

4. **Deploy!**

### Deploy to Netlify

1. **Push to GitHub**

2. **Import to Netlify**
   - Go to https://netlify.com
   - Click "Add new site"
   - Configure:
     - Base directory: **frontend**
     - Build command: `npm run build`
     - Publish directory: **frontend/dist**

3. **Add Environment Variables**
   - Same as Vercel

4. **Deploy!**

---

## 🔧 Environment Variables

Required for email functionality:

```env
EMAIL_USER=karinternationalinfotech@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

Copy `.env.example` to `.env` for local development.

---

## 📱 Pages

- **Home** (`/`) - Landing page with services overview
- **About** (`/about`) - Company information, vision, mission, team
- **Services** (`/services`) - Detailed service offerings
- **Products** (`/products`) - Product catalog
- **Contact** (`/contact`) - Contact form
- **Careers** (`/careers`) - Job opportunities
- **Privacy Policy** (`/privacy-policy`)
- **Terms & Conditions** (`/terms`)

---

## 🎯 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

---

## 🔒 Security

- ✅ Environment variables for secrets
- ✅ `.gitignore` configured to exclude `.env`
- ✅ CORS enabled on API endpoints
- ✅ Input validation on contact form
- ✅ Secure Gmail App Password authentication

---

## 🆘 Troubleshooting

### Development Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Email Not Sending
- Check [EMAIL_SETUP.md](./EMAIL_SETUP.md) troubleshooting section
- Verify environment variables are set
- Check Gmail App Password is correct

### Build Errors
```bash
# Clear build cache
rm -rf dist
npm run build
```

---

## 📞 Support

For issues or questions:
- 📧 Email: karinternationalinfotech@gmail.com
- 📖 Check documentation in this folder

---

## 📄 License

© 2024 KAR International InfoTech. All rights reserved.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
