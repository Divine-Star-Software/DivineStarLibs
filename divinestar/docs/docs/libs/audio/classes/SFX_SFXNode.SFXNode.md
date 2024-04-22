---
id: "SFX_SFXNode.SFXNode"
title: "Class: SFXNode"
sidebar_label: "SFXNode"
custom_edit_url: null
---

[SFX/SFXNode](../modules/SFX_SFXNode.md).SFXNode

## Constructors

### constructor

• **new SFXNode**(`channel`, `data`, `buffer`): [`SFXNode`](SFX_SFXNode.SFXNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`AudioChannel`](Channels_AudioChannel.AudioChannel.md) |
| `data` | [`SFXData`](../modules/Meta_AudioTypes.md#sfxdata) |
| `buffer` | `AudioBuffer` |

#### Returns

[`SFXNode`](SFX_SFXNode.SFXNode.md)

#### Defined in

[SFX/SFXNode.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L17)

## Properties

### \_sfxPlayCount

• **\_sfxPlayCount**: `number` = `0`

#### Defined in

[SFX/SFXNode.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L15)

___

### buffer

• **buffer**: `AudioBuffer`

#### Defined in

[SFX/SFXNode.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L20)

___

### channel

• **channel**: [`AudioChannel`](Channels_AudioChannel.AudioChannel.md)

#### Defined in

[SFX/SFXNode.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L18)

___

### data

• **data**: [`SFXData`](../modules/Meta_AudioTypes.md#sfxdata)

#### Defined in

[SFX/SFXNode.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L19)

## Methods

### \_getPanner

▸ **_getPanner**(`data`, `options?`): ``false`` \| `PannerNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`SFXData`](../modules/Meta_AudioTypes.md#sfxdata) |
| `options?` | [`SFXPlayOptions`](../modules/Meta_AudioTypes.md#sfxplayoptions) |

#### Returns

``false`` \| `PannerNode`

#### Defined in

[SFX/SFXNode.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L30)

___

### getOptions

▸ **getOptions**(): ``false`` \| [`SFXPlayOptions`](../modules/Meta_AudioTypes.md#sfxplayoptions)

#### Returns

``false`` \| [`SFXPlayOptions`](../modules/Meta_AudioTypes.md#sfxplayoptions)

#### Defined in

[SFX/SFXNode.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L23)

___

### play

▸ **play**(`options?`): `undefined` \| `SFXInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SFXPlayOptions`](../modules/Meta_AudioTypes.md#sfxplayoptions) |

#### Returns

`undefined` \| `SFXInstance`

#### Defined in

[SFX/SFXNode.ts:54](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXNode.ts#L54)
