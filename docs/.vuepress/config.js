const path = require('path')

module.exports = {
  title: '大屏开发入门指南',
  description: '整理可视化大屏相关资料，辅助大屏项目相关人员更好的理解大屏可视化相关知识',
  head: [
    ['link', { rel: 'icon', href: './src/images/icons/logo.png' }, true] // 设置图标
  ],
  base: '/large-screen/',
  dest: path.resolve('./dist'),
  evergreen: true,
  themeConfig: {
    sidebar: [
      ['./', '前言'],
      ['./definition', '定义'],
      ['./story', '故事'],
      ['./design', '设计'],
      ['./develop', '开发'],
      ['./deploy', '部署'],
      ['./link', '友情链接'],
      ['./qa', 'Q&A'],
      ['./contribute', '参与贡献'],
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/Xiaoleng123/large-screen',
    repoLabel: 'Github',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
}