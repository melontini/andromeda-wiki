---
lang: en-US
title: Mechanics
description: Things and stuff idk
---

# Mechanics

## Villager Gifting 🎁 <Badge type="tip" text="^0.9.0" />

Allows you to restore some reputation by giving gifts to villagers!

This option adds 4 new tags:
* `andromeda:villager_gifts/major_positive` gives 15 reputation
* `andromeda:villager_gifts/minor_positive` gives 3 reputation
* `andromeda:villager_gifts/major_negative` takes 15 reputation
* `andromeda:villager_gifts/minor_negative` takes 3 reputation

You can see default items here: [andromeda/tags/items/villager_gifts/](https://github.com/melontini/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts)

## Dragon Fight Tweaks 🐉 <Badge type="tip" text="^0.6.0" />

### 1. Respawn Crystals

Makes destroyed end crystals to respawn after ~1.6 - 3 minutes. This makes the fight much harder and a bit more annoying.

### 2. Scale Health by Max Players

Scales the dragon's health based on the maximum number of players who have been to the end during the fight.

The formula is this: `Math.floor((Math.sqrt(500 * i)) * 10)`, where i is the number of players.

### 3. Shorter Crystal Tracking Range

Reduces the range in which the dragon can heal itself with crystals from 32 blocks to 24 blocks.

### 4. Shorter Spikes

All newly generated spikes will be shorter.

## Throwable Items 🥏 <Badge type="tip" text="^0.5.0" />

Allows throwing certain items, which would otherwise be useless*

::: details Throwable items as of 0.5.0


* Bone Meal
* Glowing and Normal Ink Sacs
* All Dyes
* Nether and Normal Bricks
* Fire Charge
* Gun Powder

Ideas welcome! 

:::

There's an additional option available: Can Zombies Throw Items?

With this on, zombies will throw any throwable items they pick up.

::: details Adding Custom Behaviors

All behaviors must be placed in `andromeda/item_throw_behavior` of your datapack, along with `recipes`, `tags`, `loot_tables`, etc. The name of the file doesn't matter.

Since 1.10.0, Andromeda uses [Commander](https://modrinth.com/mod/cmd) for its data pack features. You can learn about commands, Arithmetica and more over at its wiki. https://constellation-mc.github.io/commander/

Example:

```json
{
  "items": "minecraft:ink_sac",
  "complement": true,
  "events": [
    {
      "event": "any",
      "commands": {
        "type": "andromeda:particles",
        "selector": "minecraft:direct_killer_entity",
        "colors": [24, 27, 50]
      }
    },
    {
      "event": "entity",
      "commands": {
        "type": "commander:commands",
        "selector": "minecraft:this_entity",
        "commands": [
          "/effect give @s minecraft:blindness $(long){{random(4, 7)}} 0 true"
        ]
      }
    }
  ]
}
```

`events` is a list of mini subscriptions to flying entity events.

| Event  |   |
|---|---|
| `block`  | Executed when the item hits a block.  |
| `entity`  | Executed when the item hits an entity.  |
| `miss`  | Executed when the item misses.  |
| `any`  | Executed after any of the previous events.  |

`commands` is a list of [Commander commands](https://constellation-mc.github.io/commander/Commands).

Other things:

| Parameter  |   |
|---|---|
| `override_vanilla`  | If true, prevents **ALL** vanilla behaviors from being executed. This should never be used on block items, as it will make the block unplaceable.  |
| `disabled`  | Disables all behaviors for this item.  |
| `complement`  | If false, disables all other behaviors.  |
| `cooldown`  | Set a custom cooldown for your item (in ticks). Accepts numbers and [Arithmetica](https://constellation-mc.github.io/commander/Arithmetica)  |

:::

## Wandering Trader Horn 🐐 <Badge type="tip" text="^0.4" />

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note that wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.


