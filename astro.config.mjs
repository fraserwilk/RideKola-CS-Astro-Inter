import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [icon(), sitemap()],
  redirects: {
    '/faq': '/about',
    '/index.php': '/',
    '/home': '/',
    '/terms-and-conditions': '/terms',
    '/index.php/terms-and-conditions': '/terms',
    '/privacy-statement': '/privacy',
    '/index.php/faq': '/about',
    '/sendContactForm': '/contact'
  }
});