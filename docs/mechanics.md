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

Andromeda 1.10.0 introduced a new, highly customizable data format.
The new format is based on two concepts: events and command pools.

## Events

Events represent what the flying object has hit. Standard events include  `andromeda:block`, `andromeda:entity`, `andromeda:miss`, `andromeda:any`.

Different events may support additional command pool types.

An event array is defined as follows:

```json
"events": [
  {
    "type": "andromeda:any",
    "condition": {},
    "commands": []
  }
]
```

What is the `condition` block? The conditions control whether an event can be executed. The format is identical to the vanilla predicate, so you can use tools like [misode.github.io](https://misode.github.io/predicate/) to help you create predicates.

The parameters may be slightly different:

| Parameter  |   |
|---|---|
| `direct_killer_entity`  |  the flying item |
| `tool`  |  the item stack of the flying item |
| `killer_entity`  |  the thrower of the item. |
| `this_entity`  |  the hit entity |
| `block_entity`  |  the hit block entity |
| `block_state`  |  the hit block state |

## Command Pools

Command pools represent the actions that your custom behavior will perform on a given event.

Just like events, command pools can accept conditions.

The special `particles` block can be used to spawn colored/item-breaking particles. The particles are spawned at the source position.

```json
"particles": {
  "item": true,
  "colors": [255, 0, 255]
}
```

Andromeda provides "source" command types, like `andromeda:item`, `andromeda:user`, `andromeda:server`, `andromeda:hit_entity`, `andromeda:hit_block`. All commands specified in these blocks will be executed as their actor. i.e. `andromeda:item` is the flying item. `andromeda:user` is the thrower of the item, if there is one.

```json
"commands": [
  {
    "type": "andromeda:hit_entity",
    "commands": [
      "/effect give @s minecraft:blindness 5 0 true",
      "/effect give @s minecraft:glowing 5 0 true"
    ]
  }
]
```

But there are also "logic" command types, like `andromeda:random`, `andromeda:defaulted`, `andromeda:all_of` and `andromeda:any_of`. These are a bit more involved.

`andromeda:random`:

This type accepts a weighted list of other command types and a number of rolls (1 if not specified).

```json
{
  "type": "andromeda:random",
  "rolls": 3,
  "commands": [
    {
      "weight": 3,
      "data": {
        "type": "andromeda:item",
        "particles": {
          "item": true,
          "colors": [5, 36, 99]
        }
      }
    },
    {
      "weight": 1,
      "data": {
        "type": "andromeda:item",
        "particles": {
          "item": true,
          "colors": [0, 255, 0]
        }
      }
    }
  ]
}
```

`andromeda:defaulted`:

This type is a simple if-else statement. If **all** commands in the `commands` block fail (condition fails), the commands specified in the `default` will be used.

```json
{
  "type": "andromeda:defaulted",
  "default": [
    {
      "type": "andromeda:hit_block",
      "particles": {
        "item": true,
        "colors": [121, 28, 39]
      }
    }
  ],
  "commands": [
    {
      "type": "andromeda:hit_block",
      "condition": {
        "condition": "minecraft:block_state_property",
        "block": "minecraft:stone"
      },
      "particles": {
        "item": true,
        "colors": [5, 5, 8]
      }
    }
  ]
}
```

`andromeda:all_of` and `andromeda:any_of`:

These blocks are almost identical to `andromeda:defaulted`, but the `default` block is called `then`.


All command types can be nested, so a "defaulted" block can fall back to an "all of" block to an "any of" block to a "defaulted" block to a "random" block with a "defaulted" block.

You can find some examples over here: [gist.github.com](https://gist.github.com/melontini/5a516acfe108712804319055085bb355)

Important note! You will not get an error if any of your event/condition/command `type` fields are invalid. I have no idea what's going on with that.


Misc options:

| options  |   |
|---|---|
| `complement`  |  If false, disables all other behaviors. |
| `cooldown`  |  Set a custom cooldown for your item. In ticks. |
| `disabled`  |  Disables all behaviors for this item. |
| `override_vanilla`  |  If true, prevents ALL vanilla behaviors from being executed. This should never be used on block items, as it will make the block unplaceable. |

:::

## Wandering Trader Horn 🐐 <Badge type="tip" text="^0.4" />

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note that wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.


