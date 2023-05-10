## m-tweaks wiki

Made with [VuePress](https://v2.vuepress.vuejs.org/)

### Translating

First off, check if your locale already exists in `/docs/.vuepress/config.js`, if not, add it like this:

In the defineUserConfig block.

```js
  locales: {
    '/': {
      lang: 'en-US',
      title: 'm-tweaks'
    },
    //after en-us
    '/locale-path/': {
      lang: 'locale-code',
      title: 'm-tweaks'
    }
  },
```

and then in the nested defaultTheme block

```js
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      //after en-us
      '/locale-path/': {
        selectLanguageName: 'Locale Name',
        sidebar: [//copy over the sidebar and change the links!
        '/locale-path/README.md',
        '/locale-path/world-tweaks/README.md',
        '/locale-path/block-tweaks/README.md',
        '/locale-path/entity-tweaks/README.md',
        '/locale-path/item-tweaks/README.md',
        '/locale-path/bug-fixes/README.md',
        '/locale-path/misc-tweaks/README.md',
    ],
      },
    },
```

then copy everything in docs except `.vuepress` into your locale path.

