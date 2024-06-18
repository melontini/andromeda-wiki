---
lang: zh-CN
title: 杂项
description: 其它调整和非调整
---

# 杂项

## 微存储 📦<Badge type="warning" text="实验性" /> <Badge type="tip" text="^1.7.0" />

允许玩家在背包的 2x2 合成位存放至多四组物品。

默认情况下，这一选项与 `keepInventory` 规则保持一致。但也可以单独配置，使它们能够保留死亡物品。

## 自动配方成就生成 📗<Badge type="tip" text="^0.4.5" />

> 与 [RBIP](https://modrinth.com/mod/rbip) 完美兼容

默认情况下，解锁配方需要凑齐配方中的所有物品。但你可以根据个人偏好，使它在只获得其中一个物品的情况下被解锁。此外，你还能禁用部分 ID 和关键字的物品的自动配方成就生成。默认禁用 minecraft（原版），andromeda（本模组）以及 extshape（拓展方块形状）。

此特性有下列配置项：

* 万事俱备：启用后，玩家需要获得配方中的所有物品，来解锁配方书中的对应配方。

* 无视未在配方书中解锁的配方：不为配方书中隐藏的配方生成成就。

* 关键字黑名单：让你能够通过指定关键字（冒号前字符的一部分）来禁用其自动配方成就生成。

* ID 黑名单：此选项让你能够通过指定配方 ID 来禁用其自动配方成就生成。

## 小麻烦 💥<Badge type="tip" text="^0.4" />

使玩家在受到任何伤害后爆炸。祝玩得开心 ❤️

## 翻译更新 🔁<Badge type="tip" text="^0.9.0" />

尝试从 Github 下载最新版的翻译文件。

这会下载你的所选语言，以及英语（美国）。

## 上传错误报告 📑

如果在栈跟踪中发现了“andromeda”，则上传客户端错误报告。

上传的数据：
- 环境（如客户端），
- 系统版本（如 Windows 11），
- 加载器（如 Fabric）
- Java（如 Oracle Java 17），
- Bootstrap 状态（如 发现状态），
- 部分已加载的模组。

::: tip 提示
数据将被上传到欧洲的 Mixpanel 服务器。与分析数据不同，这些数据并不会有独特的 ID 作为标识。所有的数据都会以崩溃 UUID 的形式上传(`be4db047-16df-4e41-9121-f1e87618ddea`)。
:::

## 配置表达式 👩‍💻 <Badge type="tip" text="^1.12.0" />
[![需要命令官模组](https://raw.githubusercontent.com/constellation-mc/commander/documentation/docs/public/badges/requires/compacter_vector.svg)](https://modrinth.com/mod/cmd)

在 1.12.0 新引入的配置系统中，配置文件支持使用命令官模组的表达式。大多情况下，只有 `game`（游戏类）配置支持表达式。

::: warning 注意！

虽然所有表达式的字段都接受浮点数，但仍存在小数点后数字被舍去的情况（比如 `4.0` 被截断成 `4`）！

:::

这一特性使你能够用表达式替换布尔型数据（是/否）和数值。示例如下：

```json
{
  "bootstrap": {
    "enabled": true,
    "scope": "DIMENSION"
  },
  "game": {
    "modifier": "if(level.isRaining, 0.7, 1)",
    "furnaceModifier": "if(level.isRaining, 0.7, 1)",
    "additionalFurnaceFuel": 0.0,
    "available": true
  }
}
```


## 数据包配置 🧩 <Badge type="tip" text="^1.4.0" />

和用数据包修改配方类似，只是在这里，要改的不是配方 ID，而是本模组的特性 ID。比如：`config/andromeda/world/moist_control.json` 到数据包里配置，就是 `data/{数据包名称}/andromeda/scoped_config/world/moist_control.json`。原理是部分覆盖。

只有 `游戏内` 配置可以通过数据包修改！

下面是修改耕地湿范围的例子：

```json
{
  "minecraft:the_nether": {
    "customMoisture": 0
  },
  "minecraft:the_end": {
    "customMoisture": 1
  },
  "minecraft:overworld": {
    "customMoisture": 3
  }
}
```

1.4.2 版本引入了 `andromeda:default`。这是一个特殊的键值，应用于所有维度的特定配置前。例子如下：

```json
{
  "andromeda:default": {
    "available": false
  },
  "minecraft:the_end": {
    "available": "level.storage.custom_condition"
  }
}
```

所有“存档”和“维度”分化的配置都可以通过 `/reload` 命令重载！

## ??? <Badge type="tip" text="^0.4" />
