---
lang: zh-CN
title: 方块
description: 方块相关调整
---

# 方块

## 孵蛋器 🐣<Badge type="tip" text="^0.4.5" />
[![需要命令官模组](https://raw.githubusercontent.com/constellation-mc/commander/documentation/docs/public/badges/requires/compacter_vector.svg)](https://modrinth.com/mod/cmd)

<img alt="一张孵蛋器的游戏内图片，它是一个顶上有玻璃，装有蛋的木盒子。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/incubator.webp" width="520">

一个方便且实用的孵蛋装置！

上手指南：

<div style="float: right;">
<img src="/images/incubator_guide.webp" width="348">
<ul><li>（一个或者两个都行）</li></ul>
</div>

1. 在你想要的地方放下孵蛋器。
2. 因为这个器械无法自动生热，所以你需要在它的底下放置一个营火。
3. 用漏斗传导物品，或者手持蛋右键它。
4. 静心等待…

兼容所有原版的蛋，包括刷怪蛋 (只要有使用或延展 SpawnEggItem class，该模组的刷怪蛋就被支持)。

这里是一些额外的设置项：

* 随机化孵化时间，大幅随机化孵蛋器的孵化时间。

::: details 自定义行为

从 1.9.0 起，孵蛋器支持生成随机实体，设置 NBT，以及在孵化完成时执行命令。1.10.0 后，`/` 样式的命令被[命令官模组的命令](https://constellation-mc.github.io/commander/zh-cn/Commands)取代了，并且 `time` 支持使用[表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions)。

下面是最简单的例子：
```json
{
  "identifier": "minecraft:egg",
  "entries": {
    "entity": "minecraft:chicken"
  },
  "time": 2500
}
```
孵蛋器孵化完成后，将会生成一只小鸡。

我们也可以来得复杂些：
```json
{
  "identifier": "minecraft:turtle_egg",
  "entries": [
    {
      "weight": 1,
      "data": {
        "entity": "minecraft:turtle",
        "nbt": {
          "CustomName": "{\"text\":\"Poseidon\"}"
        },
        "commands": [
          {
            "type": "commander:commands",
            "selector": "this_entity",
            "commands": [
              "/say hi!"
            ]
          }
        ]
      }
    }
  ],
  "time": 4000
}
```

如你所见，`entries` 不但可以接受单个实体，还能接受带权重的列表。`data` 和单个 `entries` 同理。

指令是由生物执行的。与普通的 `/say hi!` 不同，所有玩家都会收到来自海龟 `Poseidon` 的问候消息。

| 命令官上下文  |   |
|---|---|
| `time`  | `block_state`, `block_entity`, `tool`, `origin`  |
| `commands`  | `this_entity`, `block_state`, `block_entity`, `tool`, `origin`  |

:::


## 胎生苗掉落<Badge type="tip" text="^0.6.0" />

成熟后，悬挂的红树胎生苗会掉下来。

<video alt="在红树林沼泽中的延时拍摄，一个红树胎生苗从红树上掉了下来。" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/falling_propagule.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

## 仙人掌取水 🌵<Badge type="tip" text="^0.6.0" />

手持空瓶对仙人掌右键来取出其中的水。

顶部的仙人掌在被取三次水后会被破坏，掉落枯萎的灌木。

## 实用制箭台 🏹<Badge type="tip" text="^0.3.1" />

赋予制箭台界面显示。在界面中，你可以强化弓弦，提高射击准度。

<img alt="一张制箭台界面的截图，第一个槽位里是弓，第二个是线，第三个则是强化后的弓。下面的工具提示写着，“强化弓弦剩余次数：7”。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/fletching.png" width="412">

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/Expressions) |
|---------|-------------|-------------|
| `divergenceModifier` | 决定箭矢的偏离程度。 $div * modifier$ | ✅ |

:::

## 床无处不炸 🛏️💥<Badge type="tip" text="^0.1" />

一个玩笑式的，让主世界的床也能爆炸的设计。

<video alt="这个视频展示了床在玩家右键后爆炸的情景。" style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bed_explosion.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

## 床的爆炸强度 💥<Badge type="tip" text="^0.1" />

:）

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/power_of_the_bed.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

## 宝藏守卫 🛡<Badge type="tip" text="^1.0.0" />

还记得你是怎么洗劫猪灵堡垒的吗？很多时候：往上一挖，宝箱一开，提包走人就完事了。

在这个特性里，玩家必须击杀周围的怪物，才能打开容器（未生成战利品的）。尝试打开将高亮周围你需要击杀的怪物。是不是很 RPG？

在高于 1.7.0 的版本，你可以防止玩家破坏被守护的容器。

:: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `range` | 怪物在这个距离内可以守护容器。 | ✅ |
| `allowLockPicking` | 是否[开锁器](zh-cn/items#lockpick-%F0%9F%94%93)可以无视宝藏守卫？ | ❌ |
| `breakingHandler` | 被守护的容器是否无法破坏？ | ➖ |

:::

## 安眠之榻 🛌<Badge type="tip" text="^0.1" />

用一条友好的消息取代床的爆炸。

<img alt="靠近传送门，一张红色床在末地石上。背景有末影人和紫色的植物。底部显示消息：“你不能在这里睡觉！”在快捷栏中，有盾牌和其他物品。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/safe_beds.webp" width="520">

## 树叶缓速 🌿🐌<Badge type="danger" text="过时特性" /> <Badge type="tip" text="^0.1" />

通过减速树叶上的实体，使群系间旅行更加有挑战性。

## 营火效果 🔥♥️<Badge type="tip" text="^0.1" />

使营火设定范围内的玩家获得指定药水效果。

<img alt="一张在夜晚截取的图片。一个玩家站在点亮的营火旁，周围有草与树木。玩家右手持一块食物，左手持一块盾牌。抬头显示有生命恢复效果。" style="display: block; margin-left: auto; margin-right: auto;" src="/images/campfire_effects.webp" width="520">

::: details configuration

| 配置项  | 描述 | [表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |
|---------|-------------|-------------|
| `affectsPassive` | 是否营火效果影响友善生物？ | ✅ |
| `effectsRange` | 营火给予效果的范围。 | ✅ |
| `effectList` | 效果列表。 | ✅ |

:::
