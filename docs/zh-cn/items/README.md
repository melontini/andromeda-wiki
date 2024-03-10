---
lang: zh-CN
title: 物品
description: 物品相关调整
---

### 各种小袋 🌱🌺🌳（1.5.0+）

各种植物主题的小袋！

- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/seed_pouch.png" width="35" height="35"> 种子袋：内含各种种子（还有莓果）。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/seeds.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/flower_pouch.png" width="35" height="35"> 花朵袋：内含常见品种的花朵。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/flowers.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/sapling_pouch.png" width="35" height="35"> 树苗袋：内含常见品种的树苗。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/saplings.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/special_pouch.png" width="35" height="35"> 神秘袋：这个袋子并没有自己的战利品表，但你可以通过配置 `CustomLootId`。默认为种子（但是它的战利品表没有内容！）。

### 磁铁 🧲 (1.1.0+)

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/magnet.png" width="300">

* 可以吸引指定物品的神奇磁铁。
* 可通过海洋之心左键升级，最多指定四种物品。
* 由海洋之心，四块铜锭和两份红石粉制成。

### 工具提示 💬（0.8.0+）

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/tooltips.png" width="500">

为一些物品的工具提示添加了更多有用的信息。你可以单独禁用它们。

* 时钟：显示当前游戏时间。
* 指南针：显示离指南针目标的距离。
* 追溯指南针：显示离上次死亡点的距离。

### 开锁器 🔓（0.7.0+）

一个仅创造模式可用的物品，让你能够打开原本没法打开的东西。

在 0.7.0 版本，你可以撬开：

* 村民的物品栏。

### 更好的物品名显示 ⚒⛏（0.4.5+）

在物品耐久有损耗时，显示其耐久度百分比；在物品数量大于一时，显示其数量。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/item-names.png" width="350">

***
### 创生图腾 ♾️♥️（0.4.3+）

<br/>
<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/infinite-totem.webp" width="520">

<sub>和普通的不死图腾功能一致，但可以无限使用…</sub>

* 为了获得这个“强度尚可”的物品，你需要拥有一个由钻石或下界合金块组成的四级信标。
* 把下界之星和不死图腾丢在信标上，然后看着它们缓缓上升。
* 你也可以在配置文件中禁用不死图腾的进化，使之成为仅创造模式可获取的物品。

***
### 更平衡的经验修补 ⚒️（0.4+）

通过移除“过于昂贵”的特性，让经验修补不是那么不可或缺，让玩家不再一味地用经验来修补工具。

同时，将附魔等级上限设置为了 40，但不完全如此，因为上限其实是 40 加修复材料的数量。

这一特性受到了 TheMisterEpic 的视频“This Minecraft Enchantment has been BROKEN for 3 YEARS...”的启发

***
### 矿车方块采集 🥒（0.1+）

允许你使用矿车采集方块。所有方块内物品以及一些特性都会被复制到矿车中。

考虑到平衡性，你可以配置玩家是否能“采集”刷怪笼。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/minecart-block-picking.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>
