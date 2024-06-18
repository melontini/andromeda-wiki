---
lang: zh-CN
title: 实体
description: 实体相关调整
---

# 实体

## 恶魂调整 👻 <Badge type="tip" text="^1.11.0" />

目前特性：让恶魂死亡时爆炸。

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `explodeOnDeath` | 恶魂是否在死亡时爆炸？ | ✅ |
| `explosionPower` | 恶魂爆炸的强度。 | ✅ |

:::

## 脱离载具 🗿<Badge type="tip" text="^1.7.0" />

在原版，船里的生物无论被揍得多惨，都不愿从它的载具上下来。这一特性迫使他们在受伤时脱离载具。

你可以通过修改 `andromeda:escape_vehicles_on_hit` 标签来确定受影响的生物，以及 `andromeda:escapable_vehicle` 标签来确定可被脱离的载具。

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `modifier` | 矿车速度的调整数。 | ✅ |
| `furnaceModifier` | 动力矿车速度的调整数。 | ✅ |
| `additionalFurnaceFuel` | 动力矿车燃料消耗的调整数。 | ✅ |

:::

## 矿车速度配置 💨<Badge type="tip" text="^1.5.0" />

使你能够调整矿车的最大速度。你可以单独配置动力矿车。不推荐设置大于 1.5 的值！

你还可以配置动力矿车的燃料消耗（支持负值）。

::: tip 提示
并不支持所有的模组矿车！
:::

## 僵尸不再拾起垃圾 🧟‍♀️❌🚮<Badge type="tip" text="^1.0.0" />

使僵尸们不再选择拾起垃圾，比如腐肉。如果启用了[可投掷物品](/zh-cn/mechanics#throwable-items-🥏)特性，僵尸仍将捡起这些物品（能用就不是垃圾了）。

你可以通过编辑 `andromeda:zombies_pick_up` 标签的内容来进行配置！

## 所有僵尸都能拾起物品 🧟‍♂️⚔<Badge type="tip" text="^1.0.0" />

对上一个特性的追加。

在原版，只有部分僵尸能够拾起物品。难度越高，能拾起物品的僵尸越多。这个特性能够无视难度，使所有僵尸都能够拾取物品。

## 雪球调整 ❄<Badge type="tip" text="^0.8.0" />

* 设定雪球的投掷冷却时间。
* 冻结受击实体。
* 为受击实体灭火。
* 着火融化：雪球着火时会融化消失。
* 落地覆雪：雪球能够冻结水，并为被砸中的方块覆盖雪。

## 史莱姆调整 💧<Badge type="tip" text="^0.8.0" />

史莱姆相关调整。每个选项都可以被单独启用或禁用。

* 小型史莱姆会逃离遭遇的敌人。
* 大型史莱姆可以融合小型史莱姆。在现有的选项下，这可能带来一些小麻烦。
* 史莱姆减速接触到的实体。

## 蜜蜂催生花丛 🌺🐝<Badge type="tip" text="^0.3.3" />

蜜蜂为花朵授粉时，可能像用骨粉催生草那样催生花丛。

<video alt="视频中，一只蜜蜂从蜂巢中飞出，向铃兰飞去，几秒后，蜜蜂飞离，原本的花朵周围冒出了更多花朵。" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_flowers.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>
<br/>
<video alt="视频中，一直蜜蜂从蜂巢中飞出，向牡丹飞去，几秒后，蜜蜂飞离，原本的花丛周围冒出了更多花朵。" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_double_flowers.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `tallFlowers` | 为两格高的花朵启用调整，同时移除默认的花朵催生方法。 | ✅ |

:::

## 村民跟随绿宝石块 💎<Badge type="tip" text="^0.2.2" />

村民会跟随手持绿宝石块的玩家。

你可以通过修改 `andromeda:tempting_for_villagers` 标签来指定或添加新的物品。

## 更好的动力矿车 🛤️<Badge type="tip" text="^0.1" />

对动力矿车做出了一些调整，让它们更实用。

- 你能够设置动力矿车的最大燃料承载量（默认 45000，最大 2147483647）。
- 熔炉的燃料现在都可以用于动力矿车。

你也可以选择让动力矿车能够从周边的，能装东西的矿车里，比如运输矿车，漏斗矿车（可能也支持模组矿车）中，取用燃料。
如果动力矿车已经停下来了，你需要手动推行，才能让它继续行驶。

## 额外的矿车种类 🛤️<Badge type="tip" text="^0.1" />

- 载铁砧的矿车：这可有些重量！
- 载音符盒的矿车：它上面的音符盒和普通的音符盒一样。
- 载唱片机的矿车：欢歌载舞！

## 额外的船种类 🛶<Badge type="tip" text="^0.2" />

<br/>
<img alt="截图中，草方块上有物种不同的船。从左到右分别是：箱船，载熔炉的船，载唱片机的船，载TNT的船，以及载漏斗的船。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/boats.webp" width="520">

* 载熔炉的船：谁敢想，有朝一日会有这样的船行于水上！
* 载漏斗的船：快速装入物品。
* 载唱片机的船：航海从未如此有趣！
* 载TNT的船：一触即爆，非常不稳定。
