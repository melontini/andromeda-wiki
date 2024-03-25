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

#### 4. 更短的黑曜石柱

让新生成的黑曜石柱更短。

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

现在有一个新的选项：僵尸能否投掷物品？

若启用，僵尸将能够投掷它们所拾起的可投掷物品。

::: details 自定义投掷行为

所有自定义投掷行为都需要被放到你的数据包的 `andromeda/item_throw_behavior` 文件夹下, 和 `recipes`，`tags`，`loot_tables` 之类的一块。文件名可任取。

群星 1.10.0 引入了一种全新的、高度自定义的数据包格式。
事件和命令池是这一格式的主要概念。

### 事件

事件代表投掷物击中的东西。标准的事件包括：`andromeda:block`，`andromeda:entity`，`andromeda:miss` 和 `andromeda:any`。

特定的事件还可能支持额外的命令池种类。

像这样，你可以定义一个事件：

```json
"events": [
  {
    "type": "andromeda:any",
    "condition": {},
    "commands": []
  }
]
```

`condition`（条件）用来决定事件能否被执行。与原版数据包的 predicate 类似，你可以使用类似这个 [misode.github.io](https://misode.github.io/predicate/) 的工具来辅助你编写条件。

下面的参数会有一些不一样：

| 参数  |   |
|---|---|
| `direct_killer_entity`  |  投掷物 |
| `tool`  |  投掷物物品 |
| `killer_entity`  |  投掷者 |
| `this_entity`  |  受击实体 |
| `block_entity`  |  受击方块实体 |
| `block_state`  |  受击方块状态 |

### 命令池

命令池代表事件触发的自定义行为。

与事件一样，命令池也可以指定条件。

`particles`（粒子）用于在事件触发处生成彩色/物品破坏粒子效果。

```json
"particles": {
  "item": true,
  "colors": [255, 0, 255]
}
```

本模组提供了多种命令执行源供你选择，包括 `andromeda:item`（投掷物），`andromeda:user`（投掷者，如果存在），`andromeda:server`（服务端），`andromeda:hit_entity`（受击实体）和 `andromeda:hit_block`（受击方块）。

```json
"commands": [
  {
    "type": "andromeda:hit_entity",
    "commands": [
      "/effect give @s minecraft:blindness 5 0 true",
      "/effect give @s minecraft:glowing 5 0 true"
    ]
  }
]
```

此外，也有稍微复杂一些的“逻辑”类命令，比如 `andromeda:random`（随机），`andromeda:defaulted`（默认），`andromeda:all_of`（全部） 和 `andromeda:any_of`（任一）。

`andromeda:random`（随机）：

这种类型可以按权重（weight）和轮次（roll，默认为 1）执行命令。

```json
{
  "type": "andromeda:random",
  "rolls": 3,
  "commands": [
    {
      "weight": 3,
      "data": {
        "type": "andromeda:item",
        "particles": {
          "item": true,
          "colors": [5, 36, 99]
        }
      }
    },
    {
      "weight": 1,
      "data": {
        "type": "andromeda:item",
        "particles": {
          "item": true,
          "colors": [0, 255, 0]
        }
      }
    }
  ]
}
```

`andromeda:defaulted`（默认）:

这一类型提供了后备功能。如果**所有**在 `commands`（命令）中的命令都没能执行（未通过条件），将使用 `default`（默认）中的命令。

```json
{
  "type": "andromeda:defaulted",
  "default": [
    {
      "type": "andromeda:hit_block",
      "particles": {
        "item": true,
        "colors": [121, 28, 39]
      }
    }
  ],
  "commands": [
    {
      "type": "andromeda:hit_block",
      "condition": {
        "condition": "minecraft:block_state_property",
        "block": "minecraft:stone"
      },
      "particles": {
        "item": true,
        "colors": [5, 5, 8]
      }
    }
  ]
}
```

`andromeda:all_of`（全部）和 `andromeda:any_of`（任一）:

它们与 `andromeda:defaulted` 类似，但它们里面的 `default` 应该写为 `then`。

***

所有命令的种类都可以相互嵌套，所以我们可以有：“defaulted（默认）”回退到“all of（所有）”再到“any of（任一）”再到“defaulted（默认）”再到带“defaulted（默认）”的“random（随机）”代码块。

你可以在这里找到一些例子：[gist.github.com](https://gist.github.com/melontini/5a516acfe108712804319055085bb355)

注意，事件/条件/命令的 `type（种类）` 无效时，不会报错！我也不知道为什么。

***

杂类选项：

| 选项  |   |
|---|---|
| `complement`  |  禁用将阻止该物品的所有非投掷行为 |
| `cooldown`  |  为你的物品设置投掷冷却（刻） |
| `disabled`  |  阻止该物品的所有行为 |
| `override_vanilla`  |  启用将阻止该物品的所有原版行为。不推荐用于方块物品，因为你会无法放置它们 |

:::

***
### 流浪商人号角 🐐（0.4+）

每两天，你都能使用“歌颂”号角来召唤一位流浪商人。

值得注意的是，流浪商人仍然会自然生成。

你可以通过禁用 \"doTraderSpawning\" 的游戏规则，来禁用流浪商人自然生成。
