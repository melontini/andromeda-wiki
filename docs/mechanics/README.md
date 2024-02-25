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
  "item_id": "minecraft:nether_star",
  "on_block_hit": {
    "hit_block_commands": [
      "setblock ~ ~ ~ stone"
    ]
  },
  "on_entity_hit": {
    "hit_entity_commands": [
      "kill @s"
    ]
  },
  "on_any_hit": {
    "item_commands": [
      "/summon lightning_bolt ~ ~ ~"
    ]
  },
  "complement": false,
  "spawn_colored_particles": true,
  "particle_colors": {
    "red": 255,
    "green": 255,
    "blue": 255
  }
}
```
> When the item hits a block, it will spawn a stone block where it hit. When it hits an entity, it will kill that entity. When it hits anything, it will spawn a lightning bolt and white particles at the impact location.

As you can see, the syntax is quite simple.

`item_id` takes either 1 ID or an array of as many as you want.

There are 4 events and 5 command sources:

Sources:

1. `item_commands` Executed from the flying item right before it gets removed.
2. `user_commands` Executed from the Entity which threw the item.
3. `server_commands` Executed from the server. TBH, not very useful.
4. `hit_entity_commands` Only on `on_entity_hit` event. Executed from an entity that has just been hit by the item.
5. `hit_block_commands` Only on `on_block_hit` event. Executed from the server, but at the position of the block.

Events:

1. `on_entity_hit` When a flying item hits an entity. The only event that supports hit_entity_commands.
2. `on_block_hit` When a flying item hits a block.
3. `on_miss` When a flying item misses.
4. `on_any_hit` All of the above, combined. Always executed after one of the previous events.

This is also the order in which the commands are executed.

Other things:

`override_vanilla` If true, prevents **ALL** vanilla behaviors from being executed. This should never be used on block items, as it will make the block unplaceable.

`disabled`: Disables all behaviors for this item.

`complement`: if false, this behavior overrides the default behavior of the item, if true, it runs before it.

`cooldown`: set a custom cooldown for your item.

`spawn_item_particles`: if true, spawns item break particles.

`spawn_colored_particles`: if true, spawns colored particles, the ones used with Dyes and Ink Sacs.

`particle_colors`: the color of your particles, in RGB format.
:::

***
### Wandering Trader Horn 🐐 (0.4+)

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note that wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.


