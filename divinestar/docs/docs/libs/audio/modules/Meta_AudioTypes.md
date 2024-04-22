---
id: "Meta_AudioTypes"
title: "Module: Meta/AudioTypes"
sidebar_label: "Meta/AudioTypes"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### EffectNodes

Ƭ **EffectNodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `DelayNode` |
| `master` | `GainNode` |
| `reverb?` | `ConvolverNode` |
| `type` | [`EffectTypes`](Meta_AudioTypes.md#effecttypes) |

#### Defined in

[Meta/AudioTypes.ts:46](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L46)

___

### EffectTypes

Ƭ **EffectTypes**: ``"reverb"`` \| ``"delay"`` \| ``"filter"``

#### Defined in

[Meta/AudioTypes.ts:44](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L44)

___

### MusicTrackData

Ƭ **MusicTrackData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `channel` | ``"main"`` \| `string` |
| `id` | `string` |
| `level` | `number` |
| `loop` | `boolean` |
| `path` | `string` |

#### Defined in

[Meta/AudioTypes.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L4)

___

### MusicTrackNodes

Ƭ **MusicTrackNodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `audio` | `MediaElementAudioSourceNode` |
| `effects` | `Record`\<`string`, [`EffectNodes`](Meta_AudioTypes.md#effectnodes)\> |
| `master` | `GainNode` |

#### Defined in

[Meta/AudioTypes.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L23)

___

### SFXData

Ƭ **SFXData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_3dSoundData?` | `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\> |
| `channel` | ``"sfx"`` \| `string` |
| `id` | `string` |
| `is3dSound?` | `boolean` |
| `loop?` | `boolean` |
| `path?` | `string` |
| `rawData?` | `Uint8Array` |
| `varations?` | [`SFXPlayOptions`](Meta_AudioTypes.md#sfxplayoptions)[] |

#### Defined in

[Meta/AudioTypes.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L12)

___

### SFXPlayOptions

Ƭ **SFXPlayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_3dSoundData?` | `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\> |
| `_3dSoundPosition?` | \{ `x`: `number` ; `y`: `number` ; `z`: `number`  } |
| `_3dSoundPosition.x` | `number` |
| `_3dSoundPosition.y` | `number` |
| `_3dSoundPosition.z` | `number` |
| `dryLevel?` | `number` |
| `effects?` | [`EffectData`](Meta_EffectTypes.md#effectdata) |
| `level?` | `number` |
| `playBackRate?` | `number` |
| `startTime?` | `number` |

#### Defined in

[Meta/AudioTypes.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Meta/AudioTypes.ts#L30)
