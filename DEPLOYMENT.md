# GitHub Pages Deployment Guide

## 🚀 Quick Deploy (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Repository name: `jovon-portfolio` (or your preferred name)
4. Description: "Professional portfolio for Jovon King - Video Editor & Filmmaker"
5. **Keep it Public** (required for free GitHub Pages)
6. **DO NOT** check "Add a README" or "Add .gitignore"
7. Click **Create repository**

---

### Step 2: Deploy from Terminal

Copy and paste these commands **one at a time** in your terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio deployment"

# Rename branch to main
git branch -M main

# Add your GitHub repository (REPLACE WITH YOUR ACTUAL REPO URL)
git remote add origin https://github.com/YOUR_USERNAME/jovon-portfolio.git

# Push to GitHub
git push -u origin main
```

**⚠️ Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/jovon-portfolio/`

---

## 🌐 Custom Domain (Optional)

If you have a custom domain like `jovonking.com`:

1. Create a file named `CNAME` in your repository with your domain
2. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
   - Or add an `A` record pointing to GitHub's IPs

GitHub will automatically configure HTTPS for your custom domain!

---

## 🔄 Updating Your Portfolio

After making changes to your portfolio:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Updated gallery content"

# Push to GitHub (site updates automatically)
git push
```

Site updates in 30-60 seconds! ⚡️

---

## ✅ Deployment Checklist

Before going live:
- [ ] Replace all `[PLACEHOLDER]` content in `gallery-data.js`
- [ ] Update email from `jovon@example.com` to real email
- [ ] Add actual headshot image
- [ ] Update social media links
- [ ] Test all links work
- [ ] Check responsive design on phone

---

## 🆘 Troubleshooting

**Site not showing?**
- Wait 2-3 minutes after first deployment
- Check Settings → Pages shows "Your site is live at..."
- Make sure repository is Public

**Changes not appearing?**
- Check your commit was pushed: `git log --oneline`
- GitHub Pages can take 30-60 seconds to rebuild

**404 Error?**
- Verify repository name matches
- Check Settings → Pages shows correct branch (main)

---

## 📱 Testing Before Deploy

Open `index.html` in a browser to test locally:
```bash
open index.html
```

Or use Python's simple server:
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 🎯 Next Steps After Deployment

1. Share your portfolio URL!
2. Add to LinkedIn, Instagram bio, email signature
3. Update regularly with new projects
4. Monitor with Google Analytics (optional)
5. Build your brand using your new badass portfolio! 🎬

---

**Need help?** Check [GitHub Pages docs](https://docs.github.com/en/pages)
