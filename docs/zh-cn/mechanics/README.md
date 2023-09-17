---
lang: zh-CN
title: 机制
description: 一些机制，还有一些数不上名的小玩意
---

### [实验性] 友好送礼 🎁 （0.9.0+）

使玩家能够通过给村民送礼来恢复一定的声望值！

这一选项下有四个新增的标签：
* `andromeda:villager_gifts/major_positive` 下的物品将获得15点声望
* `andromeda:villager_gifts/minor_positive` 下的物品将获得3点声望
* `andromeda:villager_gifts/major_negative` 下的物品将扣除15点声望
* `andromeda:villager_gifts/minor_negative` 下的物品将扣除3点声望

你可以在这里 [andromeda/tags/items/villager_gifts/](https://github.com/melontini/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts) 查看礼品预设。

### 末地龙战调整 🐉 （0.6.0+）

#### 1. 末影水晶再生成

使末影水晶能够在大约 1.6-3 分钟后再生成。这会大幅提升战斗的难度，当然，也更恼人了一点点。

#### 2. 集群强化

根据最大在末地的玩家数量提升末影龙生命值。

计算公式：`Math.floor((Math.sqrt(500 * i)) * 10)`，i为最大玩家数量。

#### 3. 更短的水晶治疗距离

将水晶的治疗距离由32降低至24格。

#### 4. 更短的尖刺

让新生成的尖刺更短。

***
### 可投掷物品 🥏 （0.5.0+）

使一些本来可能用不上*的物品变得可投掷

::: 0.5.0 版本中，可投掷的物品

***

* 骨粉
* 墨囊和发光墨囊
* 所有染料
* 普通砖头和下界砖
* 火焰弹
* 火药

欢迎提供新点子！

:::


<details>
  <summary>添加自定义行为</summary>

***

目前有两种增加自定义行为的方法：数据包和 KubeJS

数据包：

::: 展开…
与 KubeJS 不同，数据包有诸多限制，并且只能执行命令与生成彩色粒子（比如墨囊和发光墨囊）。

所有自定义行为需要和 `recipes`, `tags`, `loot_tables` 一块，放置在数据包的 `am_item_throw_behavior` 文件夹下。自定义行为的具体文件名可以任意取定。

例子：

```json
{
  "item_id": "minecraft:nether_star",
  "on_block_hit": {
    "hit_block_commands": [
      "setblock ~ ~ ~ stone"
    ]
  },
  "on_entity_hit": {
    "hit_entity_commands": [
      "kill @s"
    ]
  },
  "on_any_hit": {
    "item_commands": [
      "/summon lightning_bolt ~ ~ ~"
    ]
  },
  "complement": false,
  "spawn_colored_particles": true,
  "particle_colors": {
    "red": 255,
    "green": 255,
    "blue": 255
  }
}
```
> 这段代码的意思是，当这个物品击中了方块，会在其接触面放置一块石头；当这个物品击中了实体，会直接杀死之；当这个物品击中了任意东西，都会在击中处生成一道闪电以及白色的粒子效果。

如你所见，语法很简单。

`item_id` 可以是一个物品，也可以是一长串的物品 ID。

一共有 4 种和事件以及 5 种命令执行源：

执行源：

1. `item_commands` 由被投掷物品在消失前的一瞬间执行。
2. `user_commands` 由物品的投掷者执行。
3. `server_commands` 从服务端执行。顺带一提，这个不太实用。
4. `hit_entity_commands` 只在 `on_entity_hit` 事件中有效。由被丢中的实体执行。
5. `hit_block_commands` 只在 `on_block_hit` 事件中有效。从服务端，在方块的位置上执行。

事件：

1. `on_entity_hit` 当投掷物击中实体时。这一事件只支持 hit_entity_commands。
2. `on_block_hit` 当投掷物击中方块时。
3. `on_miss` 当投掷物错过目标时。
4. `on_any_hit` 包含以上所有情况。永远会在上述事件执行后执行。

这其实也是命令执行的方式。

其他选项：

`override_vanilla`：若为 true，阻止执行**所有**原版的行为。因为这会导致方块无法被放置，它永远不应该被用到方块类物品上。

`complement`：若为 false，自定义的行为将覆盖它原本的行为，若为 true，则将在它执行完原本的行为前执行自定义行为。

`cooldown`：为物品设置自定义的冷却时间。

`spawn_item_particles`：若为 true，生成物品被破坏的粒子效果。

`spawn_colored_particles`：若为 true，将生成彩色的粒子，也就是染料和墨囊的同款效果。

`particle_colors`：RGB格式，粒子效果的颜色。
:::

KubeJS：

::: 展开…

你可以通过 KubeJS 中的 reflection 实现自定义行为

例子：

在 KJS 6 下运行

```javascript
const ItemBehaviorManager = Java.loadClass("me.melontini.tweaks.util.ItemBehaviorManager") 
const ItemBehaviorAdder = Java.loadClass("me.melontini.tweaks.util.ItemBehaviorAdder") //你可以取一个更好的名字

StartupEvents.postInit(event => {
	ItemBehaviorManager.addBehavior(Item.of("cobblestone") , (stack, flyingItemEntity, world, user, hitResult) => {
             if (!world.isClientSide()) {//让几乎所有东西在非客户端上执行
                //做点啥
		ItemBehaviorAdder.sendParticlePacketInt(flyingItemEntity, flyingItemEntity.position(), stack, true, 255, 255, 255)
	     }
	})
        // 你也可以在主体中添加
	ItemBehaviorManager.addBehavior((stack, flyingItemEntity, world, user, hitResult) => {
             if (!world.isClientSide()) {//让几乎所有东西在非客户端上执行
                //做点啥
		ItemBehaviorAdder.sendParticlePacketInt(flyingItemEntity, flyingItemEntity.position(), stack, true, 255, 255, 255)
	     }
	}, Item.of("cobblestone"), Item.of("tuff"), Item.of("dripstone_block"))
        // 自定义冷却
	ItemBehaviorManager.addCustomCooldown(Item.of("cobblestone"), 0);
	ItemBehaviorManager.replaceCustomCooldown(Item.of("cobblestone"), 5);
        // 只触发自定义行为
        ItemBehaviorManager.overrideVanilla(Item.of("cobblestone"));
})
```

:::

</details>

***
### 流浪商人号角 🐐 （0.4+）

每两天，你都能使用这个号角来召唤一位流浪商人。

值得注意的是，流浪商人仍然会自然生成。

你可以通过禁用 \"doTraderSpawning\" 的游戏规则来禁用流浪商人自然生成。


