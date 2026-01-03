# Portfolio Admin Panel - Complete Guide

## 🎯 Accessing the Admin Panel

### For Netlify Deployment (Recommended)

**Admin URL:** `https://your-site-name.netlify.app/admin`

**First Time Setup:**
1. Go to the admin URL
2. Click **"Login with Netlify Identity"**
3. Enter the password you set when invited
4. You'll see the admin dashboard

### For Local Testing

**Admin URL:** `file:///path/to/Jovon-portfolio/admin/index.html`

_(Note: Full functionality requires Netlify deployment)_

---

## 🚀 Quick Start

### Adding Your First Project

1. Click **"Gallery Projects"** in the left sidebar
2. Click **"New Gallery Project"** button (top right)
3. Fill in the project details:
   - **Title**: Your project name
   - **Category**: Choose one (Commercial, Narrative, Events, Music, BTS)
   - **Type**: Video or Image
   - **Source**: See video hosting guide below
   - **Thumbnail**: Upload a preview image (optional)
   - **Description**: 1-2 sentences about the project
   - **Tech Stack**: Click "Add item" to add each tool
   - **Year**: Project completion year
4. Click **"Save"** (saves as draft)
5. Click **"Publish"** to make it live

**Changes appear on your site in 1-2 minutes!**

---

## 📝 Editing Site Sections

### Contact Information

**Path:** Site Settings → Contact Information

**Editable fields:**
- Email address (updates everywhere automatically)
- LinkedIn profile URL
- Instagram profile URL  
- Vimeo channel URL
- Resume/PDF link

**After editing:**
1. Click **"Publish"**
2. Wait 1-2 minutes
3. Check live site (hard refresh: `Cmd+Shift+R`)

---

### Hero Section (Homepage Top)

**Path:** Site Settings → Hero Section

**Editable fields:**
- Name
- Title (e.g., "Video Editor & Filmmaker")
- Tagline (appears below title)
- Headshot image (upload new photo)

**Image requirements:**
- Format: JPG or PNG
- Size: 1:1 aspect ratio, minimum 800x800px
- File size: Under 2MB

---

### About Section

**Path:** Site Settings → About Section

**Editable fields:**
- **Background Paragraph**: Your journey into filmmaking (2-3 sentences)
- **Philosophy Statement**: What drives your creative vision (2-3 sentences)

---

### Skills & Capabilities

**Path:** Site Settings → Skills & Capabilities

**Managing skills:**
- View current 6 skills
- Edit any skill (title, icon, description)
- Add new skills (click "Add skill")
- Reorder skills (drag and drop)

**Icon names:** Use Font Awesome icons
- Find icons at: https://fontawesome.com/icons
- Example: `fa-cut` for scissors
- Example: `fa-camera` for camera

---

## 🎬 Video Hosting Guide

### Option 1: Vimeo (Recommended)

**Why Vimeo?**
- High quality playback
- Professional appearance
- No ads
- Best for client portfolios

**How to use:**
1. Upload video to Vimeo
2. Get video ID from URL: `vimeo.com/123456789`
3. In admin, enter: `https://vimeo.com/123456789`

**Example:**
```
Video URL: https://vimeo.com/987654321
Enter in admin: https://vimeo.com/987654321
```

---

### Option 2: YouTube

**How to use:**
1. Upload video to YouTube
2. Get video ID from URL: `youtube.com/watch?v=ABC123`
3. In admin, enter: `https://youtube.com/embed/ABC123`

**Example:**
```
Video URL: https://youtube.com/watch?v=dQw4w9WgXcQ
Enter in admin: https://youtube.com/embed/dQw4w9WgXcQ
```

---

### Option 3: Local Files

**For smaller videos only:**
1. Add video file to `assets/images/` folder
2. In admin, enter just the filename: `my-video.mp4`

**⚠️ Warning:** Videos should be under 50MB for fast loading

---

## 📸 Image Uploads

### How to Upload Images

1. Click **"Choose an image"** button
2. Select image from your computer
3. Image uploads automatically
4. Appears in the `assets/images/` folder

### Image Best Practices

**Thumbnails:**
- Format: JPG
- Size: 1920x1080px (16:9 ratio)
- File size: Under 500KB (compress at tinypng.com)

**Headshot:**
- Format: JPG or PNG
- Size: 800x800px minimum (1:1 ratio)
- File size: Under 1MB

---

## 🛠️ Understanding Drafts vs Published

### Workflow Status

**Draft:**
- ✍️ Work in progress
- Only visible in admin panel
- **NOT live on website**
- Can save multiple times

**In Review:**
- 👀 Ready for approval
- Still not live
- Optional status

**Published:**
- ✅ Live on website
- Visible to public
- Auto-deploys via GitHub

### Publishing Workflow

1. Create/edit content → **Save** (draft)
2. Preview changes in admin
3. Make adjustments → **Save** (still draft)
4. Ready to go live? → **Publish**
5. Wait 1-2 minutes for site rebuild
6. Check live site

---

## 🔄 How Updates Work

### Behind the Scenes

When you publish changes:

1. **CMS saves** → Creates JSON file in GitHub
2. **GitHub triggers** → Netlify rebuild
3. **Site rebuilds** → New version deployed  
4. **Live in 1-2 minutes** → Changes visible

### Why the delay?

- GitHub needs to save changes
- Netlify rebuilds the entire site
- CDN updates globally
- Usually takes 1-2 minutes total

**💡 Tip:** Hard refresh browser after publishing: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

## 📊 Managing Gallery Projects

