---
id: "Music_MusicManager"
title: "Module: Music/MusicManager"
sidebar_label: "Music/MusicManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### MusicManager

• `Const` **MusicManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_nodes` | `Map`\<`string`, [`MusicNode`](../classes/Music_MusicNode.MusicNode.md)\> |
| `getMusicNode` | (`musicId`: `string`) => [`MusicNode`](../classes/Music_MusicNode.MusicNode.md) |
| `play` | (`trackId`: `string`) => [`MusicNode`](../classes/Music_MusicNode.MusicNode.md) |
| `registerMusicTracks` | (`data`: [`MusicTrackData`](Meta_AudioTypes.md#musictrackdata)[]) => `void` |
| `stop` | (`trackId`: `string`) => `void` |

#### Defined in

[Music/MusicManager.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Music/MusicManager.ts#L3)
