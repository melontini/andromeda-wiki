---
lang: en-US
title: Blocks
description: Block related tweaks
---

# Blocks

## Incubator 🐣 <Badge type="tip" text="^0.4.5" />
[![Requires Commander](https://raw.githubusercontent.com/constellation-mc/commander/documentation/docs/public/badges/requires/compacter_vector.svg)](https://modrinth.com/mod/cmd)

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/incubator.webp" width="520">

A handy little device that hatches eggs for you!

A small guide:

<div style="float: right;">
<img src="/images/incubator_guide.webp" width="348">
<ul><li>(either 1 or 2 will work.)</li></ul>
</div>

1. Place the incubator where you want it.
2. Since this machine cannot generate heat by itself, you will need to place a campfire under the incubator.
3. Hook up a hopper or just right click with eggs in your hand.
4. Now wait...

All vanilla eggs are supported, including spawn eggs (modded spawn eggs are supported as long as they use or extend the SpawnEggItem class).

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

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/falling_propagule.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Cactus Bottle Filling 🌵 <Badge type="tip" text="^0.6.0" />

Lets you fill glass bottles with cacti.

The top cactus will break and drop a dead bush after 3 uses.

## Useful Fletching Table 🏹 <Badge type="tip" text="^0.3.1" />

Allows you to tighten the string of your bow in the fletching table for improved accuracy.

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/fletching.png" width="412">

## Beds Explode Everywhere 🛏️💥 <Badge type="tip" text="^0.1" />

A joke tweak making beds explode in the overworld.

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bed_explosion.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Bed Explosion Power 💥 <Badge type="tip" text="^0.1" />

:)

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/power_of_the_bed.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Guarded Loot 🛡 <Badge type="tip" text="^1.0.0" />

Have you ever raided a bastion? You may have noticed that it is very easy to dig under the chest and loot from underneath. 

Well, this tweak forces you to kill every monster around the chest before you can loot it. Attempting to open the chest will highlight all the monsters you need to kill. Pretty RPG-esque!

In versions >1.7.0 you can prevent players from breaking guarded chests.

## Safe Beds 🛌 <Badge type="tip" text="^0.1" />

Makes beds NOT explode when outside the overworld. Instead, sends the player a friendly message.

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/safe_beds.webp" width="520">

## Leaf Slowdown 🌿🐌 <Badge type="danger" text="Deprecated" /> <Badge type="tip" text="^0.1" />

Makes it harder to traverse biomes on trees by slowing entities down when they are on leaves.

## Campfire Effects 🔥♥️ <Badge type="tip" text="^0.1" />

Gives players configurable effects when they are within a configurable range of a campfire.

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/campfire_effects.webp" width="520">
