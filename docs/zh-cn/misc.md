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

## 分化配置 🧩<Badge type="tip" text="^1.4.0" />

::: warning 实验性功能！

这项特性目前仍处于开发阶段，可能有些不稳定！

对于一般玩家来说，这可能用处不大，但对于整合包制作者，这会是个有趣的小玩意儿。

:::

这一特性使你能够对配置项进行更细的应用。特性可以有以下分化：

- 全局（`GLOBAL`）：主配置文件应用于所有存档。
- 存档（`WORLD`）：每个存档都有专属的配置文件，路径为：`{存档文件夹}/config/andromeda`.
- 维度（`DIMENSION`）：每个存档的每个维度，都有专属的配置文件。路径为：`{维度文件夹}/world_config/andromeda`。作为参考：下界是 `DIM-1`，末地是 `DIM1`，而主世界是根文件夹，模组维度可能有不同的命名办法。

不是所有配置都可以被分化。比如说，所有客户端特性都只能是全局的。无效的分化配置将被记录在游戏日志中，并在游戏重启后复位。
存档专属配置文件生成后，它将独立于主配置文件（除了这个特性本身的开关）。此外，有一些配置项会无视分化配置。

有一例外：维度配置仍然可以通过数据包修改。简单看看吧。

和用数据包修改配方类似，只是在这里，要改的不是配方 ID，而是本模组的特性 ID。比如：`config/andromeda/world/moist_control.json` 到数据包里配置，就是 `data/{数据包名称}/andromeda/scoped_config/world/moist_control.json`。原理是部分覆盖。

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
    "enabled": false
  },
  "minecraft:the_end": {
    "enabled": true
  }
}
```

所有“存档”和“维度”分化的配置都可以通过 `/reload` 命令重载！

觉得数据包太麻烦，或是干脆不想用它们？当然，你还可以用 KubeJS！

本模组还添加了一些与存档（`level`）相关的，实用的方法，来让开发变得更简单！

- `am$get`：返回当前的配置值，无论是全局的，存档的，还是维度的。
- `am$isReady`：检测配置文件是否被载入。
- `am$save`：保存当前配置至文件。无论是全局的，存档的，还是维度的。

无论存档还是维度，请确保你修改的配置文件是可以被分化的！

下面代码实现的功能是：每两秒（40 刻）改变所有维度的耕地湿润范围。注意，这是服务端脚本（server script）！

```js
LevelEvents.tick(e => { //为所有维度/存档执行代码
	  let level = e.getLevel(); //获取事件存档

    if (level.am$isReady() && level.getTime() % 40 == 0) { //每 40 刻，在保证配置文件被加载的情况下，修改配置项
        let i = level.getRandom().nextInt(7);//在 [0, 7) 的区间生成随机数
        level.am$get("world/moist_control").customMoisture = i; //设置你想要更改的值
        console.log(level.getDimensionKey(), i) //将当前维度与值记录到日志文件中
    }
})
```

不要忘记保存更改！

```js
LevelEvents.unloaded(e => { //关闭存档时运行
	  let level = e.getLevel();

    if (level.am$isReady()) {
        level.am$save("world/moist_control");
    }
})
```

可能无限！

## ??? <Badge type="tip" text="^0.4" />
