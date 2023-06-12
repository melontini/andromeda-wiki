---
lang: en-US
title: Misc
description: Other tweaks and non-tweaks
---

### Auto-generate Recipe Advancements 📗

> Totally goes well with [RBIP](https://modrinth.com/mod/rbip)

By default, all items are required to unlock a recipe, but you can choose to require only one item if you prefer. Additionally, you can blacklist certain IDs and namespaces from being generated. By default, the minecraft, m-tweaks, and extshape namespaces are blacklisted.

The following configuration options are available:

* Require All Items: When this option is enabled, players must find all items in a recipe before it unlocks in the recipe book.

* Ignore Recipes Hidden in the Recipe Book: Enabling this option will prevent the generation of advancements for recipe types that are hidden in the recipe book.

* Blacklisted Namespaces: This option allows you to specify namespaces (part of an ID before ":") to be excluded from the generation of advancements.

* Blacklisted IDs: This option allows you to specify recipe IDs to be excluded from the generation of advancements.

### Minor Inconvenience 💥 (0.4+)

Makes the player explode after taking any damage. Have fun ❤️

***
### Compat Mode 🧩 (0.4+)

Doesn't load mixins if their related option is disabled, improving mod compatibility.

The only downside is that you'd need to restart the game after enabling/disabling any option.

***
### Send Optional Data 📊

Upload analytical data used to see how people use the mod.

Uploaded data:
* Mod Version.
* Minecraft Version.
* Environment. (client/server)
* Enabled Config Options.

::: tip Info
Data is sent to Mixpanel EU servers. If you disable this option, your profile will be requested for deletion.
:::

***
### Send Crash Reports 📑

Upload client crash reports, only if `m-tweaks` is found in the trace.

Uploaded data:
* Mod Version.
* Minecraft Version.
* Stack Trace.
* Loaded Mods.

::: tip Info
Data is sent to Mixpanel EU servers. Unlike analytical data, this data doesn't have a unique ID attached. Everything is sent to a singular Crash UUID (`be4db047-16df-4e41-9121-f1e87618ddea`)
:::

***
### Enable debug messages 📃 (0.1+)

When on, your log will get spammed into the oblivion, you've been warned

***
### ??? (0.4+)
