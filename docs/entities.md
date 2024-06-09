---
lang: en-US
title: Entities
description: Entity related tweaks
---

# Entities

## Ghast Tweaks 👻 <Badge type="tip" text="^1.11.0" />

Currently, makes ghast explode upon death.

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `explodeOnDeath` | Should ghast explode upon death? | ✅ |
| `explosionPower` | Ghast explosion power. | ✅ |

:::

## Vehicle Unentrapment 🗿 <Badge type="tip" text="^1.7.0" />

By default, entities in vehicles refuse to leave no matter how much damage they take. This option forces the entity to leave the vehicle when it takes damage.

Affected entities are controlled with the `andromeda:escape_vehicles_on_hit` tag, and vehicles with `andromeda:escapable_vehicle`.

## Minecart Speed Control 💨 <Badge type="tip" text="^1.5.0" />

Allows basic control of maximum minecart speeds. There is a separate option for the furnace minecart. Values > ~1.5 are not recommended!

You can also configure additional fuel consumption for the furnace minecart. (Negative values are supported)

::: tip Info
Not all modded minecart types are supported!
:::

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `modifier` | Speed modifier for most minecarts. | ✅ |
| `furnaceModifier` | Speed modifier for furnace minecarts. | ✅ |
| `additionalFurnaceFuel` | Fuel consumption modifier for furnace minecarts | ✅ |

:::

## Zombies Don't Pick up Garbage 🧟‍♀️❌🚮 <Badge type="tip" text="^1.0.0" />

Prevent zombies from picking up things like rotten flesh. If [Throwable Items](/mechanics#throwable-items-🥏) are on, zombies will also pick up those.

You can add your own items with the `andromeda:zombies_pick_up` tag!

## All Zombies Can Pick up Items 🧟‍♂️⚔ <Badge type="tip" text="^1.0.0" />

A companion tweak to the previous one. 

In vanilla, only some zombies can pick up items. The higher the difficulty, the more zombies can pick up items. This tweak allows all zombies to pick up items, regardless of difficulty.

## Snowball Tweaks ❄ <Badge type="tip" text="^0.8.0" />

* Set a custom cooldown for the use of snowballs.
* Freeze entities on hit.
* Extinguish entities on hit.
* Melt When on Fire: Snowballs will melt when set on fire.
* Build Up Layers: Snowballs freeze water and create layers of snow when hit.

## Slime Tweaks 💧 <Badge type="tip" text="^0.7.0" />

Small slime related tweaks. Each option can be turned on or off.

* Small slime will flee when they encounter an enemy.
* Larger slime will merge with smaller ones. In combination with the previous option, this can cause some havoc.
* Slime will slow down enemies when they attack.

## Bee Flower Duplication 🌺🐝 <Badge type="tip" text="^0.3.3" />

When a bee pollinates a flower, the flower has a chance to spread, much like grass.

<video alt="A video of a bee flying from a bee hive to a lily of the valley and after a few seconds, the bee flies away and more flowers pop-up around the original." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_flowers.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>
<br/>
<video alt="A video of a bee flying from a bee hive to a peony and after a few seconds, the bee flies away and one more flower pops-up near the original." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_double_flowers.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: details configuration

| Config  | Description | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `tallFlowers` | Enable the tweak for tall flowers. Also removes the default flower duplication method. | ✅ |

:::

## Villagers Follow Emerald Blocks 💎 <Badge type="tip" text="^0.2.2" />

Villagers will follow you when you have an emerald block in your hand.

You can specify additional items using the `andromeda:tempting_for_villagers` tag.

## Better Furnace Minecart 🛤️ <Badge type="tip" text="^0.1" />

A few tweaks to make furnace minecarts just a bit better

- You can now configure the max fuel allowed for the cart. (45000 by default, 2147483647 max)
- The same fuel you can use in a normal furnace can now be used in minecarts with a furnace.

Optionally, Furnace minecarts will take fuel from nearby inventory carts, such as minecarts with chests, hoppers and possibly modded ones.
If a cart has stopped, you have to push it with your hand before it moves.

## New Minecarts 🛤️ <Badge type="tip" text="^0.1" />

- Anvil Minecart: It's heavy!
- Note Block Minecart: Works the same way normal note blocks do.
- Jukebox Minecart: Music on Rails!

## New Boats 🛶 <Badge type="tip" text="^0.2" />

<br/>
<img alt="A screenshot showing five different types of boats on grass. From left to right: a chest boat, a furnace-powered boat, a jukebox boat, a boat with a block of TNT, and a hopper boat." style="display: block; margin-left: auto; margin-right: auto;" src="/images/boats.webp" width="520">

* Boat with Furnace: I can't believe this – a furnace minecart on water!
* Boat with Hopper: Quickly pulls items inside itself.
* Boat with Jukebox: Never get bored while sailing across the ocean again!
* Boat with TNT: Very unstable, explodes on any collision.
