---
id: "Channels_AudioChannel.AudioChannel"
title: "Class: AudioChannel"
sidebar_label: "AudioChannel"
custom_edit_url: null
---

[Channels/AudioChannel](../modules/Channels_AudioChannel.md).AudioChannel

## Constructors

### constructor

• **new AudioChannel**(`data`): [`AudioChannel`](Channels_AudioChannel.AudioChannel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AudioChannelData`](../modules/Meta_AudioChannelsTypes.md#audiochanneldata) |

#### Returns

[`AudioChannel`](Channels_AudioChannel.AudioChannel.md)

#### Defined in

[Channels/AudioChannel.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L20)

## Properties

### \_level

• **\_level**: `number`

#### Defined in

[Channels/AudioChannel.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L12)

___

### \_nodes

• **\_nodes**: `Map`\<`GainNode`, `number`\>

#### Defined in

[Channels/AudioChannel.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L10)

___

### data

• **data**: [`AudioChannelData`](../modules/Meta_AudioChannelsTypes.md#audiochanneldata)

#### Defined in

[Channels/AudioChannel.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L20)

## Accessors

### level

• `get` **level**(): `number`

#### Returns

`number`

#### Defined in

[Channels/AudioChannel.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L13)

• `set` **level**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[Channels/AudioChannel.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L16)

## Methods

### \_update

▸ **_update**(): `void`

#### Returns

`void`

#### Defined in

[Channels/AudioChannel.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L24)

___

### add

▸ **add**(`gain`, `defaultLevel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gain` | `GainNode` |
| `defaultLevel` | `number` |

#### Returns

`void`

#### Defined in

[Channels/AudioChannel.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L30)

___

### getNodeLevel

▸ **getNodeLevel**(`defaultLevel`, `channelLevel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultLevel` | `number` |
| `channelLevel` | `number` |

#### Returns

`number`

#### Defined in

[Channels/AudioChannel.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannel.ts#L6)
