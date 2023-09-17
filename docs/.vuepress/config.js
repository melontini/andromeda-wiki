import { defaultTheme, defineUserConfig } from 'vuepress'

const sidebar = [
  `/README.md`,
  '/world/README.md',
  '/blocks/README.md',
  '/entities/README.md',
  '/items/README.md',
  '/bug-fixes/README.md',
  '/mechanics/README.md',
  '/gui/README.md',
  '/misc/README.md',
  '/showcases/README.md',
]

function langSidebar(code) {
  let langSidebar1 = []
  sidebar.forEach(v => {
    langSidebar1.push("/" + code + v)
  })
  return langSidebar1
}

export default defineUserConfig({
  head: [['link', { rel: 'preload' }], ['link', { rel: 'icon', href: '/favicon.png' }]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Andromeda'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: "群星模组"
    }
  },
  theme: defaultTheme({
    logo: '/logo.png',
    lastUpdated: false,
    contributors: false,
    sidebar: sidebar,
    navbar: [
      {
        text: 'CurseForge',
        link: 'https://www.curseforge.com/minecraft/mc-mods/andromeda',
      },
      {
        text: 'Modrinth',
        link: 'https://modrinth.com/mod/andromeda',
      },
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh-cn/': {
        selectLanguageName: '简体中文',
        sidebar: langSidebar("zh-cn")
      }
    }
  }),
})