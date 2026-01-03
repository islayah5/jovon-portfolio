# Netlify Deployment & Admin Setup Guide

Complete step-by-step guide to deploy the portfolio and enable the admin dashboard.

---

## 🚀 Part 1: Deploy to Netlify

### Option A: Drag & Drop (Easiest)

1. **Go to Netlify:** https://app.netlify.com/drop
2. **Drag the entire portfolio folder** onto the page
3. **Wait 30 seconds** for deployment
4. **Done!** Your site is live

**Your site URL:** `https://random-name-123.netlify.app`

### Option B: Connect GitHub (Recommended for updates)

1. **Push to GitHub:**
   ```bash
   cd Jovon-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/islayah5/jovon-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to: https://app.netlify.com/start
   - Click **"Import from Git"**
   - Choose **GitHub**
   - Select `islayah5/jovon-portfolio` repository
   - Click **"Deploy site"**

3. **Auto-deploy enabled:**
   - Every push to GitHub = automatic deployment
   - Admin changes = automatic deployment
   - No manual rebuilds needed

---

## 🔐 Part 2: Enable Netlify Identity (Required for Admin)

### Step 1: Enable Identity

1. Go to your site dashboard on Netlify
2. Click **"Site settings"** (top navigation)
3. Click **"Identity"** (left sidebar)
4. Click **"Enable Identity"**

✅ Identity is now enabled!

### Step 2: Configure Identity Settings

1. In Identity settings, scroll to **"Registration"**
2. Change from **"Open"** to **"Invite only"**
   - This prevents random people from creating accounts
3. Scroll to **"External providers"**
4. **Optional:** Enable Google/GitHub login for easier access

### Step 3: Enable Git Gateway

1. Still in Identity settings
2. Scroll to **"Services"** section
3. Click **"Enable Git Gateway"**
4. Confirm when prompted

✅ Admin panel authentication is now configured!

---

## 👤 Part 3: Invite Your Client

### Send Invitation

1. Go to **"Identity"** tab (top navigation, not settings)
2. Click **"Invite users"** button
3. Enter client's email address
4. Click **"Send invitation"**

### Client Setup Process

Your client receives an email:

1. **Email:** "You've been invited to Jovon King Portfolio"
2. They click **"Accept the invitation"**
3. They set a **password** (minimum 8 characters)
4. They're automatically logged in
5. They can now access `/admin`

---

## 🎯 Part 4: Test the Admin Panel

### Access Admin URL

**Format:** `https://your-site-name.netlify.app/admin`

**Example:** `https://wondrous-chimera-68d63f.netlify.app/admin`

### First Login Test

1. Go to admin URL
2. Click **"Login with Netlify Identity"**
3. Enter your email and password
4. You should see the admin dashboard

### Test Creating a Project

1. Click **"Gallery Projects"** in sidebar
2. Click **"New Gallery Project"**
3. Fill in all fields:
   - Title: Test Project
   - Category: commercial
   - Type: video
   - Source: https://vimeo.com/123456
   - Description: This is a test
   - Tech: Premiere Pro
   - Year: 2025
4. Click **"Publish"**
5. Wait 2 minutes
6. Check main site - project should appear!

### Test Editing Contact Info

1. Click **"Site Settings"** → **"Contact Information"**
2. Change email to a test address
3. Click **"Publish"**
4. Wait 2 minutes
5. Check main site - email should update everywhere

---

## 🔧 Troubleshooting

### "Unable to access identity settings"

**Problem:** Identity not enabled

**Solution:**
1. Site Settings → Identity
2. Click "Enable Identity"
3. Wait a minute, refresh page

### "Git Gateway Error"

**Problem:** Git Gateway not enabled

**Solution:**
1. Identity settings → Services
2. Enable Git Gateway
3. Make sure GitHub repo is connected

### "Login button doesn't work"

**Problem:** Netlify Identity script not loaded

**Solution:**
1. Check `/admin/index.html` has:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
2. Deploy site again if missing

