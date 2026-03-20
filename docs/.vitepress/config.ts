import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';
import sidebar from './sidebar';
import getStructuredData from './getStructuredData';

const title = 'Lucide 图标 - 中文文档';
const socialTitle = 'Lucide Icons 中文文档';
const description =
  'Lucide 图标库中文文档。由社区打造的精美一致的图标工具包，支持 Vue、React、Svelte 等多框架。提供 1000+ 开源 SVG 图标，中文界面。';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  titleTemplate: ':title \u2013 Lucide',
  description,
  cleanUrls: true,
  outDir: '.vercel/output/static',
  srcExclude: ['**/README.md'],
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPIconAlignLeft\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPIconAlignLeft.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPFooter.vue', import.meta.url),
          ),
        },
        {
          find: '~/.vitepress',
          replacement: fileURLToPath(new URL('./', import.meta.url)),
        },
      ],
    },
  },
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Lucide, 图标, Icons, SVG图标, 开源图标, React图标, Vue图标, Svelte图标, Angular图标, 图标库, icon library, lucide icons, 中文, 汉化',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content:
          'Lucide 图标库中文文档。由社区打造的精美一致的开源 SVG 图标工具包，支持 React、Vue、Svelte、Angular 等多框架。',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://analytics.lucide.dev',
      },
    ],
    [
      'script',
      {
        src: 'https://analytics.lucide.dev/js/script.js',
        'data-domain': 'lucide.dev',
        defer: '',
      },
    ],
    [
      'meta',
      {
        property: 'og:locale',
        content: 'zh_CN',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: title,
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: socialTitle,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://lucide.dev',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://lucide.dev/og.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1200',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '630',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:type',
        content: 'image/png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: socialTitle,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://lucide.dev/og.png',
      },
    ],
  ],
  async transformPageData(pageData) {
    if (
      pageData.relativePath.startsWith('icons/') &&
      !pageData.relativePath.startsWith('icons/lab/') &&
      pageData.params?.name
    ) {
      const iconName = pageData.params.name;
      pageData.title = `${iconName} 图标详情`;

      const taggedAs = pageData.params?.tags?.length
        ? `标签：${pageData.params.tags.join(', ')}。`
        : '';
      const categorizedIn = pageData.params?.category?.length
        ? `分类：${pageData.params.category.join(', ')}。`
        : '';

      pageData.description =
        `${iconName} 图标的详情和相关图标。${taggedAs} ${categorizedIn}`.trim();

      const structuredData = await getStructuredData(iconName, pageData);

      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredData),
      ]);
    }
  },
  themeConfig: {
    logo: {
      light: '/logo.light.svg',
      dark: '/logo.dark.svg',
    },
    nav: [
      { text: '图标', link: '/icons/' },
      { text: '指南', link: '/guide/' },
      { text: '包', link: '/packages' },
      { text: '展示', link: '/showcase' },
      { text: '许可证', link: '/license' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/docs-agents/lucide' },
      { icon: 'discord', link: 'https://discord.gg/EH6nSts' },
    ],
    footer: {
      message: '基于 ISC 许可证发布',
      copyright: `版权所有 © ${new Date().getFullYear()} Lucide 贡献者`,
    },
    editLink: {
      pattern: 'https://github.com/docs-agents/lucide/edit/main/docs/:path',
    },
    carbonAds: {
      code: 'CWYIC53U',
      placement: 'lucidedev',
    },
  },
  sitemap: {
    hostname: 'https://lucide.dev/',
  },
});
