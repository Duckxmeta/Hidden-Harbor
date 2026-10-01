import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hiddenharbormarina.stellarims.com';

  const routes = [
    '',
    '/rentals',
    '/rentals/pontoons',
    '/rentals/deck-boats',
    '/rentals/fishing-boats',
    '/rentals/houseboats',
    '/stay',
    '/stay/cabins',
    '/stay/camping',
    '/slips',
    '/the-lake',
    '/contact',
    '/about',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
