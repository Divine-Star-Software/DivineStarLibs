---
id: "Channels_AudioChannelManager"
title: "Module: Channels/AudioChannelManager"
sidebar_label: "Channels/AudioChannelManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### AudioChannelManager

• `Const` **AudioChannelManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_channels` | `Map`\<`string`, [`AudioChannel`](../classes/Channels_AudioChannel.AudioChannel.md)\> |
| `masterLevel` | `number` |
| `getChannel` | (`id`: `string`) => [`AudioChannel`](../classes/Channels_AudioChannel.AudioChannel.md) |
| `registerChannels` | (`channels`: [`AudioChannelData`](Meta_AudioChannelsTypes.md#audiochanneldata)[]) => `void` |
| `setMasterLevel` | (`level`: `number`) => `void` |

#### Defined in

[Channels/AudioChannelManager.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Channels/AudioChannelManager.ts#L4)
