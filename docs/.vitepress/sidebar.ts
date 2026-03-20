import { DefaultTheme, UserConfig } from 'vitepress';

const sidebar: UserConfig<DefaultTheme.Config>['themeConfig']['sidebar'] = {
  guide: [
    {
      text: '简介',
      items: [
        { text: '什么是 Lucide？', link: '/guide/' },
        { text: '安装', link: '/guide/installation' },
        { text: '对比', link: '/guide/comparison' },
      ],
    },
    {
      text: '基础',
      items: [
        {
          text: '颜色',
          link: '/guide/basics/color',
        },
        {
          text: '尺寸',
          link: '/guide/basics/sizing',
        },
        {
          text: '描边宽度',
          link: '/guide/basics/stroke-width',
        },
      ],
    },
    // TODO: Add this section
    {
      text: '进阶',
      items: [
        {
          text: '无障碍',
          link: '/guide/advanced/accessibility',
        },
        {
          text: '全局样式',
          link: '/guide/advanced/global-styling',
        },
        // {
        //   text: 'Animations',
        // },
        {
          text: '填充图标',
          link: '/guide/advanced/filled-icons',
        },
        {
          text: '别名',
          link: '/guide/advanced/aliased-names',
        },
        // {
        //   text: 'Combining icons',
        // },
        // {
        //   text: 'Dynamic imports'
        // },
        // {
        //   text: 'Auto importing'
        // },
      ],
    },
    {
      text: '包',
      items: [
        {
          text: 'Lucide',
          link: '/guide/packages/lucide',
        },
        {
          text: 'Lucide React',
          link: '/guide/packages/lucide-react',
        },
        {
          text: 'Lucide Vue',
          link: '/guide/packages/lucide-vue-next',
        },
        {
          text: 'Lucide Svelte',
          link: '/guide/packages/lucide-svelte',
        },
        {
          text: 'Lucide Solid',
          link: '/guide/packages/lucide-solid',
        },
        {
          text: 'Lucide React Native',
          link: '/guide/packages/lucide-react-native',
        },
        {
          text: 'Lucide Angular',
          link: '/guide/packages/lucide-angular',
        },
        {
          text: 'Lucide Preact',
          link: '/guide/packages/lucide-preact',
        },
        {
          text: 'Lucide Astro',
          link: '/guide/packages/lucide-astro',
        },
        {
          text: 'Lucide Static',
          link: '/guide/packages/lucide-static',
        },
      ],
    },
    {
      text: '贡献',
      items: [
        {
          text: '图标设计原则',
          link: '/guide/design/icon-design-guide',
        },
        {
          text: '在 Illustrator 中设计',
          link: '/guide/design/illustrator-guide',
        },
        {
          text: '在 InkScape 中设计',
          link: '/guide/design/inkscape-guide',
        },
        {
          text: '在 Figma 中设计',
          link: '/guide/design/figma-guide',
        },
        {
          text: '在 Affinity Designer 中设计',
          link: '/guide/design/affinity-designer-guide',
        },
      ],
    },
  ],
  // This should be here to keep the sidebar shown on the icons page
  icons: [{ text: '', link: '/' }],
};

export default sidebar;
