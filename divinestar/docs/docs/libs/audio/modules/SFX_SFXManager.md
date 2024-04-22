---
id: "SFX_SFXManager"
title: "Module: SFX/SFXManager"
sidebar_label: "SFX/SFXManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SFXMAnager

• `Const` **SFXMAnager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_sfxChannels` | `Record`\<`string`, `GainNode`\> |
| `_sfxCount` | `number` |
| `_sfxData` | `Record`\<`string`, [`SFXData`](Meta_AudioTypes.md#sfxdata)\> |
| `_sfxMap` | `Record`\<`number`, `string`\> |
| `_sfxNodes` | `Map`\<`string`, [`SFXNode`](../classes/SFX_SFXNode.SFXNode.md)\> |
| `_sfxPalette` | `Record`\<`string`, `number`\> |
| `_sfxPlayCount` | `Map`\<`string` \| `number`, `number`\> |
| `createSFXNodes` | () => `Promise`\<`void`\> |
| `getSFXNode` | (`sfxId`: `string` \| `number`) => [`SFXNode`](../classes/SFX_SFXNode.SFXNode.md) |
| `play` | (`sfxId`: `string` \| `number`, `options?`: [`SFXPlayOptions`](Meta_AudioTypes.md#sfxplayoptions)) => `void` |
| `registerSFX` | (`sfxData`: [`SFXData`](Meta_AudioTypes.md#sfxdata)[]) => `void` |

#### Defined in

[SFX/SFXManager.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/SFX/SFXManager.ts#L5)
