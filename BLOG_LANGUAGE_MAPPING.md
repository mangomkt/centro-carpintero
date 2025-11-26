# Blog Language Mapping Guide

## How to Add Language Switching to Blog Posts

To enable proper language switching between English and Spanish blog posts, add the `corresponding_post` field to the frontmatter of each blog post.

### Example:

**English Post** (`blog/my-post.md`):
```yaml
---
title: "My Blog Post Title"
path: /my-post
date: 2025-10-30
summary: "Post summary here"
tags: ['tag1', 'tag2']
cover_image: ./images/my-image.jpg
corresponding_post: /mi-publicacion-del-blog
---
```

**Spanish Post** (`nuestro-blog/mi-publicacion-del-blog.md`):
```yaml
---
title: "Título de Mi Publicación del Blog"
path: /mi-publicacion-del-blog
date: 2025-10-30
summary: "Resumen de la publicación aquí"
tags: ['etiqueta1', 'etiqueta2']
cover_image: ./images/my-image.jpg
corresponding_post: /my-post
---
```

## Current Mappings

### ✅ Already Configured:
- `sustainable-woodworking-eco-friendly-renovations` ↔ `carpinteria-sostenible-renovaciones-ecologicas`
- `types-of-wood-we-use-pros-and-cons` ↔ `los-tipos-de-madera-que-utilizamos-y-sus-pros-y-contras`

### 📝 Need to Add corresponding_post Field:

**English Posts → Spanish Posts:**
- `4-Common-Kitchen-Trends-of-2021` → `4-tendencias-de-cocina-comunes-de-2021`
- `5-Popular-Bathroom-Trends-Of-2021` → `5-tendencias-de-baño-populares-de-2021`
- `The-Dos-and-Donts-when-cleaning-your-cabinets` → `Lo-que-se-debe-y-no-se-debe-hacer-al-limpiar-sus-gabinetes`
- `The-Pros-and-Cons-of-a-Jack-and-Jill-bathroom` → `Los-pros-y-los-contras-de-un-baño-de-Jack-y-Jill`
- `What-are-the-Pros-and-Cons-of-having-a-double-vanity` → `Cuáles-son-los-pros-y-los-contras-de-tener-un-tocador-doble`
- `home-remodeled-with-success` → `como-remodelar-tu-casa-con-exito`
- `is-it-safe-to-renovate-my-home-during-covid-19` → `es-seguro-renovar-mi-casa-durante-covid-19`
- `tips-to-make-your-bathroom-functional-and-trendy` → `consejos-para-hacer-que-tu-bano-sea-funcional-y-moderno`
- `3-common-questions-about-kitchen-cabinets` → `3-preguntas-comunes-sobre-los-gabinetes-cocina`
- `welcome-to-centro-carpintero` → `bienvenido-a-nuestro-blog`

## Benefits of This System

1. **Maintainable**: No hardcoded mappings in layouts
2. **Flexible**: Easy to add new blog post pairs
3. **Self-documenting**: The relationship is clear in the frontmatter
4. **Scalable**: Works for any number of blog posts
5. **Error-resistant**: Missing mappings gracefully fall back to homepage

## How It Works

1. When a user clicks the language switcher on a blog post
2. The layout checks if `$page.post.corresponding_post` exists
3. If it exists, it uses that path for the language switch
4. If not, it falls back to regular page mappings or homepage

This system makes it easy to maintain bilingual blog content without complex hardcoded mappings!