### Viewing All Projects

**Path:** Gallery Projects (sidebar)

**What you see:**
- List of all projects
- Search bar (top)
- Filter by status (draft/published)
- Sort options

### Editing a Project

1. Click on project title
2. Make changes
3. Click **"Save"** (if still working)
4. Click **"Publish"** (to make live)

### Deleting a Project

1. Open the project
2. Click **"Delete"** (top right)
3. Confirm deletion
4. Click **"Publish"** to remove from live site

### Reordering Projects

Projects appear on the site in this order:
1. Newest first (by year)
2. Then by ID number

**To feature a project:**
- Set year to current year
- Or edit `gallery-data.js` order manually

---

## 🎯 Common Tasks

### Update Contact Email

1. Site Settings → Contact Information
2. Change **"Email Address"** field
3. Publish
4. Email updates in 4 places automatically:
   - Navigation contact button
   - Work section link
   - Footer CTA button
   - Footer social icons

### Add New Social Link

1. Site Settings → Contact Information
2. Update LinkedIn/Instagram/Vimeo URL
3. Publish
4. Links update in footer automatically

### Change Headshot Photo

1. Site Settings → Hero Section
2. Click **"Choose an image"**
3. Upload new photo (800x800px minimum)
4. Publish
5. New photo appears on homepage

### Add Portfolio Video

1. Upload video to Vimeo
2. Gallery Projects → New Gallery Project
3. Fill in details
4. Enter Vimeo URL in **"Source"** field
5. Upload thumbnail (optional)
6. Publish

---

## 🆘 Troubleshooting

### I can't log in

**Check:**
- Are you using the correct email?
- Did you set a password (check email invite)?
- Are you on the deployed site (not local file)?
- Try logging out and back in

**Solution:**
Ask site owner to resend invitation via Netlify Identity

---

### My changes aren't showing

**Common causes:**

1. **Didn't click "Publish"**
   - Solution: Open project → Publish

2. **Site hasn't rebuilt yet**
   - Solution: Wait 2-3 minutes

3. **Browser cache**
   - Solution: Hard refresh (`Cmd+Shift+R`)

4. **Deploy failed**
   - Solution: Check Netlify dashboard for errors

---

### Image won't upload

**Check:**
- File size under 5MB?
- Format is JPG or PNG?
- Internet connection stable?

**Solution:**
- Compress image at tinypng.com
- Try different image
- Try updating browser

---

### Video not playing

**Check:**
- Vimeo/YouTube URL format correct?
- Video is public (not private)?
- URL actually works (test in browser)?

**Solution:**
- For Vimeo: `https://vimeo.com/VIDEO_ID`
- For YouTube: `https://youtube.com/embed/VIDEO_ID`
- Make sure video isn't set to private

---

## 🔐 Security Best Practices

### Password Security

- Use a strong, unique password
- Don't share password
- Change password every 6 months
- Enable 2FA if available

### User Access

**Admin can:**
- Add new users via Netlify Identity
- Remove user access anytime
- See all changes (version history in GitHub)

**Only invite trusted users:**
- They can edit everything
- Changes are immediate
- All edits are logged

---

## 💡 Pro Tips

### Workflow Tips

1. **Save often** - Draft saves don't affect live site
2. **Preview first** - Check admin preview before publishing
3. **One project at a time** - Easier to track changes
4. **Use descriptive titles** - Helps find projects later

### Content Tips

1. **Video descriptions** - Keep to 1-2 sentences
2. **Tech stack** - List 3-5 key tools used
3. **Category tags** - Be consistent (always use same category names)
4. **Years** - Use 4-digit year (2025, not '25)

### Performance Tips

1. **Optimize images** - Compress before uploading
2. **Use Vimeo** - Better than local video files
3. **Thumbnails** - Always provide thumbnails for videos
4. **File sizes** - Keep images under 1MB

---

## 📚 Quick Reference

### Admin URL
`https://your-site.netlify.app/admin`

### Video URL Formats
- **Vimeo:** `https://vimeo.com/123456789`
- **YouTube:** `https://youtube.com/embed/ABC123`
- **Local:** `filename.mp4`

### Categories
- `commercial` - Brand videos, ads
- `narrative` - Short films, documentaries
- `events` - Weddings, conferences
- `music` - Music videos
- `bts` - Behind the scenes

### Keyboard Shortcuts (in admin)
- `Cmd+S` - Save draft
- `Cmd+P` - Publish
- `Esc` - Close modal

---

## 🎓 Video Tutorial

**Coming soon:** Screen recording walkthrough showing:
- How to add a project
- How to upload images
- How to edit site settings
- How to publish changes

---

## 📞 Support

**For technical issues:**
- Check troubleshooting section above
- Contact site developer

**For content questions:**
- Experiment in drafts (safe, not public)
- Preview before publishing
- Can always revert via GitHub

---

## ✅ Admin Panel Checklist

**Before giving to client:**
- [ ] Netlify Identity enabled
- [ ] Client invited and password set
- [ ] Test login works
- [ ] Test creating a project
- [ ] Test uploading an image
- [ ] Test editing site settings
- [ ] Verify changes appear on live site
- [ ] Share this guide with client

**Client onboarding:**
- [ ] Send admin URL
- [ ] Send this guide
- [ ] Schedule 15-min walkthrough call
- [ ] Show how to add a project
- [ ] Show how to upload images
- [ ] Answer questions

---

**Last Updated:** January 2026  
**Admin Panel Version:** Decap CMS 3.0
