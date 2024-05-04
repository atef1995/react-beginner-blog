const fs = require('fs');
const xml = require('xmlbuilder');

// Example route list
const routes = [
    { path: '/', changefreq: 'daily', priority: 0.8 },
    { path: '/about', changefreq: 'monthly', priority: 0.6 },
    { path: '/blog', changefreq: 'weekly', priority: 0.7 },
    // Add more routes here
];

const domain = 'https://thetestercorner.com';

const sitemap = xml.create('urlset', { encoding: 'UTF-8' });
sitemap.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

routes.forEach(route => {
    const url = sitemap.ele('url');
    url.ele('loc', `${domain}${route.path}`);
    url.ele('changefreq', route.changefreq);
    url.ele('priority', route.priority.toString());
});

const xmlString = sitemap.end({ pretty: true });

fs.writeFileSync('public/sitemap.xml', xmlString, 'utf8');
console.log('Sitemap generated!');
