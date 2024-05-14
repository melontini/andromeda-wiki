import { defineConfig } from 'vitepress'

export const zh_cn = defineConfig({
    lang: "zh-CN",
    title: "群星模组",
    description: "灿若繁星，包罗万象。",

    themeConfig: {
        sidebar: [
            {
                text: "特性",
                items: [
                    { text: '主页', link: '/zh-cn/' },
                    { text: '世界', link: '/zh-cn/world' },
                    { text: '方块', link: '/zh-cn/blocks' },
                    { text: '实体', link: '/zh-cn/entities' },
                    { text: '物品', link: '/zh-cn/items' },
                    { text: 'Bug 修复', link: '/zh-cn/bug-fixes' },
                    { text: '机制', link: '/zh-cn/mechanics' },
                    { text: 'GUI', link: '/zh-cn/gui' },
                    { text: '杂项', link: '/zh-cn/misc' },
                ]
            },
            {
                text: "Meta",
                items: [
                    { text: '模组介绍', link: '/zh-cn/showcases' },
                    { text: '附件', link: '/zh-cn/assets' },
                ]
            }
        ],
    }
})
