## Andromeda wiki

Made with [VuePress](https://v2.vuepress.vuejs.org/) hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

### Translating

First off, check if your locale already exists in `/docs/.vuepress/config.js`, if not, add it like this:

In the defineUserConfig block.

```js
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Andromeda'
    },
    //after en-us
    '/locale-path/': {
      lang: 'locale-code',
      title: 'Andromeda'
    }
  },
```

and then in the defineUserConfig.defaultTheme.locales block

```js
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      //after en-us
      '/locale-path/': {
        selectLanguageName: 'Locale Name',
        sidebar: [//copy over the sidebar from defineUserConfig.defaultTheme.sidebar and change the links!
        '/locale-path/README.md',
        '/locale-path/world/README.md',
        '/locale-path/blocks/README.md',
        '/locale-path/entities/README.md',
        '/locale-path/items/README.md',
        '/locale-path/bug-fixes/README.md',
        '/locale-path/mechanics/README.md',
        '/locale-path/gui/README.md',
        '/locale-path/misc/README.md',
    ],
      },
    },
```

then copy everything in docs except `.vuepress` into your locale path.

***

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Andromeda wiki</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/melontini/andromeda-wiki" property="cc:attributionName" rel="cc:attributionURL">melontini and contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

