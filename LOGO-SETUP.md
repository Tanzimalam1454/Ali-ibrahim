# 🏗️ Logo Setup Guide

Complete guide for adding your company logo and client logos to the website.

## 📁 Folder Structure Created

```
ali ibrahim/
├── assets/
│   ├── logos/
│   │   ├── company/          # Your company logo goes here
│   │   │   ├── logo.png      # ← ADD YOUR MAIN LOGO HERE
│   │   │   ├── logo-white.png (optional)
│   │   │   └── README.md
│   │   └── clients/          # Client logos go here
│   │       ├── client-1.png  # ← ADD CLIENT LOGOS HERE
│   │       ├── client-2.png
│   │       └── README.md
│   └── images/               # Other website images
└── index.html
```

## ✅ Step 1: Add Your Company Logo

### What You Need
You provided a logo with:
- Navy blue building outline (#2D4059)
- Red "AK" letters (#D84339)
- Arabic text at bottom

### How to Add It

1. **Save your logo file as PNG:**
   ```
   File: assets/logos/company/logo.png
   Format: PNG with transparent background
   Size: 500px+ width
   ```

2. **The logo will automatically appear in:**
   - ✅ Header navigation (top left)
   - ✅ Footer (bottom, converted to white)

3. **Refresh the website** - Done! Your logo is now visible.

## ✅ Step 2: Add Client Logos

### Prepare Client Logos

1. Collect logos from companies you've worked with
2. Remove backgrounds (make transparent)
3. Resize to ~250px width
4. Save as PNG files

### File Naming Convention

Use lowercase with hyphens:
```
assets/logos/clients/saudi-aramco.png
assets/logos/clients/sabic.png
assets/logos/clients/maaden.png
assets/logos/clients/sec.png
```

### Update HTML

Open `index.html` and find the clients section (around line 300).

Replace the placeholders:

```html
<!-- FROM THIS (placeholder): -->
<div class="client-logo-wrapper">
    <div class="client-logo-placeholder">
        <span>Client Logo</span>
    </div>
</div>

<!-- TO THIS (actual logo): -->
<div class="client-logo-wrapper">
    <img src="assets/logos/clients/saudi-aramco.png"
         alt="Saudi Aramco"
         class="client-logo">
</div>
```

### Example: Adding 6 Client Logos

```html
<div class="clients-grid">
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/saudi-aramco.png" alt="Saudi Aramco" class="client-logo">
    </div>
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/sabic.png" alt="SABIC" class="client-logo">
    </div>
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/maaden.png" alt="Ma'aden" class="client-logo">
    </div>
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/sec.png" alt="Saudi Electricity Company" class="client-logo">
    </div>
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/binladin.png" alt="Binladin Group" class="client-logo">
    </div>
    <div class="client-logo-wrapper">
        <img src="assets/logos/clients/aramco-project.png" alt="Aramco Project" class="client-logo">
    </div>
</div>
```

## 🎨 Logo Specifications

### Company Logo
- **Format:** PNG (transparent background)
- **Width:** Minimum 500px (1000px recommended for retina)
- **Height:** Auto (maintains aspect ratio)
- **Colors:** Navy #2D4059, Coral #D84339
- **File Size:** Under 200KB

### Client Logos
- **Format:** PNG (transparent background)
- **Width:** 200-300px
- **Height:** Auto
- **Style:** Grayscale effect (becomes color on hover)
- **File Size:** Under 100KB each

## 📍 Where Logos Appear

### Company Logo
1. **Header:** 60px height, left side of navigation
2. **Footer:** 80px height, white filtered version

### Client Logos
- **Clients Section:** Grid layout, 6 logos per row (desktop)
- **Hover Effect:** Grayscale → Full color
- **Border Highlight:** Changes to coral red on hover

## 🚀 Quick Start Checklist

- [ ] Save company logo as `assets/logos/company/logo.png`
- [ ] Collect client logos (minimum 4-6 recommended)
- [ ] Save client logos in `assets/logos/clients/`
- [ ] Update `index.html` clients section with actual logos
- [ ] Refresh website to see changes
- [ ] Test on mobile devices

## 💡 Pro Tips

### Getting Client Logos
- Visit company websites, look for "Press Kit" or "Brand Assets"
- Use Google Images: search "company name logo transparent"
- Use remove.bg to remove backgrounds
- Contact clients for official brand guidelines

### Optimization
- Use TinyPNG.com to compress files
- Keep files under 200KB for fast loading
- Use 2x resolution for retina displays
- Test on different screen sizes

### Suggested Saudi Clients
If you've worked with these companies:
- Saudi Aramco
- SABIC
- Ma'aden
- Saudi Electricity Company (SEC)
- Saudi Binladin Group
- Al Rajhi Group
- ROSHN
- Red Sea Global

## 🔧 Troubleshooting

### Logo Not Showing?
1. Check file path: `assets/logos/company/logo.png`
2. Verify filename is exactly `logo.png` (lowercase)
3. Ensure PNG format with transparent background
4. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Logo Too Big/Small?
- Header: Adjust height in CSS (currently 60px)
- Footer: Adjust height in CSS (currently 80px)
- Edit `styles.css` and search for `.logo-image`

### Client Logos Not Aligned?
- All logos should be similar width (200-300px)
- Use transparent backgrounds
- Square or horizontal orientation works best

## 📞 Need Help?

Check the README files in each folder:
- `assets/README.md` - Overview
- `assets/logos/company/README.md` - Company logo details
- `assets/logos/clients/README.md` - Client logo details

---

**Ready to go?** Just add your logo files and refresh the page!
