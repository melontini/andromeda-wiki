---
lang: zh-CN
title: 机制
description: 一些机制，还有一些数不上名的小玩意
---

### 友好送礼 🎁（0.9.0+）

使玩家能够通过给村民送礼来恢复一定的声望值！

这一选项下有四个新增的标签：
* `andromeda:villager_gifts/major_positive` 下的物品将获得 15 点声望
* `andromeda:villager_gifts/minor_positive` 下的物品将获得 3 点声望
* `andromeda:villager_gifts/major_negative` 下的物品将扣除 15 点声望
* `andromeda:villager_gifts/minor_negative` 下的物品将扣除 3 点声望

你可以在这里 [andromeda/tags/items/villager_gifts/](https://github.com/melontini/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts) 查看礼品预设。

### 末地龙战调整 🐉（0.6.0+）

#### 1. 末影水晶再生成

使末影水晶能够在大约 1.6-3 分钟后再生成。这会大幅提升战斗的难度，当然，也会更烦人一点。

#### 2. 集群强化

根据最大在末地的玩家数量提升末影龙生命值。

计算公式：`Math.floor((Math.sqrt(500 * i)) * 10)`，i 为最大玩家数量。

#### 3. 更短的水晶治疗距离

将水晶的治疗距离由 32 降低至 24 格。

#### 4. 更短的尖刺

让新生成的尖刺更短。

***
### 可投掷物品 🥏（0.5.0+）

使一些 本来可能用不上* 的物品变得可投掷

::: details 0.5.0 版本中，可投掷的物品

***

* 骨粉
* 墨囊和发光墨囊
* 所有染料
* 普通砖头和下界砖
* 火焰弹
* 火药

欢迎提供新点子！

:::

现在有一个新的选项：僵尸能投掷物品吗？

若启用，僵尸将能够投掷它们所拾起的可投掷物品。

::: details 添加自定义投掷行为
数据包能做的很有限，只能执行命令和生成带颜色的粒子（就像墨囊和染料那样）。

所有自定义行为需要和 `recipes`, `tags`, `loot_tables` 一块，放置在数据包的 `andromeda/item_throw_behavior` 文件夹下。可以任取自定义行为的具体文件名。

例子：

```json
{
  "items": "minecraft:nether_star",
  "commands": {
    "on_block": {
      "hit_block": [
        "setblock ~ ~ ~ stone"
      ]
    },
    "on_entity": {
      "hit_entity": "kill @s"
    },
    "on_any": {
      "item": "/summon lightning_bolt ~ ~ ~"
    }
  },
  "cooldown": 204,
  "complement": false,
  "particles": {
    "colors": [255, 255, 255]
  }
}
```
> 这段代码的意思是，当这个物品击中了方块，会在其接触面放置一块石头；当这个物品击中了实体，会直接杀死之；当这个物品击中了任意东西，都会在击中处生成一道闪电以及白色的粒子效果。

如你所见，语法很简单。

`items` 可以是一个物品，也可以是一长串的物品 ID。

一共有 4 种和事件和 5 种命令执行源：

执行源。应当是一个列表，但如果只选了一个，其他可以忽略不算：

1. `item` 由被投掷物品在消失前的一瞬间执行。
2. `user` 由物品的投掷者执行。
3. `server` 从服务端执行。顺带一提，这个不太实用。
4. `hit_entity` 只在 `on_entity` 事件中有效。由被丢中的实体执行。
5. `hit_block` 只在 `on_block` 事件中有效。从服务端，在方块的位置上执行。

事件：

1. `on_entity` 当投掷物击中实体时。支持 `hit_entity` 执行源。
2. `on_block` 当投掷物击中方块时。支持 `hit_block` 执行源。
3. `on_miss` 当投掷物错过目标时。
4. `on_any` 包含以上所有情况。永远会在上述事件执行后执行。

这其实也是命令执行的方式。

`commands` 接受带权重的列表！物品落地时，你可以自定义随机事件发生。

```json
{
  "items": "minecraft:green_dye",
  "complement": true,
  "commands": [
    {
      "weight": 2,
      "data": { }
    },
    {
      "weight": 1,
      "data": {
        "on_any": {
          "item": "/summon slime ~ ~ ~"
        }
      }
    }
  ],
  "particles": {
    "colors": [0, 92, 0]
  }
}
```

其他选项：

`override_vanilla`：若为 true，阻止执行**所有**原版的行为。因为这会导致方块无法被放置，它永远不应该被用到方块类物品上。

`disabled`：禁用该物品的所有自定义投掷行为。

`complement`：若为 false，自定义的行为将覆盖它原本的行为，若为 true，则将在它执行完原本的行为前执行自定义行为。

`cooldown`：为物品设置自定义的冷却时间。

`particles`：若为 true，生成物品被破坏的粒子效果。
- - `item`：启用/禁用物品破碎粒子效果。
- - `color`：RGB 格式的颜色（比如 `[0, 34, 255]`）或一个整数。默认为 -1。

:::

***
### 流浪商人号角 🐐（0.4+）

每两天，你都能使用“歌颂”号角来召唤一位流浪商人。

值得注意的是，流浪商人仍然会自然生成。

你可以通过禁用 \"doTraderSpawning\" 的游戏规则，来禁用流浪商人自然生成。
