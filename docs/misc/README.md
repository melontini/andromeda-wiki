---
lang: en-US
title: Misc
description: Other tweaks and non-tweaks
---

### Auto-generate Recipe Advancements 📗

> Totally goes well with [RBIP](https://modrinth.com/mod/rbip)

By default, all items are required to unlock a recipe, but you can choose to require only one item if you prefer. Additionally, you can blacklist certain IDs and namespaces from being generated. By default, the minecraft, andromeda, and extshape namespaces are blacklisted.

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
### Auto-Update Translations 🔁 (0.9.0+)

Tries to download latest translations directly from GitHub.

This will download, if available, your currently selected language and EN-US.

***
### Send Optional Data 📊

Upload analytical data used to see how people use the mod.

Uploaded data:
* Mod Version.
* Minecraft Version.
* Modloader (Quilt/Fabric)

::: tip Info
Data is sent to Mixpanel EU servers. If you disable this option, your profile will be requested for deletion.
:::

***
### Send Crash Reports 📑

Upload client crash reports, only if `andromeda` is found in the trace.

Uploaded data:
* Stack Trace.
* Loaded Mods.

::: tip Info
Data is sent to Mixpanel EU servers. Unlike analytical data, this data doesn't have a unique ID attached. Everything is sent to a singular Crash UUID (`be4db047-16df-4e41-9121-f1e87618ddea`)
:::

***
### Enable FeatureManager 🧩 (0.9.1+)

Used to resolve mod conflicts. Not recommended to turn off.

::: details Working with FeatureManager...

FeatureManager allows other mods to configure Andromeda.

There are 2 ways you can interact with the manager.

#### 1. Using `fabric.mod.json`.

This might be the easiest method as you don't even need to import Andromeda. Please note that only booleans and the special objects are supported.

In your `custom` block you can define Andromeda configs. The recommended way is to define a feature as an object with conditions. You must specify `value` and all the other conditions are optional.

Here you add a version predicate using fabric's notation. As of 0.9.1 only `minecraft` and `andromeda` are supported. If you need something else feel free to reach out, or use the entrypoint.

```json
    "andromeda:features": {
      "totemSettings.enableInfiniteTotem": {
        "minecraft": ">=1.19",
        "andromeda": "<=0.9.1",
        "value": true
      }
    }
```

There's also an alternative, less flexible way.

```json
    "andromeda:features": {
      "totemSettings.enableInfiniteTotem": true
    }
```

#### 2. Using the "andromeda:feature_manager" entrypoint.

In your `fabric.mod.json` you can define the `andromeda:feature_manager` entrypoint:

```json
    "andromeda:feature_manager": [
      "org.example.my_cool_mod.compat.MyFeatureProcessors"
    ]
```

This entrypoint is execute very-very early (The `onLoad` of a mixin plugin), so be sure to not call any mixinable classes.

In your processor class, you must implement the Runnable interface.

```java
public class MyFeatureProcessors implements Runnable {
    @Override
    public void run() {
        //processing, please wait...
    }
}
```

Here you can "register" custom processors using `AndromedaFeatureManager.registerProcessor`. Your processor needs to have a unique ID. You must return null if you end up not modifying any fields.

```java
public class MyFeatureProcessors implements Runnable {
    @Override
    public void run() {
        AndromedaFeatureManager.registerProcessor("my_cool_mod", config -> {
            if (FabricLoader.getInstance().getEnvironmentType() == EnvType.CLIENT) {
                return Map.of(
                        "tooltips.clock", false,
                        "tooltips.compass", false,
                        "tooltips.recoveryCompass", false
                );
            }
            return null;
        });
    }
}
```

This also replaces the tooltip in the config with the translatable key of `andromeda.config.tooltip.manager.my_cool_mod`. So, be sure to add the correct translation key to tell people why they can't edit this feature.

:::

***
### Enable debug messages 📃 (0.1+)

When on, your log will get spammed into the oblivion, you've been warned

***
### ??? (0.4+)
