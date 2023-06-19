import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  head: [['link', { rel: 'preload'}]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Andromeda'
    }
  },
  theme: defaultTheme({
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