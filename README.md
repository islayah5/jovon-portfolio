# Jovon King - Video Editor & Filmmaker Portfolio

A stunning, professional portfolio website featuring advanced gallery system, smooth animations, and academic slate/blue color scheme.

## 🎬 Features

- **Advanced Gallery System** with category filtering
- **Cinematic Lightbox** with keyboard navigation (Arrow keys, ESC)
- **Custom Animated Cursor** (desktop only)
- **Smooth Scroll Animations** with reveal effects
- **Responsive Design** optimized for all devices
- **Video-First Design** with optimized playback
- **Professional Color Scheme** - Academic slate and blue tones

---

## 📋 Content Replacement Guide

This portfolio is set up with placeholder content. Follow this guide to replace it with your actual content.

### 1. Replace Personal Information

#### Hero Section (`index.html` lines ~109-142)
- **Headshot**: Replace `IC–Headshot.PNG` with your professional headshot
  - Format: JPG or PNG
  - Size: 1:1 aspect ratio, minimum 800x800px
  - Name it: `JOVON_KING_HEADSHOT.jpg`
  
- **Tagline**: Update line ~128
  ```html
  <span class=\"text-text/80\">Your compelling tagline about video storytelling</span>
  ```

- **Resume Link**: Update line ~138
  ```html
  <a href=\"YOUR_RESUME_LINK.pdf\" target=\"_blank\">
  ```

---

### 2. About Section (`index.html` lines ~154-177)

#### Background Paragraph (line ~166)
Replace placeholder with 2-3 sentences about your journey into filmmaking:
```html
<p>
    Your background story - how you got into video editing and filmmaking...
</p>
```

#### Philosophy Statement (line ~170)
Replace with what drives your creative vision:
```html
<p>
    Your creative philosophy and what makes your work unique...
</p>
```

---

### 3. Skills Section (`index.html` lines ~234-289)

The current skills are filmmaker-focused:
1. Video Editing
2. Color Grading
3. Motion Graphics
4. Sound Design
5. Cinematography
6. Complete Production

**To Customize:**
- Change skill titles and descriptions to match your expertise
- Update icons (find Font Awesome icons at fontawesome.com)
- Example: `<i class=\"fas fa-your-icon text-2xl text-blue\"></i>`

---

### 4. Gallery/Portfolio Projects (`gallery-data.js`)

This is the most important file! Replace each project with your actual work.

#### Project Structure:
```javascript
{
    id: 1,
    title: \"YOUR PROJECT TITLE\",
    category: \"commercial|narrative|events|music|bts\",
    type: \"video|image\",
    src: \"YOUR_VIDEO_FILE.mp4 or https://vimeo.com/VIDEO_ID\",
    thumbnail: \"THUMBNAIL_IMAGE.jpg\",
    description: \"1-2 sentences about this project\",
    tech: [\"Camera Gear\", \"Software Used\", \"Techniques\"],
    year: \"2024\"
}
```

#### Categories Available:
- `commercial` - Brand videos, product demos, advertising
- `narrative` - Short films, documentaries, storytelling
- `events` - Weddings, conferences, live events
- `music` - Music videos and performance content
- `bts` - Behind the scenes, process videos

#### Video Hosting Options:
1. **Local Files**: Place video in the portfolio folder
   ```javascript
   src: \"my-video.mp4\"
   ```

2. **Vimeo** (Recommended for high-quality):
   ```javascript
   src: \"https://vimeo.com/YOUR_VIDEO_ID\"
   ```

3. **YouTube**:
   ```javascript
   src: \"https://youtube.com/embed/YOUR_VIDEO_ID\"
   ```

4. **Google Drive** (for thumbnails):
   ```javascript
   thumbnail: \"https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000\"
   ```

---

### 5. Contact Information

#### Email Addresses:
Search and replace `jovon@example.com` with your actual email in:
- Line ~136 (hero CTA)
- Line ~311 (work section)
- Line ~326 (footer CTA)
- Line ~343 (footer social icons)

#### Social Media Links (lines ~332-343):
```html
<a href=\"https://www.linkedin.com/in/YOUR_PROFILE\" target=\"_blank\">
<a href=\"https://www.instagram.com/YOUR_HANDLE\" target=\"_blank\">
<a href=\"https://vimeo.com/YOUR_CHANNEL\" target=\"_blank\">
```

---

## 🎨 Customization

### Color Scheme
The current theme uses academic slate/blue:
- Primary Blue: `#3b82f6`
- Royal Blue: `#1e3a8a`
- Slate: `#334155`

To change colors, edit in `index.html` (lines ~24-34) and `styles.css` (lines ~6-16).

### Typography
Current fonts:
- **Display**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)

Change fonts in `/index.html` line ~15:
```html
<link href=\"https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap\" rel=\"stylesheet\">
```

---

## 🚀 Deployment

### Option 1: Quick Deploy (Recommended)
1. **Netlify Drop** (netlify.com/drop)
   - Drag the entire folder
   - Instant live URL

2. **Vercel** (vercel.com)
   - Connect your GitHub repo
   - Auto-deploy on push

### Option 2: Traditional Hosting
1. Upload all files to your web host via FTP
2. Ensure `index.html` is in the root directory
3. All linked files (`styles.css`, `script.js`, `gallery-data.js`) must be accessible

---

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # All custom styles
├── script.js               # Interactive features
├── gallery-data.js         # Portfolio projects (EDIT THIS!)
├── IC–Headshot.PNG         # Replace with your headshot
├── 3D-SMR_Model.mp4        # Replace with your videos
├── portfolio-presentation.mp4
└── YES-Maddie.jpg
```

---

## 🔧 Technical Features

### Keyboard Shortcuts (in lightbox):
- `←` / `→` - Navigate between projects
- `ESC` - Close lightbox
- `Space` - Play/pause video (when applicable)

### Performance:
- Lazy loading images
- Optimized animations
- Mobile-responsive
- Smooth 60fps transitions

---

## 📝 Content Checklist

Before going live, make sure you've replaced:
- [ ] Headshot image
- [ ] Name and tagline
- [ ] About section text
- [ ] All portfolio projects in `gallery-data.js`
- [ ] Contact email (appears 4 times)
- [ ] Social media links
- [ ] Resume/PDF link
- [ ] Skills (if needed)

---

## 💡 Tips

### Video Files:
- Use MP4 format (H.264 codec) for best compatibility
- Keep file sizes under 50MB for fast loading
- Consider hosting large files on Vimeo/YouTube

### Images:
- Export at 2x resolution for retina displays
- Use JPG for photos, PNG for graphics
- Compress with TinyPNG or similar tools

### Testing:
- Test on mobile devices
- Check all links work
- Verify videos play correctly
- Test lightbox navigation

---

## 🆘 Support

### Common Issues:

**Gallery not showing:**
- Check `gallery-data.js` is loaded
- Verify file paths are correct
- Check browser console for errors

**Videos not playing:**
- Ensure MP4 format (H.264)
- Check file path is relative to index.html
- Try using external hosting (Vimeo)

**Styling looks wrong:**
- Clear browser cache
- Check `styles.css` is linked correctly
- Verify TailwindCSS CDN is loading

---

## 📄 License

This portfolio template is provided for Jovon King. Feel free to customize and use as needed.

---

**Built with:** HTML5, TailwindCSS, Vanilla JavaScript
**Optimized for:** All modern browsers, mobile-first design
**Framework:** None - Pure vanilla for maximum control and performance
