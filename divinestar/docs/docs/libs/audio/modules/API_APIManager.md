---
id: "API_APIManager"
title: "Module: API/APIManager"
sidebar_label: "API/APIManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### APIManager

• `Const` **APIManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_dissconectEvent` | `Event` |
| `compression` | `DynamicsCompressorNode` |
| `compressionEnabled` | `boolean` |
| `context` | `AudioContext` |
| `main` | `GainNode` |
| `pannerNodeDefaults` | `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\> |
| `$INIT` | () => `void` |
| `connectToMain` | (`node`: `AudioNode`) => `void` |
| `createAudioBufferSource` | (`buffer`: `AudioBuffer`) => `AudioBufferSourceNode` |
| `createAudioElementNode` | (`path`: `string`) => \{ `audio`: `HTMLAudioElement` ; `audioNode`: `MediaElementAudioSourceNode`  } |
| `createBiQuadFilterNode` | (`data`: [`BiquadFilterNodeData`](Meta_APITypes.md#biquadfilternodedata)) => `BiquadFilterNode` |
| `createConvolver` | (`buffer`: `AudioBuffer`) => `ConvolverNode` |
| `createDelayNode` | (`delayTime`: `number`) => `DelayNode` |
| `createDynamicCompressor` | (`data`: [`DynamicCompressorData`](Meta_APITypes.md#dynamiccompressordata)) => `void` |
| `createGain` | (`value`: `number`) => `GainNode` |
| `createPannerNode` | (`nodeData`: `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\>) => `PannerNode` |
| `createWaveShapeNode` | (`curve`: `Float32Array`, `oversample?`: `OverSampleType`) => `void` |
| `creteAudioBuffer` | (`data`: `Uint8Array`) => `Promise`\<`AudioBuffer`\> |
| `loadAudioBuffer` | (`path`: `string`) => `Promise`\<`AudioBuffer`\> |

#### Defined in

[API/APIManager.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/API/APIManager.ts#L20)
