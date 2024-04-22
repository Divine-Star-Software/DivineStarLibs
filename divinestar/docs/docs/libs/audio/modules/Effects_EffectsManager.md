---
id: "Effects_EffectsManager"
title: "Module: Effects/EffectsManager"
sidebar_label: "Effects/EffectsManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### EffectsManager

• `Const` **EffectsManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `builtInReverbBuffers` | `Record`\<`string`, `AudioBuffer`\> |
| `customReverbBuffers` | `Record`\<`string`, `AudioBuffer`\> |
| `_getReverbBuffer` | (`effectsData`: [`EffectData`](Meta_EffectTypes.md#effectdata)) => `undefined` \| `AudioBuffer` |
| `getEffectsNode` | (`effectsData`: [`EffectData`](Meta_EffectTypes.md#effectdata), `source`: `AudioNode`, `master`: `GainNode`, `nodes`: `AudioNode`[]) => `void` |
| `preloadReverbBuffers` | (`builtInReverbs`: [`BuiltInReverbList`](Meta_EffectTypes.md#builtinreverblist)[], `customReverbs?`: `string`[]) => `Promise`\<`void`\> |

#### Defined in

[Effects/EffectsManager.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/Effects/EffectsManager.ts#L4)
