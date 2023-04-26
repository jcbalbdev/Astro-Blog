import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'El Dev Master | Blog',
    description: 'Aprendamos juntos sobre el mundo tech',
    site: 'https://eldevmaster.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}