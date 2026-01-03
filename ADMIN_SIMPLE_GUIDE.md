# Simple Admin Panel - Quick Start Guide

## 🎯 For the Client

### Access the Admin Panel

**URL:** `https://your-site.com/admin-simple.html`

**OR locally:** Just open `admin-simple.html` in your browser

---

## 🔐 Login

**Password:** `portfolio2025`

_(You can change this password by editing line 259 in admin-simple.html)_

1. Open the admin page
2. Enter password
3. Click Login

---

## ✏️ How to Edit Content

### Adding a New Project

1. Click **"+ Add New Project"** button
2. Fill in the form:
   - **Title**: Your project name
   - **Category**: Choose from dropdown
   - **Type**: Video or Image
   - **Source**: Paste your Vimeo/YouTube URL
   - **Description**: 1-2 sentences
   - **Tech Stack**: Camera, Software, etc. (comma separated)
   - **Year**: 2025
3. Click **"Save Project"**
4. **Files automatically download!**

### Editing Contact Info

1. Click **"Contact Info"** tab
2. Update email, social links, resume URL
3. Click **"Save Changes"**
4. **Files automatically download!**

### Editing About Section

1. Click **"About Section"** tab
2. Update your background and philosophy text
3. Click **"Save Changes"**
4. **Files automatically download!**

### Editing Hero Section

1. Click **"Hero Section"** tab
2. Update name, title, tagline
3. Click **"Save Changes"**
4. **Files automatically download!**

---

## 📥 What Happens When You Save?

When you click "Save Changes", these files automatically download to your computer:

- `gallery-data.js` - Updated projects
- `contact.json` - Updated contact info
- `about.json` - Updated about text
- `hero.json` - Updated hero section

---

## 🚀 Uploading Changes to Live Site

After saving changes in the admin panel:

### Option A: If using Netlify/Vercel hosting

1. Go to your hosting dashboard
2. Drag the downloaded files to replace the old ones
3. Site rebuilds automatically
4. Changes live in 1-2 minutes

### Option B: If using FTP/cPanel

1. Connect to your web server via FTP
2. Upload `gallery-data.js` to main folder
3. Upload JSON files to `_data/` folder
4. Changes appear immediately

### Option C: If using GitHub

1. Commit the downloaded files to your repository
2. Push to GitHub
3. Site auto-deploys
4. Changes live in 1-2 minutes

---

## 🎓 Video Hosting Tips

### Vimeo (Recommended)
1. Upload video to Vimeo
2. Copy the URL: `https://vimeo.com/123456789`
3. Paste in "Source" field
4. Done!

### YouTube
1. Upload to YouTube
2. Get video ID from URL: `youtube.com/watch?v=ABC123`
3. Enter: `https://youtube.com/embed/ABC123`

---

## 🔒 Changing the Password

1. Open `admin-simple.html` in a text editor
2. Find line 259: `const ADMIN_PASSWORD = 'portfolio2025';`
3. Change to your password: `const ADMIN_PASSWORD = 'MyNewPassword123';`
4. Save the file
5. Upload to your server

---

## ⚠️ Important Notes

- **Keep the password safe!** Anyone with the password can edit your portfolio
- **Download the files!** They contain your updated content
- **Upload to your server** after editing to see changes live
- **Backup regularly** - save a copy of your files

---

## 🆘 Troubleshooting

**Can't login?**
- Double-check the password (case-sensitive)
- Try refreshing the page

**Changes not appearing on live site?**
- Did you upload the downloaded files to your server?
- Clear browser cache (Cmd+Shift+R on Mac)
- Check files uploaded to correct folders

**Files not downloading?**
- Check your Downloads folder
- Allow pop-ups in browser settings
- Try a different browser

---

## 💡 Pro Tips

1. **Edit regularly** - Keep portfolio up to date
2. **Test first** - Make changes and preview before uploading
3. **Keep backups** - Save old versions of files
4. **Use Vimeo** - Better quality than YouTube for portfolios
5. **Compress images** - Use tinypng.com before uploading

---

**That's it! Simple editing without touching any code.** ✨
