/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.femmesetdroitudem.com/',  // Replace with your site's URL
    generateRobotsTxt: true,               // Generate a robots.txt file
    changefreq: 'weekly',                  // Recommended update frequency
    priority: 0.7,                         // Page priority for search engines
    sitemapSize: 7000,                     // Maximum URLs per sitemap file
    exclude: ['/404'],                     // Exclude pages like 404 error
}
