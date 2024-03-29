---
lang: zh-CN
title: 方块
description: 方块相关调整
---

### 孵蛋器 🐣（0.4.1+）

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/incubator.webp" width="520">

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

* 随机化孵化时间，大幅随机化孵蛋器的孵化时间

::: details 自定义行为

从 1.9.0 起，孵蛋器支持生成随机实体，设置 NBT，以及在孵化完成时执行命令。

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
          "/say hi!"
        ]
      }
    }
  ],
  "time": 4000
}
```

如你所见，`entries` 不但可以接受单个实体，还能接受带权重的列表。`data` 和单个 `entries` 同理。

指令是由生物执行的。与普通的 `/say hi!` 不同，所有玩家都会收到来自海龟 `Poseidon` 的问候消息。

:::


***
### 胎生苗掉落（0.6.0+）

成熟后，悬挂的红树胎生苗会掉下来。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/falling_propagule.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

***
### 仙人掌取水 🌵（0.6.0+）

手持空瓶对仙人掌右键来取出其中的水。

顶部的仙人掌在被取三次水后会被破坏，掉落枯萎的灌木。

***
### 实用制箭台 🏹（0.3.1+）

赋予制箭台界面显示。在界面中，你可以强化弓弦，提高射击准度。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/fletching.png" width="412">

***
### 床无处不炸 🛏️💥（0.1+）

一个玩笑式的，让主世界的床也能爆炸的设计。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bed_explosion.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

***
### 床的爆炸强度 💥（0.1+）

:）

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/power_of_the_bed.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

***
### 宝藏守卫 🛡（1.0.0+）

还记得你是怎么洗劫猪灵堡垒的吗？很多时候：往上一挖，宝箱一开，提包走人就完事了。

在这个特性里，玩家必须击杀周围的怪物，才能打开容器（未生成战利品的）。尝试打开将高亮周围你需要击杀的怪物。是不是很 RPG？

在高于 1.7.0 的版本，你可以防止玩家破坏被守护的容器。

***
### 安眠之榻 🛌（0.1+）

用一条友好的消息取代床的爆炸。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/safe_beds.webp" width="520">

***
### 树叶缓速 🌿🐌（0.1+）

::: warning 过时特性

这一特性已经过时，将在未来版本被移除。

:::

通过减速树叶上的实体，使群系间旅行更加有挑战性。

***
### 营火效果 🔥♥️（0.1+）

使营火设定范围内的玩家获得指定药水效果。

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/campfire_effects.webp" width="520">
