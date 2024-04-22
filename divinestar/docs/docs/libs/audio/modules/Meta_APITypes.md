---
id: "Meta_APITypes"
title: "Module: Meta/APITypes"
sidebar_label: "Meta/APITypes"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### BiquadFilterNodeData

Ƭ **BiquadFilterNodeData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Q?` | `number` |
| `detune?` | `number` |
| `frequency` | `number` |
| `type` | `BiquadFilterType` |

#### Defined in

[Meta/APITypes.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/APITypes.ts#L18)

___

### DynamicCompressorData

Ƭ **DynamicCompressorData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attack?` | `number` |
| `knee?` | `number` |
| `ratio?` | `number` |
| `release?` | `number` |
| `threshold?` | `number` |

#### Defined in

[Meta/APITypes.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/APITypes.ts#L25)

___

### PannerNodeData

Ƭ **PannerNodeData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coneInnerAngle?` | `number` |
| `coneOuterAngle?` | `number` |
| `coneOuterGain?` | `number` |
| `distanceModel?` | ``"linear"`` \| ``"inverse"`` \| ``"exponential"`` |
| `maxDistance?` | `number` |
| `orientationX?` | `number` |
| `orientationY?` | `number` |
| `orientationZ?` | `number` |
| `panningModel?` | ``"equalpower"`` \| ``"HRTF"`` |
| `positionX` | `number` |
| `positionY` | `number` |
| `positionZ` | `number` |
| `refDistance?` | `number` |
| `rolloffFactor?` | `number` |

#### Defined in

[Meta/APITypes.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/APITypes.ts#L1)
