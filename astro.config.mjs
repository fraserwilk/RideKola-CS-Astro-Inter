import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [icon(), sitemap()],
  redirects: {
    '/faq': '/about',
    '/index.php': '/',
    '/home': '/',
    '/terms-and-conditions': '/info/terms',
    '/index.php/terms-and-conditions': '/info/terms',
    '/privacy-statement': '/privacy',
    '/privacy/': '/privacy',
    '/index.php/faq': '/about',
    '/sendContactForm': '/contact'
  }
});