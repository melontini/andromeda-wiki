---
lang: en-US
title: Entities
description: Entity related tweaks
---

### Minecart Speed Control 💨 (1.5.0+)

Allows basic control of maximum minecart speeds. There is a separate option for the furnace minecart. Values > ~1.5 are not recommended!

You can also configure additional fuel consumption for the furnace minecart. (Negative values are supported)

::: tip Info
Not all modded minecart types are supported!
:::

### Zombies Don't Pick up Garbage 🧟‍♀️❌🚮 (1.0.0+)

This prevents zombies from picking up things like rotten flesh. If [Throwable Items](/mechanics/#throwable-items-🥏-0-5-0) are on, zombies will also pick up those.

You can add your own items with the `andromeda:zombies_pick_up` tag!

### All Zombies Can Pick up Items 🧟‍♂️⚔ (1.0.0+)

A companion tweak to the previous one. 

In vanilla, only some zombies can pick up items. The higher the difficulty, the more zombies can pick up items. This tweak allows all zombies to pick up items, regardless of difficulty.

### Snowball Tweaks ❄ (0.8.0+)

* Set a custom cooldown for snowball usage.
* Freeze entities on hit.
* Extinguish entities on hit.
* Melt When on Fire: Snowballs will melt if set on fire.
* Build Up Layers: Snowballs will freeze water and build up snow layers on hit.

### Slime Tweaks 💧 (0.7.0+)

Small slime related tweaks. Each option can be turned on or off.

* Small slimes will flee when they encounter an enemy.
* Larger slimes will merge with smaller ones. In combination with the previous option, this can cause some havoc.
* Slimes will slow down enemies when they attack.

### Bee Flower and Tall Flower Duplication 🌺🐝 (0.3.3+)

When a bee pollinates a flower, the flower has a chance to spread, much like grass.

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_flowers.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>
<br/>
<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_double_flowers.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

***
### Villagers Follow Emerald Blocks 💎 (0.2.2+)

Makes villagers follow you when you have an emerald block in your hand.

You can specify additional items using the `andromeda:tempting_for_villagers` tag.

***
### Better Furnace Minecart 🛤️ (0.1+)

Makes some changes to the furnace mine wagons to make them a bit better.

- Fuel is now stored as an integer.

- You can now configure the max fuel allowed for the cart. (45000 by default, 2147483647 max)

- The same fuel you can use in a normal furnace can now be used in minecarts with a furnace.

***
### Furnace Minecarts Take Fuel When Low 🔥 (0.4.9+)

Makes furnace minecarts take fuel from nearby inventory carts, such as minecarts with chests, hoppers and possibly modded ones.

If a cart has stopped, you have to push it with your hand before it moves.

***
### Simple Minecart Linking ⛓ (0.4.9 - 0.5.3)

Allows you to easily link minecarts together with a chain.

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/cart_linking.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: details How to Link

***

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" controls>
  <source src="/videos/linking.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

***
### New Minecarts 🛤️ (0.1+)

- Anvil Minecart: It's heavy!

- Note Block Minecart: Works the same way normal note blocks do.

- Jukebox Minecart: Music on Rails!

***
### New Boats 🛶 (0.2+)

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/boats.webp" width="520">

* Boat with Chest: The long awaited chest boat is now in the game! (1.18.2 only)

* Boat with Furnace: I can't believe this – a furnace minecart on water!

* Boat with Hopper: Quickly pulls items inside itself.

* Boat with Jukebox: Never get bored while sailing across the ocean again!

* Boat with TNT: Very unstable, explodes on any collision.
