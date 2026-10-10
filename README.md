# Aegis Android - Local AI Assistant Website

A beautiful, responsive website for Aegis - the private local AI assistant for Android devices, hosted on GitHub Pages.

## Features

- **Oil Ink & Oil Cherry Red Theme**: Sophisticated dark theme with elegant cherry red accents
- **Apple-Inspired Design**: Clean, refined interface with thoughtful interactions and subtle animations
- **Smooth Animations**: Subtle animations and transitions for premium feel
- **Responsive Design**: Works flawlessly on mobile, tablet, and desktop
- **GitHub Pages Optimized**: Configured for seamless deployment to GitHub Pages
- **Download Section**: Easy access to the latest Android APK
- **Modern UI**: Clean, intuitive interface with focus on usability
- **Performance Optimized**: Fast loading and smooth interactions

## Design Details

### Color Palette
- **Oil Ink**: `#000000` (Primary background)
- **Oil Ink Darker**: `#0a0a0a` (Secondary surfaces)
- **Oil Ink Lighter**: `#111111` (Card backgrounds)
- **Oil Cherry Red**: `#8B0000` (Primary accent)
- **Oil Cherry Red Light**: `#A52A2A` (Hover/active states)
- **Oil Cherry Red Lighter**: `#CD5C5C` (Accent variations)
- **Oil Cherry Red Accent**: `#F08080` (Highlight effects)

### Typography
- **Headings**: SF Pro Display (system font)
- **Body**: SF Pro Text (system font)
- **Weights**: 400, 500, 600, 700 for proper hierarchy

### Animations
- Fade-in-up on scroll
- Floating orbs in hero section
- Subtle hover transitions
- Micro-interactions on buttons and cards
- Gradient accents on interactive elements

## File Structure
```
website/
├── index.html          # Main HTML structure
├── styles.css          # All styling with oil ink/oil cherry red theme and Apple-inspired design
├── script.js           # Interactive elements and animations
├── .nojekyll           # GitHub Pages configuration (prevents Jekyll processing)
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Deployment to GitHub Pages

### Option 1: Using the `docs` folder (recommended)
1. Create a repository on GitHub (e.g., `aegis-website`)
2. Copy all files to the `docs` folder in your repository's main branch
3. Go to Repository Settings → Pages
4. Set source to `docs` folder
5. Your site will be published at `https://username.github.io/aegis-website/`

### Option 2: Using the `gh-pages` branch
1. Create a repository on GitHub (e.g., `aegis-website`)
2. Push all files to a branch named `gh-pages`
3. Go to Repository Settings → Pages
4. Set source to `gh-pages` branch
5. Your site will be published at `https://username.github.io/aegis-website/`

## Customization

### Changing Colors
Modify the CSS variables in `:root` at the top of `styles.css`:
```css
:root {
    --oil-cherry-red: #8B0000;
    --oil-cherry-red-light: #A52A2A;
    /* ... */
}
```

### Adjusting Animations
Animation effects are controlled via CSS in the respective sections.

## Development

To run locally:
1. Clone/download the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS

## License

MIT License - feel free to use and modify for your own projects.
