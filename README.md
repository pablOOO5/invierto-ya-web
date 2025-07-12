# Invierto Ya - Web Personal

## 🚀 Descripción

Sitio web personal de la marca **Invierto Ya**, enfocado en inversiones y educación financiera. Desarrollado con **Astro** y **TypeScript**, optimizado para SEO y con un diseño moderno y responsive.

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno y rápido
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Astro SEO** - Optimizaciones para motores de búsqueda

## 🌟 Características SEO

- ✅ Meta tags optimizados
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Schema.org JSON-LD
- ✅ URLs canónicas
- ✅ Compresión HTML
- ✅ Optimización de imágenes
- ✅ Favicon personalizado

## 📦 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       └── sitemap.xml.ts
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :----------------------------------------- |
| `npm install`          | Instala las dependencias                  |
| `npm run dev`          | Inicia el servidor local en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Previsualiza la build local antes de desplegar |
| `npm run astro ...`    | Ejecuta comandos CLI de Astro como `astro add`, `astro check` |

## 📄 Páginas Principales

- **Inicio (/)** - Página principal con servicios y presentación
- **Servicios** - Detalle de servicios de inversión
- **Sobre Mí** - Información personal y experiencia
- **Contacto** - Formulario de contacto y consulta gratuita

## 🔧 Configuración

### Variables de Entorno
```bash
# Cambia la URL del sitio en astro.config.mjs
SITE_URL=https://inviertoya.com
```

### Configuración SEO
- Actualiza el dominio en `astro.config.mjs`
- Modifica los meta tags en `BaseLayout.astro`
- Personaliza el Schema.org en el layout base

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Sube la carpeta dist/
```

### Vercel
```bash
npm run build
# Configura el output directory como dist/
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para desplegar desde dist/
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la branch (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: info@inviertoya.com
- **Web**: https://inviertoya.com
- **LinkedIn**: /in/inviertoya

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
