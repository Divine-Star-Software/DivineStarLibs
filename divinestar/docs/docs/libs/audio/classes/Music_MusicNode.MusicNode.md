---
id: "Music_MusicNode.MusicNode"
title: "Class: MusicNode"
sidebar_label: "MusicNode"
custom_edit_url: null
---

[Music/MusicNode](../modules/Music_MusicNode.md).MusicNode

## Constructors

### constructor

• **new MusicNode**(`data`): [`MusicNode`](Music_MusicNode.MusicNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`MusicTrackData`](../modules/Meta_AudioTypes.md#musictrackdata) |

#### Returns

[`MusicNode`](Music_MusicNode.MusicNode.md)

#### Defined in

[Music/MusicNode.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L10)

## Properties

### audio

• **audio**: ``null`` \| `HTMLAudioElement` = `null`

#### Defined in

[Music/MusicNode.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L7)

___

### audioNode

• **audioNode**: ``null`` \| `MediaElementAudioSourceNode` = `null`

#### Defined in

[Music/MusicNode.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L6)

___

### data

• **data**: [`MusicTrackData`](../modules/Meta_AudioTypes.md#musictrackdata)

#### Defined in

[Music/MusicNode.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L10)

___

### master

• **master**: ``null`` \| `GainNode` = `null`

#### Defined in

[Music/MusicNode.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L8)

## Methods

### fadeIn

▸ **fadeIn**(`interval`, `steps`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |
| `steps` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Music/MusicNode.ts:35](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L35)

___

### fadeOut

▸ **fadeOut**(`interval`, `steps`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |
| `steps` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Music/MusicNode.ts:69](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L69)

___

### load

▸ **load**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Music/MusicNode.ts:120](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L120)

___

### onEnd

▸ **onEnd**(`func`): [`MusicNode`](Music_MusicNode.MusicNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any` |

#### Returns

[`MusicNode`](Music_MusicNode.MusicNode.md)

#### Defined in

[Music/MusicNode.ts:96](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L96)

___

### onPause

▸ **onPause**(`func`): [`MusicNode`](Music_MusicNode.MusicNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any` |

#### Returns

[`MusicNode`](Music_MusicNode.MusicNode.md)

#### Defined in

[Music/MusicNode.ts:101](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L101)

___

### play

▸ **play**(`load?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `load` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Music/MusicNode.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L12)

___

### puase

▸ **puase**(): `undefined` \| [`MusicNode`](Music_MusicNode.MusicNode.md)

#### Returns

`undefined` \| [`MusicNode`](Music_MusicNode.MusicNode.md)

#### Defined in

[Music/MusicNode.ts:107](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L107)

___

### unlLoad

▸ **unlLoad**(): `void`

#### Returns

`void`

#### Defined in

[Music/MusicNode.ts:113](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicNode.ts#L113)
