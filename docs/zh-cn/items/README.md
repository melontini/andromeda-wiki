---
lang: zh-CN
title: 物品
description: 物品相关调整
---

### 各种小袋 🌱🌺🌳 (1.5.0+)

植物主题的小袋！

- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/seed_pouch.png" width="35" height="35"> 种子袋：内含多种种子（和莓果）。 [Loot table](https://github.com/melontini/andromeda/blob/de12101d5235c8a579ce64a061dc80b6ee2cbc8f/src/main/resources/data/andromeda/loot_tables/pouches/seeds.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/flower_pouch.png" width="35" height="35"> 花朵袋：内含常见的花朵。 [Loot table](https://github.com/melontini/andromeda/blob/de12101d5235c8a579ce64a061dc80b6ee2cbc8f/src/main/resources/data/andromeda/loot_tables/pouches/flowers.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/sapling_pouch.png" width="35" height="35"> 树苗袋：内含常见的树苗。 [Loot table](https://github.com/melontini/andromeda/blob/de12101d5235c8a579ce64a061dc80b6ee2cbc8f/src/main/resources/data/andromeda/loot_tables/pouches/saplings.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/special_pouch.png" width="35" height="35"> 神秘袋：这个小袋在你配置`CustomLootId`前，不会有独特的战利品表。默认内含种子（但战利品表是空的！）。
- 
### 工具提示 💬 （0.8.0+）

为一些工具提示添加了更多有用的信息。你可以单独禁用它们。

* 时钟：显示当前游戏时间。
* 指南针：显示离指南针目标的距离。
* 追溯指南针：显示离上次死亡点的距离。

### 开锁器 🔓 （0.7.0+）

一个仅创造模式可用的物品，让你能够打开你原本没法打开的东西。

在 0.7.0 版本，你可以撬开：

* 村民的物品栏。

### 更好的物品名显示 ⚒⛏ （0.4.5+）

在物品耐久未满时显示其耐久度百分比，在物品数量大于一时显示其数量。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/item-names.png" width="350">

***
### 创生图腾 ♾️♥️ （0.4.3+）

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/infinite-totem.webp" width="520">

<sub>和普通的不死图腾功能一致，但是可以无限使用…</sub>

* 为了获得这个“强度尚可”的物品，你需要拥有一个由钻石或下界合金块组成的四级信标。
* 在信标上放下下界之星和不死图腾，然后看着它们缓缓上升。
* 你也可以在配置文件中禁用不死图腾的进化，使之成为仅创造模式可获取的物品。

***
### 更平衡的经验修补 ⚒️ （0.4+）

通过移除“过于昂贵”的特性，让经验修补不是那么不可或缺，让玩家不再一味地用经验来修补工具。

同时，将附魔等级上限设置为了 40，但不完全如此，因为上限其实是 40+ 待修复的物品数量。

这个特性受到了 TheMisterEpic 的视频“This Minecraft Enchantment has been BROKEN for 3 YEARS...”的启发

***
### 矿车方块采集 🥒 （0.1+）

允许你能够通过矿车来采集方块。所有方块内物品以及一些特性都会被复制到矿车中。

处于平衡性的考量，你可以决定是否玩家能够“捡起”刷怪笼。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/minecart-block-picking.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

