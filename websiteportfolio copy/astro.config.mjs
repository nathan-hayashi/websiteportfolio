import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
    site: 'https://yourdomain.com', // Update after domain purchase
    output: 'static',
    integrations: [
        mdx(),
        sitemap(),
        pagefind(), // Must be LAST integration
    ],          
    markdown: {
        shikiConfig: {
          theme: 'github-dark',
          wrap: true,
          // 'terraform' and 'hcl' are bundled by default
        },
    },
});