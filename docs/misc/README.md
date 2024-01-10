---
lang: en-US
title: Misc
description: Other tweaks and non-tweaks
---

### Auto-generate Recipe Advancements 📗

> Totally goes well with [RBIP](https://modrinth.com/mod/rbip)

By default, all items are required to unlock a recipe, but you can choose to require only one item if you prefer. Additionally, you can blacklist certain IDs and namespaces from being generated. By default, the minecraft, andromeda, and extshape namespaces are blacklisted.

The following configuration options are available:

* Require All Items: When this option is enabled, players must find all items in a recipe before it is unlocked in the recipe book.

* Ignore Recipes Hidden in the Recipe Book: Enabling this option will prevent the generation of advancements for recipe types that are hidden in the recipe book.

* Blacklisted Namespaces: This option allows you to specify namespaces (part of an ID before `:`) to be excluded from advancement generation.

* Blacklisted IDs: This option allows you to specify recipe IDs to be excluded from advancement generation.

### Minor Inconvenience 💥 (0.4+)

Makes the player explode after taking any damage. Have fun ❤️

***
### Auto-Update Translations 🔁 (0.9.0+)

Tries to download latest translations directly from GitHub.

This will download, if available, your currently selected language and EN-US.

***
### Send Crash Reports 📑

Upload client crash reports, only if `andromeda` is found in the trace.

Uploaded data:
- Environment (e.g. client), 
- OS version (e.g. Windows 11), 
- Platform (e.g. Fabric), 
- Java (e.g. 17 Oracle Corp), 
- Bootstrap status (e.g Discovery), 
- Certain loaded mods.

::: tip Info
Data is sent to Mixpanel EU servers. Unlike analytical data, this data doesn't have a unique ID attached. Everything is sent to a singular Crash UUID (`be4db047-16df-4e41-9121-f1e87618ddea`)
:::

***
### Scoped Configs 🧩 (1.4.0+)

::: warning Experimental & Advanced

This feature is currently experimental and may be unstable!

It's also not very useful for regular players and might be more interesting for modpack creators!

:::

This feature allows advanced control over the Config Scopes. Modules can have any of the following scopes:

- Global (`GLOBAL`): The main config is used in all worlds.
- World (`WORLD`): Each world has its own config. Located at `{WORLD DIR}/config/andromeda`.
- Dimension (`DIMENSION`): Each dimension in each world gets its own config. Located in `{DIMENSION DIR}/world_config/andromeda`. For reference: Nether is `DIM-1`, End is `DIM1` and Overworld is the root folder. Modded dimensions may differ.

Not all configs can be scoped. For example, all client modules are global only. Invalid scopes are logged and reset at startup.
Once the world config is created - it will no longer be affected by changes in the main config (except for `enabled` and `scope`, of course). In addition, some options ignore scoped configs.

There's one exception, though. Dimension configs can still be modified using data packs. Let's go through those.

Datapack configs work similarly to recipes, but instead of the path being your recipe ID, it's Andromeda's module ID. For example: `config/andromeda/world/moist_control.json` becomes `data/{pack id}/andromeda/scoped_config/world/moist_control.json`. These work like overlays, where only the specified options are modified.

Here's an example config that changes farmland moisture:

```json
{
  "minecraft:the_nether": {
    "customMoisture": 0
  },
  "minecraft:the_end": {
    "customMoisture": 1
  },
  "minecraft:overworld": {
    "customMoisture": 3
  }
}
```

Andromeda 1.4.2 introduces `andromeda:default`. A special key that is applied to all dimensions before their specific config. Here's a generic example:

```json
{
  "andromeda:default": {
    "enabled": false
  },
  "minecraft:the_end": {
    "enabled": true
  }
}
```

All per-world and per-dimension configs can be reloaded using `/reload`!

But what if you don't want to use data packs or they aren't flexible enough? Well, you can use KubeJS!

Andromeda adds some helper methods to `level` to ease development!

- `am$get`: returns the currently used config. Either global, world or dimension.
- `am$isReady`: verifies that configs have loaded.
- `am$save`: save the current config to file. Either global, world or dimension.

Please, make sure that the config you're modifying has a correct scope! Either world, or dimension.

Here's an example script which randomly changes moisture levels in every dimension every 2 seconds. This is a server script!

```js
LevelEvents.tick(e => { //Runs for every dimension/level
	  let level = e.getLevel(); //Get level from event

    if (level.am$isReady() && level.getTime() % 40 == 0) { //Check if configs are loaded and check if time is divisible by 40
        let i = level.getRandom().nextInt(7);//Generate a random nubmer in range [0, 7).
        level.am$get("world/moist_control").customMoisture = i; //Set our value.
        console.log(level.getDimensionKey(), i) //Print current dimension and value.
    }
})
```

Don't forget to save your changes!

```js
LevelEvents.unloaded(e => { //Runs on level unload
	  let level = e.getLevel();

    if (level.am$isReady()) {
        level.am$save("world/moist_control");
    }
})
```

The possibilities are endless!

***
### ??? (0.4+)
