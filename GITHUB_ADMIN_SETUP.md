# GitHub Auto-Deploy Admin Setup Guide

## 🎯 What This Is

Your admin panel at `https://islayah5.github.io/jovon-portfolio/admin` will:
1. ✅ Client logs in with GitHub
2. ✅ Edits content visually
3. ✅ Clicks "Publish"
4. ✅ **Auto-commits to GitHub**
5. ✅ **GitHub Pages auto-deploys**
6. ✅ Changes live in 1-2 minutes

**No manual uploads. Fully automated.**

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Create Netlify OAuth App

Even though you're using GitHub Pages (not Netlify hosting), we need Netlify's free OAuth service to handle GitHub authentication.

1. **Sign up for Netlify** (free): https://app.netlify.com/signup
2. Go to: **User Settings** → **Applications** → **OAuth**
3. Click **"New application"**
4. **Name:** `Jovon Portfolio Admin`
5. **Redirect URI:** `https://api.netlify.com/auth/done`
6. Click **"Register application"**
7. **Copy the Client ID** (you'll need this)

### Step 2: Deploy to Netlify (Just for OAuth)

We're NOT hosting the site on Netlify - just using it for authentication.

1. Go to: https://app.netlify.com/start
2. Click **"Import an existing project"**
3. Choose **GitHub**
4. Select `islayah5/jovon-portfolio`
5. **Build settings:**
   - Base directory: ` ` (leave empty)
   - Build command: ` ` (leave empty)
   - Publish directory: `/` (root)
6. Click **"Deploy site"**

**Don't worry** - this won't affect your GitHub Pages deployment. It's just for the OAuth service.

### Step 3: Enable Git Gateway

1. In Netlify site dashboard, go to: **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Scroll to **"Services"** → Click **"Enable Git Gateway"**
4. Under **"Git Gateway"**, click **"Edit settings"**
5. Select **"GitHub"** as the provider
6. **Authenticate with GitHub** (give permissions)
7. Save

### Step 4: Invite Client

1. Go to **Identity** tab (top nav)
2. Click **"Invite users"**
3. Enter client's email
4. They receive email → Set password → Done!

---

## 🎬 How Client Uses It

### Access URL

**Admin Panel:** `https://islayah5.github.io/jovon-portfolio/admin`

### First Time Login

1. Click **"Login with GitHub"**
2. Enter Netlify Identity email/password (from invitation)
3. Dashboard loads

### Every Edit After

1. Go to admin URL
2. Already logged in (or quick login)
3. Edit content
4. Click **"Publish"**
5. **Boom! Auto-committed to GitHub**
6. **GitHub Pages rebuilds automatically**
7. Changes live in 1-2 minutes

---

## 🔄 The Auto-Deploy Flow

```
Client clicks "Publish"
    ↓
Decap CMS commits to GitHub
    ↓
GitHub receives commit
    ↓
GitHub Pages detects change
    ↓
GitHub Pages rebuilds site
    ↓
Changes live at islayah5.github.io/jovon-portfolio
```

**Completely automatic. No manual steps.**

---

## ✅ Testing Checklist

After setup, test:

- [ ] Admin loads at `/admin`
- [ ] Login works
- [ ] Can create a test project
- [ ] Click "Publish"
- [ ] Check GitHub commits (new commit appears)
- [ ] Wait 1-2 minutes
- [ ] Check live site (changes appear)
- [ ] Delete test project

---

## 🎯 Client Workflow (Final)

**Literally 3 steps:**

1. Visit `https://islayah5.github.io/jovon-portfolio/admin`
2. Edit content
3. Click "Publish"

**That's it. Changes are live in 1-2 minutes automatically.**

---

## 🔒 Security

- ✅ OAuth authentication (GitHub account required)
- ✅ Only invited users can access
- ✅ All changes logged in GitHub commits
- ✅ Full version history
- ✅ Can revert any change

---

## 🆘 Troubleshooting

**"Failed to load Git Gateway..."**
- Make sure Git Gateway is enabled in Netlify
- Verify GitHub authentication was completed

**"Cannot read user data"**
- Client needs to accept invitation email first
- Check Netlify Identity is enabled

**Changes not appearing?**
- Wait 2-3 minutes for GitHub Pages rebuild
- Check GitHub commits to verify change was saved
- Check GitHub Pages deployment status

---

## 💰 Cost

**Everything is FREE:**
- ✅ Netlify Identity: Free (up to 1,000 users)
- ✅ Git Gateway: Free
- ✅ GitHub Pages: Free
- ✅ Decap CMS: Free (open source)

**Total: $0/month** 🎉

---

## 📞 Support

**Netlify OAuth Setup:** https://docs.netlify.com/visitor-access/oauth-provider-tokens/
**Git Gateway Docs:** https://docs.netlify.com/visitor-access/git-gateway/
**Decap CMS Docs:** https://decapcms.org/docs/

---

## 🎉 Summary

Once setup is complete:

**Client experience:**
1. Visit admin URL
2. Edit content
3. Click Publish
4. Done!

**What happens behind the scenes:**
1. Commits to GitHub automatically
2. GitHub Pages rebuilds
3. Changes live in 1-2 minutes

**Zero manual work. Fully automated.** 🚀
