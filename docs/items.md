---
lang: en-US
title: Items
description: Item related tweaks
---

# Items

## Pouches 🌱🌺🌳 <Badge type="tip" text="^1.5.0" />

A collection of plant-themed pouches!

- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/seed_pouch.png" width="35" height="35"> Seed Pouch: Contains various seeds (and berries). [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/seeds.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/flower_pouch.png" width="35" height="35"> Flower Pouch: Contains common types of flowers. [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/flowers.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/sapling_pouch.png" width="35" height="35"> Sapling Pouch: Contains common sapling types. [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/saplings.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/special_pouch.png" width="35" height="35"> Special Pouch: This pouch doesn't have it's own table, but can be configured using the `CustomLootId` NBT entry. Set to seeds by default. (provided loot table has no context!)

## Magnet 🧲 <Badge type="tip" text="^1.1.0" />

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/magnet.png" width="300">

* This special magnet allows you to select items you want to attract.
* Can be upgraded 4 additional times by left-clicking with a Heart of the Sea.
* Crafted from Heart of the Sea, 4 Copper Ingots and 2 Redstone.

## Tooltips 💬 <Badge type="tip" text="^0.8.0" />

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/tooltips.png" width="500">

Adds more useful info to various tooltips. You can enable/disable each one.

* Clock. Shows current in-game time.
* Compass. Shows distance to compass' target.
* Recovery Compass. Shows distance to the last death spot.

## Lockpick 🔓 <Badge type="tip" text="^0.7.0" />

A creative only item that allows you to open things you shouldn't.

As of 0.7.0 you can pick:

* Villager inventories.

## Slightly Better Item Names ⚒⛏ <Badge type="tip" text="^0.4.5" />

Shows item durability (in %) if durability is < 100% or item count if count is > 1

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/item-names.png" width="350">

## Infinite Totem of Undying ♾️♥️ <Badge type="tip" text="^0.4.3" />

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/infinite-totem.webp" width="520">

<sub>Works the same way as normal totem, but infinitely...</sub>

* To get one of these "totally not OP" totems, you need to have a level 4 beacon made from diamond or netherite blocks (or both).
* Now throw a nether star and a totem onto the beacon and watch them ascend.
* You can also disable ascension in the config and create your own way to get the totem.

## Balanced Mending ⚒️ <Badge type="tip" text="^0.4" />

Makes mending a bit less OP by making it remove the "Too Expensive" error instead of repairing items via XP.

Also sets anvil's XP cap to 40 levels, but not really because the cap is 40 + the amount of repair items.

Inspired by TheMisterEpic's "This Minecraft Enchantment has been BROKEN for 3 YEARS..." video

## Minecart Block Picking 🥒 <Badge type="tip" text="^0.1" />

Allows you to "pick up" blocks using minecarts. All contents and some properties are copied to the cart.

For the sake of balance, you can configure whether players can "pick up" spawners.

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/minecart-block-picking.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

