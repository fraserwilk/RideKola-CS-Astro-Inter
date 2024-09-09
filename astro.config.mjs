import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  redirects: {
    '/faq': '/about',
    '/index.php': '/',
    '/home': '/',
    '/terms-and-conditions': '/info/terms',
    '/index.php/terms-and-conditions': '/info/terms',
    '/privacy-statement': '/info/privacy',
    '/privacy/': '/info/privacy',
    '/index.php/faq': '/about',
    '/sendContactForm': '/contact'
  }
});