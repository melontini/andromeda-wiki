---
lang: en-US
title: Blocks
description: Block related tweaks
---

# Blocks

## Incubator 🐣 <Badge type="tip" text="^0.4.5" />
[![Requires Commander](https://raw.githubusercontent.com/constellation-mc/commander/documentation/docs/public/badges/requires/compacter_vector.svg)](https://modrinth.com/mod/cmd)

<img alt="A screenshot of an incubator, a wooden box with a glass dome on top and an egg inside the dome." style="display: block; margin-left: auto; margin-right: auto;" src="/images/incubator.webp" width="520">

A handy little device that hatches eggs for you!

A small guide:

<div style="float: right;">
<img alt="A screenshot of two incubators, one with a campfire one block below and another with a soul campfire two blocks below." src="/images/incubator_guide.webp" width="348">
<ul><li>(either 1 or 2 will work.)</li></ul>
</div>

1. Place the incubator where you want it.
2. Since this machine cannot generate heat by itself, you will need to place a campfire under the incubator.
3. Hook up a hopper or just right click with eggs in your hand.
4. Now wait...

All vanilla eggs are supported, including spawn eggs. (modded spawn eggs are supported as long as they use or extend the SpawnEggItem class)

It has some additional settings:

* Random Egg Hatch Times, makes egg hatch times a lot more random.

::: details Adding Custom Recipes

Since 1.9.0, the incubator format has been extended to spawn random entities, set NBT, and execute commands as the spawned entity. Since 1.10.0, `/` commands were replaced by [Commander commands](https://constellation-mc.github.io/commander/Commands) and `time` gained support for [Expressions](https://constellation-mc.github.io/commander/Expressions).

The most minimal example is:
```json
{
  "identifier": "minecraft:egg",
  "entries": {
    "entity": "minecraft:chicken"
  },
  "time": 2500
}
```
This will simply spawn a chick whenever the incubator finishes incubating.

But more verbose is this:
```json
{
  "identifier": "minecraft:turtle_egg",
  "entries": [
    {
      "weight": 1,
      "data": {
        "entity": "minecraft:turtle",
        "nbt": {
          "CustomName": "{\"text\":\"Poseidon\"}"
        },
        "commands": [
          {
            "type": "commander:commands",
            "selector": "this_entity",
            "commands": [
              "/say hi!"
            ]
          }
        ]
      }
    }
  ],
  "time": 4000
}
```

As you can see, the `entries` field accepts either a single entity, or a weighted list. The syntax for `data` and singular `entries` is the same.

The commands are executed as an entity. So, in the case of `/say hi!` all players will receive a message from a turtle named `Poseidon`.

| Commander Contexts  |   |
|---|---|
| `time`  | `block_state`, `block_entity`, `tool`, `origin`  |
| `commands`  | `this_entity`, `block_state`, `block_entity`, `tool`, `origin`  |

:::


## Falling Propagule <Badge type="tip" text="^0.6.0" />

Fully grown, hanging propagules will fall after some time.

<video alt="Time-lapse in a mangrove swamp where, after a few seconds, a mangrove propagule falls from its tree." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/falling_propagule.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Cactus Bottle Filling 🌵 <Badge type="tip" text="^0.6.0" />

Lets you fill glass bottles with water using cacti.

The top cactus will break and drop a dead bush after 3 uses.

## Useful Fletching Table 🏹 <Badge type="tip" text="^0.3.1" />

Tighten the string of your bow in the fletching table for improved accuracy.

<img alt="A screenshot of the Fletching GUI with a bow in the first slot, a string in the second, and an upgraded bow in the third. Below that, there's another bow with a tooltip that says '*Tightened, usages left: 7'." style="display: block; margin-left: auto; margin-right: auto;" src="/images/fletching.png" width="412">

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `divergenceModifier` | Controls how hard an arrow will diverge from its target. $div * modifier$ | ✅ |

:::

## Beds Explode Everywhere 🛏️💥 <Badge type="tip" text="^0.1" />

A joke tweak making beds explode in the overworld.

<video alt="A video where a white bed explodes after the player right-clicks on it." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bed_explosion.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Bed Explosion Power 💥 <Badge type="tip" text="^0.1" />

:)

<video alt="A video in which a white bed explodes with a large explosion and fire after the player right-clicks on it." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/power_of_the_bed.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Guarded Loot 🛡 <Badge type="tip" text="^1.0.0" />

Have you ever raided a bastion? You may have noticed that it is very easy to dig under the chest and loot from underneath. 

Well, this tweak forces you to kill every monster around the chest before you can loot it. Attempting to open the chest will highlight all the monsters you need to kill. Pretty RPG-esque!

In versions >1.7.0 you can prevent players from breaking guarded chests.

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `range` | The range a mob must be in, to be considered a guard. | ✅ |
| `allowLockPicking` | Can a [Lockpick](/items#lockpick-%F0%9F%94%93) bypass guards? | ❌ |
| `breakingHandler` | Should guarded containers be unbreakable? | ➖ |

:::

## Safe Beds 🛌 <Badge type="tip" text="^0.1" />

Beds will NOT explode when outside the overworld. Instead, sends the player a friendly message.

<img alt="A scene shows a red bed placed on end stone ground near the portal. Purple plants and Endermen are in the background. A message at the bottom reads 'You can't sleep here!' A shield and items are in the hot bar." style="display: block; margin-left: auto; margin-right: auto;" src="/images/safe_beds.webp" width="520">

## Leaf Slowdown 🌿🐌 <Badge type="danger" text="Deprecated" /> <Badge type="tip" text="^0.1" />

Makes it harder to traverse biomes on trees by slowing entities down when they are on leaves.

## Campfire Effects 🔥♥️ <Badge type="tip" text="^0.1" />

Gives players configurable effects when they are within a certain range of a campfire.

<img alt="A screenshot showing a nighttime scene. A player stands near a campfire with smoke rising, surrounded by grass and trees. The player holds a piece of food in their right hand and a shield in their left. The HUD displays regeneration effect." style="display: block; margin-left: auto; margin-right: auto;" src="/images/campfire_effects.webp" width="520">

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `affectsPassive` | Should the campfire affect passive mobs? | ✅ |
| `effectsRange` | The range a campfire will give its effects in. | ✅ |
| `effectList` | The list of effects. | ✅ |

:::
