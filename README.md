# Academic Homepage - Hyukkyu Kang

A clean, responsive academic website built with Jekyll and hosted on GitHub Pages. This site is designed to be content-driven through YAML data files, making it easy to maintain and update.

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Fork or clone this repository** to your GitHub account as `username.github.io`
2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
3. **Your site will be available** at `https://username.github.io` within a few minutes

### Local Development (Optional)

If you want to preview changes locally:

```bash
# Install Ruby and Bundler first
gem install bundler jekyll

# Clone the repository
git clone https://github.com/username/username.github.io.git
cd username.github.io

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## ✏️ Content Management

### Editing Your Information

**All content is managed through a single file: `_data/site.yml`**

This file contains all your personal information, education, experience, publications, etc. Simply edit this YAML file to update your website content.

#### Key sections in `_data/site.yml`:

- **person**: Your basic information (name, email, links, summary)
- **education**: Your educational background
- **work_experience**: Professional experience and internships
- **publications**: Academic publications with full citations
- **projects**: Research projects and grants
- **activities**: Extracurricular activities and organizations
- **teaching**: Teaching experience
- **skills**: Technical skills and expertise

#### Markdown in YAML

You can use Markdown formatting within YAML strings:

```yaml
bullets:
  - "Developed **machine learning models** for text analysis"
  - "Published research in *top-tier conferences*"
```

### Updating Assets

#### Replace Profile Photo
1. Replace `assets/img/profile.jpg` with your photo (recommended: 1200x1200px, square)
2. The image will automatically be resized and optimized for display

#### Replace CV
1. Replace `assets/cv/Hyukkyu_Kang_CV.pdf` with your CV
2. Update the filename in `_data/site.yml` under `assets.cv_pdf` if you change the name

#### Update Open Graph Image
1. Replace `assets/img/og-image.png` with a custom social media preview image (1200x630px)
2. Or use the provided generator to create a new one with your information

## 🎨 Customization

### Theme Colors

Edit CSS custom properties in `assets/css/main.scss`:

```scss
:root {
  --accent: #e74c3c;      /* Your accent color */
  --link: #2980b9;        /* Link color */
  --link-hover: #1abc9c;  /* Link hover color */
}
```

### Adding Sections

To add new sections:

1. Add data to `_data/site.yml`
2. Create the section in `_layouts/home.html`
3. Add navigation link in `_includes/nav.html`

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the root directory
2. Add your domain name (e.g., `yourdomain.com`)
3. Configure DNS settings with your domain provider

## 🏗️ Technical Details

### Built With

- **Jekyll**: Static site generator
- **GitHub Pages**: Free hosting with automatic builds
- **Liquid**: Templating language for dynamic content
- **Sass/SCSS**: CSS preprocessing
- **Vanilla JavaScript**: No external dependencies

### Features

- ✅ **Fully responsive** design (mobile-first)
- ✅ **Dark/light theme** with system preference detection
- ✅ **Accessibility compliant** (WCAG 2.2 AA)
- ✅ **SEO optimized** with structured data
- ✅ **Performance optimized** (no external dependencies)
- ✅ **Print-friendly** styles
- ✅ **Progressive Web App** ready

### Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Build Failures

If GitHub Pages build fails:

1. Check the "Actions" tab for error details
2. Ensure all YAML syntax is valid
3. Verify image files exist and are properly referenced
4. Check that all required fields in `_data/site.yml` are present

### Local Development Issues

```bash
# Clear Jekyll cache
bundle exec jekyll clean

# Update dependencies
bundle update

# Rebuild site
bundle exec jekyll build
```

### Content Not Updating

1. Check that your changes are committed and pushed to GitHub
2. GitHub Pages builds can take 5-10 minutes to deploy
3. Clear your browser cache or try an incognito window

## 📝 Content Guidelines

### Publications Format

Use this format for consistency:

```yaml
publications:
  - authors: "First Author, Second Author, Your Name"
    title: "Your Paper Title Here"
    venue: "Full Conference/Journal Name (Abbreviated Name) Year"
    year: 2025
    notes: "Optional notes like 'Best Paper Award'"
    links:
      - url: "https://example.com/paper.pdf"
        label: "PDF"
```

### Experience Entries

Keep bullet points concise and action-oriented:

```yaml
work_experience:
  - title: "Your Position"
    org: "Organization Name"
    period: "Month Year – Month Year"
    bullets:
      - "Action verb + specific accomplishment + impact/result"
      - "Developed X which resulted in Y improvement"
```

## 📞 Support

For technical issues:
1. Check the [GitHub Issues](https://github.com/username/username.github.io/issues)
2. Review Jekyll documentation: https://jekyllrb.com/docs/
3. GitHub Pages help: https://docs.github.com/en/pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last updated**: August 2025
