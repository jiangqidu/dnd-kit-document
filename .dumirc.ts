import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dnd-kit-document',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { title: '指南', link: '/guide/initialize' },
      { title: '示例讲解', link: '/example/use-draggable' },
      { title: '手动实现', link: '/principle' },
    ],
    socialLinks: {
      github: 'https://github.com/jiangqidu/dnd-kit-document',
    },
    footer: '赣ICP备2022000239号',
  },
});
