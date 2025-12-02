# FFF Postal Service Website

🌐 **Live Website**: [https://moalissa69420.github.io/fffpostalservice/](https://moalissa69420.github.io/fffpostalservice/)

A minimalist website design inspired by Martine Rose, featuring an animated background and clean navigation.

## Features

- **Animated Background**: Continuous downward scrolling background at 1.5x speed
- **Transparent Logo**: Logo with white background removed, placed at the top center
- **Bottom Navigation**: SHOP, COLLECTIONS, ABOUT, and CART links
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Setup

1. **Install Dependencies** (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```

2. **Convert PDFs to Images** (already done):
   ```bash
   python3 convert_pdfs.py
   ```
   This will:
   - Convert `FFF 3D Image.pdf` to `assets/background.png`
   - Convert `Filled in Logo.pdf` to `assets/logo.png` (with transparent background)

3. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     ```
     Then visit: http://localhost:8000

## File Structure

```
fffpostalservice/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Animation logic
├── convert_pdfs.py     # PDF to image converter
├── requirements.txt    # Python dependencies
├── assets/
│   ├── background.png  # Animated background image
│   └── logo.png        # Transparent logo
└── README.md           # This file
```

## Customization

- **Animation Speed**: Edit `script.js` and change the `speedMultiplier` value
- **Colors**: Modify CSS variables in `styles.css`
- **Navigation Links**: Update the `href` attributes in `index.html`

## Notes

- The background animation loops seamlessly using two layers
- Logo is positioned at the top center with transparency
- Navigation is fixed at the bottom, similar to the Martine Rose reference

