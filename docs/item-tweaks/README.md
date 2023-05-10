---
lang: en-US
title: Item Tweaks
description: Item related tweaks
---

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


<details>
  <summary>Adding Custom Behaviors</summary>

***

There are two ways to add custom behaviors: DataPacks and KubeJS

DataPacks:

::: details Expand...
Unlike KubeJS, datapacks are quite limited and can only execute commands and spawn colored particles (the ones from Ink Sacs and Dyes).

All behaviors must be placed in `mt_item_throw_behavior` of your datapack, along with `recipes`, `tags`, `loot_tables`, etc. The name of the file doesn't matter.

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

As you can see, the syntax is pretty simple.

`item_id` accepts either 1 ID or an array of as many as you want.

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

`complement`: if false, this behavior overrides the default behavior of the item, if true, it runs before it.

`cooldown`: set a custom cooldown for your item.

`spawn_item_particles`: if true, spawns item break particles.

`spawn_colored_particles`: if true, spawns colored particles, the ones used with Dyes and Ink Sacs.

`particle_colors` the color of your particles, in RGB format.
:::

KubeJS:

::: details Expand...

You can easily add new behaviors via reflection in KubeJS

Example:

Works with KJS 6

```javascript
const ItemBehaviorManager = Java.loadClass("me.melontini.tweaks.util.ItemBehaviorManager") 
const ItemBehaviorAdder = Java.loadClass("me.melontini.tweaks.util.ItemBehaviorAdder") //You can use a better name.

StartupEvents.postInit(event => {
	ItemBehaviorManager.addBehavior(Item.of("cobblestone") , (stack, flyingItemEntity, world, user, hitResult) => {
             if (!world.isClientSide()) {//keep most things off-client
                //do something
		ItemBehaviorAdder.sendParticlePacketInt(flyingItemEntity, flyingItemEntity.position(), stack, true, 255, 255, 255)
	     }
	})
        // You can also add in bulk
	ItemBehaviorManager.addBehavior((stack, flyingItemEntity, world, user, hitResult) => {
             if (!world.isClientSide()) {//keep most things off-client
                //do something
		ItemBehaviorAdder.sendParticlePacketInt(flyingItemEntity, flyingItemEntity.position(), stack, true, 255, 255, 255)
	     }
	}, Item.of("cobblestone"), Item.of("tuff"), Item.of("dripstone_block"))
        // Custom cooldowns
	ItemBehaviorManager.addCustomCooldown(Item.of("cobblestone"), 0);
	ItemBehaviorManager.replaceCustomCooldown(Item.of("cobblestone"), 5);
        // Only run custom behaviors.
        ItemBehaviorManager.overrideVanilla(Item.of("cobblestone"));
})
```

:::

</details>

***
### Slightly Better Item Names ⚒⛏ (0.4.5+)

Shows item durability (in %) if durability is < 100% or item count if count is > 1

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/item-names.png" width="350">

***
### Infinite Totem of Undying ♾️♥️ (0.4.3+)

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/infinite-totem.webp" width="500">

<sub>Works the same way as normal totem, but infinitely...</sub>

To acquire one of those "totallynotOP" totems, you need to have a level 4 beacon made from diamond or netherite blocks (or both).

Now throw a nether star and a totem on top of the beacon and watch them ascend.

You can also disable ascension in the config and provide your own way to get the totem.

***
### Balanced Mending ⚒️ (0.4+)

Makes mending a bit less OP by making it remove the "Too Expensive" error instead of repairing items via XP.

Also sets anvil's XP cap to 40 levels, but not really because the cap is 40 + the amount of repair items.

Inspired by TheMisterEpic's "This Minecraft Enchantment has been BROKEN for 3 YEARS..." video

***
### Wandering Trader Horn 🐐 (0.4+)

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note, wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.

***
### Minecart Block Picking 🥒 (0.1+)

Allows you to "pick up" blocks using minecarts. All contents and some properties are copied to the cart.

For the sake of balance, you can configure if players can "pick up" spawners.

<img style="display: block; margin-left: auto; margin-right: auto;" src="/videos/minecart-block-picking.webp" width="500">

