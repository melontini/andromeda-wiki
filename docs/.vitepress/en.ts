import { defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en-US",
    title: "Andromeda",
    description: "A galaxy is a collection of things and systems. So is this mod.",

    themeConfig: {
        sidebar: [
            {
                text: "Features",
                items: [
                    { text: 'Home', link: '/' },
                    { text: 'World', link: '/world' },
                    { text: 'Blocks', link: '/blocks' },
                    { text: 'Entities', link: '/entities' },
                    { text: 'Items', link: '/items' },
                    { text: 'Bug Fixes', link: '/bug-fixes' },
                    { text: 'Mechanics', link: '/mechanics' },
                    { text: 'GUI', link: '/gui' },
                    { text: 'Misc', link: '/misc' },
                ]
            },
            {
                text: "Meta",
                items: [
                    { text: 'Showcases', link: '/showcases' },
                    { text: 'Assets', link: '/assets' },
                ]
            }
        ],
    }
})