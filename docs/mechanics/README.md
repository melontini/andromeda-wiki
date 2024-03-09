---
lang: en-US
title: Mechanics
description: Things and stuff idk
---

### Villager Gifting 🎁 (0.9.0+)

Allows you to restore some reputation by giving gifts to villagers!

This option adds 4 new tags:
* `andromeda:villager_gifts/major_positive` gives 15 reputation
* `andromeda:villager_gifts/minor_positive` gives 3 reputation
* `andromeda:villager_gifts/major_negative` takes 15 reputation
* `andromeda:villager_gifts/minor_negative` takes 3 reputation

You can see default items here: [andromeda/tags/items/villager_gifts/](https://github.com/melontini/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts)

### Dragon Fight Tweaks 🐉 (0.6.0+)

#### 1. Respawn Crystals

Makes destroyed end crystals to respawn after ~1.6 - 3 minutes. This makes the fight much harder and a bit more annoying.

#### 2. Scale Health by Max Players

Scales the dragon's health based on the maximum number of players who have been to the end during the fight.

The formula is this: `Math.floor((Math.sqrt(500 * i)) * 10)`, where i is the number of players.

#### 3. Shorter Crystal Tracking Range

Reduces the range in which the dragon can heal itself with crystals from 32 blocks to 24 blocks.

#### 4. Shorter Spikes

All newly generated spikes will be shorter.

***
### Throwable Items 🥏 (0.5.0+)

Allows throwing certain items, which would otherwise be useless*

::: details Throwable items as of 0.5.0

***

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
Datapacks are quite limited and can only execute commands and spawn colored particles (the ones from Ink Sacs and Dyes).

All behaviors must be placed in `andromeda/item_throw_behavior` of your datapack, along with `recipes`, `tags`, `loot_tables`, etc. The name of the file doesn't matter.

Example:

```json
{
  "items": "minecraft:nether_star",
  "commands": {
    "on_block": {
      "hit_block": [
        "setblock ~ ~ ~ stone"
      ]
    },
    "on_entity": {
      "hit_entity": "kill @s"
    },
    "on_any": {
      "item": "/summon lightning_bolt ~ ~ ~"
    }
  },
  "cooldown": 204,
  "complement": false,
  "particles": {
    "colors": [255, 255, 255]
  }
}
```
> When the item hits a block, it will spawn a stone block where it hit. When it hits an entity, it will kill that entity. When it hits anything, it will spawn a lightning bolt and white particles at the impact location.

As you can see, the syntax is quite simple.

`items` takes either 1 ID or an array of as many as you want.

There are 4 events and 5 command sources:

Sources. Should be an array, but can be ommited if there's just 1 value:

1. `item` Executed from the flying item right before it gets removed.
2. `user` Executed from the Entity which threw the item.
3. `server` Executed from the server. TBH, not very useful.
4. `hit_entity` Only on `on_entity` event. Executed from an entity that has just been hit by the item.
5. `hit_block` Only on `on_block` event. Executed from the server, but at the position of the block.

Events:

1. `on_entity` When a flying item hits an entity. The only event that supports hit_entity_commands.
2. `on_block` When a flying item hits a block.
3. `on_miss` When a flying item misses.
4. `on_any` All of the above, combined. Always executed after one of the previous events.

This is also the order in which the commands are executed.

The `commands` block is also a weighted list! This allows random things to happen when an item hits the ground.

```json
{
  "items": "minecraft:green_dye",
  "complement": true,
  "commands": [
    {
      "weight": 2,
      "data": { }
    },
    {
      "weight": 1,
      "data": {
        "on_any": {
          "item": "/summon slime ~ ~ ~"
        }
      }
    }
  ],
  "particles": {
    "colors": [0, 92, 0]
  }
}
```

Other things:

- `override_vanilla` If true, prevents **ALL** vanilla behaviors from being executed. This should never be used on block items, as it will make the block unplaceable.
- `disabled`: Disables all behaviors for this item.
- `complement`: If false, disables all other behaviors.
- `cooldown`: Set a custom cooldown for your item.
- `particles`: Controls the particles. Used to set the color and disable item break particles.
- - `item`: Enable/disable item break particles.
- - `color`: Takes an array of RGB colors (`[0, 34, 255]`) or a single int. -1 by default.

:::

***
### Wandering Trader Horn 🐐 (0.4+)

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note that wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.


