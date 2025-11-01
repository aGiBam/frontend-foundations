# Assets Directory

This folder is for storing static assets used in your frontend projects.

## Structure

- **images/** - Store image files (PNG, JPG, SVG, etc.)
  - Example: `logo.svg`, `hero-background.jpg`, `icons/`

- **fonts/** - Store custom font files (WOFF, WOFF2, TTF, etc.)
  - Example: `Roboto-Regular.woff2`, `custom-font.ttf`

## Usage Examples

### Using Images in HTML
```html
<img src="assets/images/logo.svg" alt="Logo">
```

### Using Images in CSS
```css
.hero {
    background-image: url('../assets/images/hero-bg.jpg');
}
```

### Loading Custom Fonts
```css
@font-face {
    font-family: 'CustomFont';
    src: url('../assets/fonts/CustomFont-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
```

## Tips

- Optimize images before adding them (use tools like TinyPNG, ImageOptim)
- Use SVG for icons and logos when possible
- Use modern font formats (WOFF2, WOFF) for better performance
- Keep file names lowercase and use hyphens instead of spaces
- Organize images in subfolders if you have many (e.g., `images/icons/`, `images/photos/`)
