import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecolin.ca';
  
  const routes = [
    '',
    '/products',
    '/products/garment-muslin-bag',
    '/products/sweater-muslin-bag',
    '/sustainability',
    '/wholesale',
    '/faq',
    '/contact',
    '/about'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
