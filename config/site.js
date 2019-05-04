module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: '好書推薦網', // Navigation and Site Title
  titleAlt: '好書推薦網', // Title for JSONLD
  description: '每週一推薦',
  url: 'https://sharingoodbooks.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://sharingoodbooks.com/', // url + pathPrefix
  siteLanguage: 'zh', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'sharebooks', // shortname for manifest. MUST be shorter than 12 characters
  author: 'ChihYu', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@cyyeh', // Twitter Username
};
