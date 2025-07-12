import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    {
      url: '/',
      lastmod: new Date(),
      changefreq: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: '/blog',
      lastmod: new Date(),
      changefreq: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/blog/como-empezar-invertir-100-dolares',
      lastmod: new Date('2025-01-10'),
      changefreq: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/blog/etfs-vs-acciones-individuales',
      lastmod: new Date('2025-01-08'),
      changefreq: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/sobre-mi',
      lastmod: new Date(),
      changefreq: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/contacto',
      lastmod: new Date(),
      changefreq: 'monthly' as const,
      priority: 0.9,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${site}${page.url}</loc>
      <lastmod>${page.lastmod.toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
