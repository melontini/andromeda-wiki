import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  head: [['link', { rel: 'preload'}]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'm-tweaks'
    }
  },
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    sidebar: [
      `/README.md`,
      '/world-tweaks/README.md',
      '/block-tweaks/README.md',
      '/entity-tweaks/README.md',
      '/item-tweaks/README.md',
      '/bug-fixes/README.md',
      '/misc-tweaks/README.md',
    ],
    navbar: [
      {
        text: 'CurseForge',
        link: 'https://www.curseforge.com/minecraft/mc-mods/m-tweaks',
      },
      {
        text: 'Modrinth',
        link: 'https://modrinth.com/mod/m-tweaks',
      },
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      }
    }
  }),
})