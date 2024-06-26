---
lang: zh-CN
title: 世界
description: 世界相关调整
---

# 世界

## 意外之喜 💎 <Badge type="tip" text="^1.13.0" />

向洞穴内添加了装有战利品的木桶！

<img style="display: block; margin-left: auto; margin-right: auto;" src="/images/world_loot_barrels.webp" width="520">

木桶的默认战利品与村庄铁匠铺的相同，你可以通过数据包修改战利品表！

## 湿润机制调整 💦<Badge type="tip" text="^1.4.0" />

让你更够修改耕地的湿润范围，就这样。

## 自种植作物 🌾<Badge type="tip" text="^0.6.0" />

植物会尝试在一段时间后种植自身。在 0.7.0 之后，你可以将植物加入到白名单或黑名单中。

灵感源于 HephaestusDev 创作的 [TinyTweaks](https://www.curseforge.com/minecraft/mc-mods/tinytweaks)

## 自掉落蜂巢 🐝<Badge type="tip" text="^0.1" />

蜂巢会随机地从树上掉下来，其中的蜜蜂则会无家可归，并将怒火宣泄到靠近的玩家身上。

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_fall.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

根据我的测试，通常需要 0-2 天，蜂巢才能自然掉落。

朝蜂巢射箭也能使之掉落！

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bee_fall_arrow.webm" type="video/mp4">
  你的浏览器不支持视频标签。
</video>

## 基于温度的作物生长速度 🌡️<Badge type="tip" text="^0.1" />

启用此特性时，植物只会在它们适应的温度中生长，比如说，仙人掌只会在沙漠、热带草原，以及下界中生长。

这一选项是基于数据包的！你可以在[这里](https://github.com/melontini/andromeda/blob/1.19-fabric/src/main/resources/data/andromeda/andromeda/crop_temperatures/crops/minecraft_wheat.json)查看例子，以及更多信息。

## 凶猛火势 🔥<Badge type="danger" text="过时特性" />  <Badge type="tip" text="^0.2.1" />

使得火势能够蔓延得更快更广。
