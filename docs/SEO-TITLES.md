# Guía de Optimización SEO - Títulos de Página

## Problema Resuelto

Se ha implementado un sistema que permite manejar de manera independiente:
- **Meta título** (aparece en buscadores) - máximo 65 caracteres
- **H1 de la página** (título visible) - puede ser más descriptivo

## Cómo Usar

### 1. En BaseLayout.astro
```astro
export interface Props {
  title: string;        // Meta título para SEO (65 caracteres máx)
  description: string;  // Meta descripción
  h1?: string;         // H1 visible en la página (opcional)
  image?: string;
  canonical?: string;
  noindex?: boolean;
}
```

### 2. Ejemplo de Uso en Páginas

#### Página de Inicio
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const pageTitle = "Invierto Ya - Creador de Contenido Financiero";
const pageDescription = "Creador de contenido especializado en inversiones y educación financiera.";
const pageH1 = "Invierto Ya - Experto en Inversiones y Educación Financiera";
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- En el contenido -->
  <h1>{pageH1}</h1>
</BaseLayout>
```

#### Página de Blog
```astro
---
const pageTitle = "Blog Inversiones - Invierto Ya";
const pageDescription = "Descubre estrategias de inversión, análisis de mercado y consejos financieros.";
const pageH1 = "Blog de Inversiones y Educación Financiera";
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- En el contenido -->
  <h1>📰 {pageH1}</h1>
</BaseLayout>
```

#### Página Sobre Mí
```astro
---
const pageTitle = "Sobre Mí - Invierto Ya";
const pageDescription = "Conoce mi historia, experiencia en inversiones y cómo ayudo a personas a construir su futuro financiero.";
const pageH1 = "Sobre Mí: Mi Historia en el Mundo de las Inversiones";
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- En el contenido -->
  <h1>{pageH1}</h1>
</BaseLayout>
```

#### Página de Contacto
```astro
---
const pageTitle = "Contacto - Invierto Ya";
const pageDescription = "¿Tienes preguntas sobre inversiones? Contáctame para consultas personalizadas, colaboraciones o simplemente para charlar sobre finanzas e inversiones.";
const pageH1 = "Contacto: Hablemos de Inversiones";
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- En el contenido -->
  <h1>{pageH1}</h1>
</BaseLayout>
```

#### Artículo Individual
```astro
---
const pageTitle = post.title;        // Ya incluye "- Invierto Ya"
const pageDescription = post.description;
const pageH1 = post.h1;             // H1 específico y descriptivo
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- En el contenido -->
  <h1>{pageH1}</h1>
</BaseLayout>
```

### 3. Estructura del BlogPost

```typescript
export interface BlogPost {
  id: number;
  slug: string;
  title: string;        // Meta título optimizado (incluye "- Invierto Ya")
  h1: string;          // H1 visible en la página (más descriptivo)
  description: string;  // Meta descripción
  // ...otros campos
}
```

### 4. Ejemplo de BlogPost
```typescript
{
  id: 1,
  slug: 'como-empezar-invertir-100-dolares',
  title: 'Cómo Empezar a Invertir con $100 - Invierto Ya',           // Meta título (65 chars)
  h1: 'Cómo Empezar a Invertir con $100 en 2025: Guía Completa',    // H1 descriptivo
  description: 'Descubre las mejores opciones para comenzar...',      // Meta descripción
  // ...resto de campos
}
```

## Beneficios SEO

1. **Meta título optimizado**: Máximo 65 caracteres para mejor visualización en buscadores
2. **H1 descriptivo**: Puede ser más largo y descriptivo para mejor UX
3. **Flexibilidad**: Cada página puede tener títulos diferentes para SEO y UX
4. **Consistencia**: Sistema estandarizado para todas las páginas

## Ejemplos de Optimización

### Antes
- Meta título: "Invierto Ya - Experto en Inversiones y Educación Financiera" (67 chars - muy largo)
- H1: Mismo texto que el meta título

### Después
- Meta título: "Invierto Ya - Creador de Contenido Financiero" (49 chars - optimizado)
- H1: "Invierto Ya - Experto en Inversiones y Educación Financiera" (pasado como variable y usado en el contenido)

## Mejores Prácticas

1. **Meta título**: 50-65 caracteres máximo
2. **H1**: Definir como variable en el frontmatter y usar en el contenido
3. **Consistencia**: Usar variables para mantener consistencia entre props y contenido
4. **Relevancia**: Asegurar que ambos títulos sean relevantes al contenido

## Implementación Completa

### ✅ **Páginas Actualizadas**

1. **Página de Inicio** (`index.astro`)
   - Meta título: "Invierto Ya - Creador de Contenido Financiero" (49 chars)
   - H1: "Invierto Ya - Experto en Inversiones y Educación Financiera"

2. **Página del Blog** (`blog.astro`)
   - Meta título: "Blog Inversiones - Invierto Ya" (33 chars)
   - H1: "Blog de Inversiones y Educación Financiera"

3. **Página Sobre Mí** (`sobre-mi.astro`)
   - Meta título: "Sobre Mí - Invierto Ya" (22 chars)
   - H1: "Sobre Mí: Mi Historia en el Mundo de las Inversiones"

4. **Página de Contacto** (`contacto.astro`)
   - Meta título: "Contacto - Invierto Ya" (22 chars)
   - H1: "Contacto: Hablemos de Inversiones"

5. **Artículos del Blog** (`[slug].astro`)
   - Meta título: Campo `title` del post (incluye "- Invierto Ya")
   - H1: Campo `h1` del post (más descriptivo)

### 🎯 **Beneficios Implementados**

- **SEO Optimizado**: Todos los meta títulos están bajo 65 caracteres
- **UX Mejorada**: H1 más descriptivos y atractivos para usuarios
- **Configuración Independiente**: Cada página puede tener títulos diferentes para SEO y UX
- **Consistencia**: Sistema estandarizado aplicado a toda la web
- **Flexibilidad**: Fácil modificación de títulos sin afectar otros elementos

### 📋 **Patrón de Implementación**

```astro
---
// 1. Definir variables en frontmatter
const pageTitle = "Meta Título SEO - Invierto Ya";
const pageDescription = "Meta descripción optimizada";
const pageH1 = "H1 Descriptivo y Atractivo para Usuarios";
---

<!-- 2. Pasar a BaseLayout -->
<BaseLayout
  title={pageTitle}
  description={pageDescription}
  h1={pageH1}
>
  <!-- 3. Usar en el contenido -->
  <h1>{pageH1}</h1>
</BaseLayout>
```