### "Changes not appearing on live site"

**Problem:** Deploy didn't trigger

**Solution:**
1. Check Netlify dashboard → Deploys tab
2. Look for recent deploy (should say "Published")
3. If stuck, click "Trigger deploy" → "Clear cache and deploy"

### Client didn't receive invitation email

**Solution:**
1. Check spam folder
2. Verify email address is correct
3. Resend invitation from Identity tab
4. Try different email address

---

## 📋 Complete Setup Checklist

Copy this checklist and check off as you go:

### Deployment
- [ ] Portfolio deployed to Netlify
- [ ] Site loads correctly at Netlify URL
- [ ] Custom domain connected (optional)

### Identity Setup
- [ ] Netlify Identity enabled
- [ ] Registration set to "Invite only"
- [ ] Git Gateway enabled
- [ ] Test invitation sent to yourself

### Admin Panel
- [ ] Can access `/admin` URL
- [ ] Login works with test user
- [ ] Can create a gallery project
- [ ] Can edit site settings
- [ ] Changes appear on live site after 2 minutes

### Client Onboarding
- [ ] Client invited via Identity
- [ ] Client set password successfully
- [ ] Client can log into admin panel
- [ ] Shared ADMIN_GUIDE.md with client
- [ ] Scheduled 15-min walkthrough call

---

## 🎓 What Happens When Client Edits Content?

### The Flow

```
1. Client logs into /admin
   ↓
2. Client edits project/settings
   ↓
3. Client clicks "Publish"
   ↓
4. CMS saves JSON file to GitHub
   ↓
5. GitHub triggers webhook to Netlify
   ↓
6. Netlify rebuilds site (1-2 minutes)
   ↓
7. Changes go live automatically
```

### No Developer Needed!

- Client makes changes themselves
- Changes are immediate (after rebuild)
- Full version history in GitHub
- Can revert if needed
- No code knowledge required

---

## 🔒 Security Notes

### Who Can Access Admin?

**Only invited users:**
- Invitation must be sent from Netlify dashboard
- Each user has own password
- Logged in GitHub (version control)

### Removing Access

1. Go to Identity tab
2. Find user
3. Click **"..."** menu
4. Click **"Delete user"**
5. User can no longer log in

### Changing Password

**Client can:**
1. Go to `/admin`
2. Click profile icon
3. Click "Change password"
4. Enter new password

**Or admin can:**
1. Delete user
2. Re-invite with same email
3. They set new password

---

## 💡 Pro Tips

### Custom Domain

**To use `jovonking.com` instead of Netlify URL:**

1. Buy domain (Namecheap, Google Domains)
2. In Netlify: Domain settings → Add custom domain
3. Update DNS records (Netlify shows exact steps)
4. SSL certificate auto-configured
5. Admin URL becomes: `https://jovonking.com/admin`

### Multiple Admins

**To give multiple people access:**

1. Invite each person separately
2. Each gets own login
3. All changes logged with who did it
4. Can see edit history in GitHub

### Backup Strategy

**All content is backed up automatically:**

- Every change = GitHub commit
- Full history in repository
- Can revert any change
- Download entire backup from GitHub

---

## 📞 Support Resources

### Netlify Documentation
- Identity: https://docs.netlify.com/security/secure-access-to-sites/identity/
- Git Gateway: https://docs.netlify.com/visitor-access/git-gateway/

### Decap CMS Documentation
- Main docs: https://decapcms.org/docs/
- Authentication: https://decapcms.org/docs/authentication-backends/

### Video Tutorials
- Netlify Deploy: https://www.youtube.com/watch?v=4h8B080Mv4U
- Decap CMS Setup: https://www.youtube.com/watch?v=r6D3FgaIGAM

---

## 🎉 You're Done!

Once completed, your client can:

✅ Add/edit/delete projects  
✅ Upload images and videos  
✅ Update contact information  
✅ Change about section text  
✅ Modify skills and capabilities  
✅ All without touching code!

**The professional, no-code portfolio management system is ready!**
