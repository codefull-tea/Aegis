# Aegis Android - Local AI Assistant Website

A beautiful, responsive website for Aegis - the private local AI assistant for Android devices, hosted on GitHub Pages.

## Features

- **Ink & Amethyst Theme**: Sophisticated dark theme with elegant accents
- **Apple-Inspired Design**: Clean, refined interface with thoughtful interactions and subtle animations
- **Smooth Animations**: Subtle animations and transitions for premium feel
- **Responsive Design**: Works flawlessly on mobile, tablet, and desktop
- **GitHub Pages Optimized**: Configured for seamless deployment to GitHub Pages
- **Download Section**: Access the latest Android APK via GitHub Releases
> **Note**: The actual Aegis.apk file (~300MB) is distributed via GitHub Releases due to file size limitations. The website links directly to the latest release asset.
- **Modern UI**: Clean, intuitive interface with focus on usability
- **Performance Optimized**: Fast loading and smooth interactions

## Design Details

### Color Palette
- **Amethyst Primary**: `#9966cc` (Primary background)
- **Amethyst Light**: `#b399d6` (Secondary surfaces)
- **Amethyst Lighter**: `#ccb3e6` (Card backgrounds)
- **Amethyst Dark**: `#663399` (Accent/dark variations)
- **Amethyst Accent**: `#e6ccff` (Primary accent/hover effects)
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
├── styles.css          # All styling with ink and amethyst theme and Apple-inspired design
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
    --amethyst-primary: #9966cc;
    --amethyst-light: #b399d6;
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
