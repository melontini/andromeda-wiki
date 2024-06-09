---
lang: zh-CN
title: 物品
description: 物品相关调整
---

# 物品

## 各种小袋 🌱🌺🌳<Badge type="tip" text="^1.5.0" />

各种植物主题的小袋！

- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/seed_pouch.png" width="35" height="35"> 种子袋：内含各种种子（还有莓果）。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/seeds.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/flower_pouch.png" width="35" height="35"> 花朵袋：内含常见品种的花朵。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/flowers.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/sapling_pouch.png" width="35" height="35"> 树苗袋：内含常见品种的树苗。 [战利品表](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/saplings.json)
- <img class="pixelated" src="https://raw.githubusercontent.com/melontini/andromeda/1.19-fabric/src/main/resources/assets/andromeda/textures/item/pouches/special_pouch.png" width="35" height="35"> 神秘袋：这个袋子并没有自己的战利品表，但你可以通过配置 `CustomLootId`。默认为种子（但是它的战利品表没有内容！）。

## 磁铁 🧲<Badge type="tip" text="^1.1.0" />

<br/>
<img alt="图片中，游戏内界面展示了 2 级的，最高 5 级的磁铁，以及红石，青金石。绿宝石，钻石，金锭。铜，石英和煤炭。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/magnet.png" width="300">

* 可以吸引指定物品的神奇磁铁。
* 可通过海洋之心左键升级，最多指定四种物品。
* 由海洋之心，四块铜锭和两份红石粉制成。

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `rangeMultiplier` | $level * rangeMultiplier$ | ✅ |

:::

## 工具提示 💬<Badge type="tip" text="^0.8.0" />

<br/>
<img alt="展示了三个物品：显示距出生点还有 2.4 格的指南针，显示当前时间是 09:06 的时钟，以及显示距死亡点还有 7.5 格的追溯指南针。." style="display: block; margin-left: auto; margin-right: auto;" src="/images/tooltips.png" width="500">

为一些物品的工具提示添加了更多有用的信息。你可以单独禁用它们。

* 时钟：显示当前游戏时间。
* 指南针：显示离指南针目标的距离。
* 追溯指南针：显示离上次死亡点的距离。

## 开锁器 🔓<Badge type="tip" text="^0.7.0" />

一个仅创造模式可用的物品，让你能够打开原本没法打开的东西。

在 0.7.0 版本，你可以撬开：

* 村民的物品栏。

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `chance` | 开锁的成功率。 | ✅ |
| `breakAfterUse` | 开锁器是否使用后销毁？ | ✅ |

:::

## 更好的物品名显示 ⚒⛏<Badge type="tip" text="^0.4.5" />

在物品耐久有损耗时，显示其耐久度百分比；在物品数量大于一时，显示其数量。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/item-names.png" width="350">

## 创生图腾 ♾️♥️<Badge type="tip" text="^0.4.3" />

<br/>
<img alt="晚上，一个信标在由钻石和下界合金块搭建的结构上。信标向天空发射着明亮的光柱，上面放着一块发光物品展示框，框内是一个拥有白色发光眼睛的图腾。周边的环境有草、有树、有夜空。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/infinite-totem.webp" width="520">

<sub>和普通的不死图腾功能一致，但可以无限使用…</sub>

为了获得这个“强度尚可”的物品，你需要拥有一个由钻石或下界合金块组成的四级信标。

信标必须按下面的样式搭建：

```
    B
   NNN
  DDDDD
 NNNNNNN
DDDDDDDDD
```

N 代表下界合金块，D 代表钻石块。

把下界之星和不死图腾丢在信标上，然后看着它们缓缓上升，图腾就能进化了。

你也可以在配置文件中禁用不死图腾的进化，根据自己的需要，改变获取它的方法！

## 更平衡的经验修补 ⚒️<Badge type="tip" text="^0.4" />

通过移除“过于昂贵”的特性，让经验修补不是那么不可或缺，让玩家不再一味地用经验来修补工具。

同时，将附魔等级上限设置为了 40，但不完全如此，因为上限其实是 40 加修复材料的数量。

这一特性受到了 TheMisterEpic 的视频“This Minecraft Enchantment has been BROKEN for 3 YEARS...”的启发

## 矿车方块采集 🥒<Badge type="tip" text="^0.1" />

允许你使用矿车采集方块。所有方块内物品以及一些特性都会被复制到矿车中。

考虑到平衡性，你可以配置玩家是否能“采集”刷怪笼。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/minecart-block-picking.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>
