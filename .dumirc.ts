import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dnd-kit-document/',
  publicPath: '/dnd-kit-document/',
  outputPath: 'dnd-kit-document',
  themeConfig: {
    logo: 'https://dndkit.com/dnd-kit-logo.svg',
    nav: [
      { title: '指南', link: '/guide/initialize' },
      { title: '示例讲解', link: '/example/use-draggable' },
    ],
    socialLinks: {
      github: 'https://github.com/jiangqidu/dnd-kit-document',
    },
    footer: '赣ICP备2022000239号',
  },
});
