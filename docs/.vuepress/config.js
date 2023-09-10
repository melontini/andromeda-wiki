import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  head: [['link', { rel: 'preload'}], ['link', { rel: 'icon', href: '/favicon.png' }]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Andromeda'
    }
  },
  theme: defaultTheme({
    logo: '/logo.png',
    lastUpdated: false,
    contributors: false,
    sidebar: [
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
    ],
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
      }
    }
  }),
})