# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic homepage for Hyukkyu Kang, a Ph.D. candidate at POSTECH. The site is data-driven, with all content managed through YAML files rather than hardcoded in templates.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with auto-reload
bundle exec jekyll serve --livereload
# Site will be available at http://localhost:4000

# Build the site
bundle exec jekyll build

# Clean build artifacts and cache
bundle exec jekyll clean
```

### Production Build
```bash
bundle exec jekyll build --env=production
```

## Architecture

### Data-Driven Content System
- **Primary data source**: `_data/site.yml` - Contains all site content including personal info, publications, work experience, education, etc.
- **Content sections**: All sections (education, work experience, publications, projects, activities, teaching) are conditionally rendered based on data presence
- **No hardcoded content**: Templates check for data existence before rendering sections

### Key Files Structure
- `_layouts/home.html` - Main homepage layout that assembles all sections from data
- `_layouts/default.html` - Base template with HTML structure, header, footer
- `_includes/publication.html` - Template for rendering individual publications
- `_includes/` directory contains reusable components (head, header, footer, nav, schema)
- `_config.yml` - Jekyll configuration and site settings
- `assets/css/main.scss` - Main stylesheet entry point

### Content Management
- **Publications**: Defined in `_data/site.yml` under `publications` array with fields like title, authors, venue, year, links
- **Personal info**: Managed in `person` section of site.yml including name, summary, social links
- **Work experience**: Timeline format with title, org, period, and bullet points
- **Education**: Similar timeline format for academic background
- **News section**: Auto-generated from work experience and publications with chronological sorting

### Asset Management
- Profile images and assets referenced via `assets` section in site.yml
- Static assets in `assets/` directory
- Built site output goes to `_site/` (excluded from git)

## Development Notes

- Site uses Jekyll with GitHub Pages gem and plugins: jekyll-seo-tag, jekyll-sitemap
- Styling with Sass (main.scss compiles to CSS with compressed output)
- Content is fully responsive and accessible
- All external links open in new tabs with proper security attributes
- SEO optimized with structured data and meta tags
- Configured for GitHub Pages deployment with automatic builds
- Ruby dependencies managed via Bundler (Gemfile/Gemfile.lock)
