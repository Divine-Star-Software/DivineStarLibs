---
id: "Meta_EffectTypes"
title: "Module: Meta/EffectTypes"
sidebar_label: "Meta/EffectTypes"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### BuiltInReverbList

Ƭ **BuiltInReverbList**: ``"Vaneev/Block Inside"`` \| ``"Vaneev/Bottle Hall"`` \| ``"Vaneev/Cement Blocks 1"`` \| ``"Vaneev/Cement Blocks 2"`` \| ``"Vaneev/Chateau de Logne, Outside"`` \| ``"Vaneev/Conic Long Echo Hall"`` \| ``"Vaneev/Deep Space"`` \| ``"Vaneev/Derlon Sanctuary"`` \| ``"Vaneev/Direct Cabinet N1"`` \| ``"Vaneev/Direct Cabinet N2"`` \| ``"Vaneev/Direct Cabinet N3"`` \| ``"Vaneev/Direct Cabinet N4"`` \| ``"Vaneev/Five Columns Long"`` \| ``"Vaneev/Five Columns"`` \| ``"Vaneev/French 18th Century Salon"`` \| ``"Vaneev/Going Home"`` \| ``"Vaneev/Greek 7 Echo Hall"`` \| ``"Vaneev/Highly Damped Large Room"`` \| ``"Vaneev/In The Silo Revised"`` \| ``"Vaneev/In The Silo"`` \| ``"Vaneev/Large Bottle Hall"`` \| ``"Vaneev/Large Long Echo Hall"`` \| ``"Vaneev/Large Wide Echo Hall"`` \| ``"Vaneev/Masonic Lodge"`` \| ``"Vaneev/Musikvereinsaal"`` \| ``"Vaneev/Narrow Bumpy Space"`` \| ``"Vaneev/Nice Drum Room"`` \| ``"Vaneev/On a Star"`` \| ``"Vaneev/Parking Garage"`` \| ``"Vaneev/Rays"`` \| ``"Vaneev/Right Glass Triangle"`` \| ``"Vaneev/Ruby Room"`` \| ``"Vaneev/Scala Milan Opera Hall"`` \| ``"Vaneev/Small Drum Room"`` \| ``"Vaneev/Small Prehistoric Cave"`` \| ``"Vaneev/St Nicolaes Church"`` \| ``"Vaneev/Trig Room"`` \| ``"Vaneev/Vocal Duo"``

#### Defined in

[Meta/EffectTypes.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/EffectTypes.ts#L1)

___

### EffectData

Ƭ **EffectData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | \{ `time`: `number`  } |
| `delay.time` | `number` |
| `filter?` | {} |
| `reverb?` | \{ `builtIn?`: [`BuiltInReverbList`](Meta_EffectTypes.md#builtinreverblist) ; `custom?`: `string` ; `level`: `number`  } |
| `reverb.builtIn?` | [`BuiltInReverbList`](Meta_EffectTypes.md#builtinreverblist) |
| `reverb.custom?` | `string` |
| `reverb.level` | `number` |

#### Defined in

[Meta/EffectTypes.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/EffectTypes.ts#L41)
