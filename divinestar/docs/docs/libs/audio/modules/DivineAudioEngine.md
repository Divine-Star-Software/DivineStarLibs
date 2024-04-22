---
id: "DivineAudioEngine"
title: "Module: DivineAudioEngine"
sidebar_label: "DivineAudioEngine"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### DivineAudioEngine

Ƭ **DivineAudioEngine**: typeof [`DAE`](DivineAudioEngine.md#dae)

#### Defined in

[DivineAudioEngine.ts:29](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/DivineAudioEngine.ts#L29)

## Variables

### DAE

• `Const` **DAE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_initalized` | `boolean` |
| `api` | \{ `_dissconectEvent`: `Event` ; `compression`: `DynamicsCompressorNode` = mainCompression; `compressionEnabled`: `boolean` = true; `context`: `AudioContext` = context; `main`: `GainNode` = mainChanel; `pannerNodeDefaults`: `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\> ; `$INIT`: () => `void` ; `connectToMain`: (`node`: `AudioNode`) => `void` ; `createAudioBufferSource`: (`buffer`: `AudioBuffer`) => `AudioBufferSourceNode` ; `createAudioElementNode`: (`path`: `string`) => \{ `audio`: `HTMLAudioElement` ; `audioNode`: `MediaElementAudioSourceNode`  } ; `createBiQuadFilterNode`: (`data`: [`BiquadFilterNodeData`](Meta_APITypes.md#biquadfilternodedata)) => `BiquadFilterNode` ; `createConvolver`: (`buffer`: `AudioBuffer`) => `ConvolverNode` ; `createDelayNode`: (`delayTime`: `number`) => `DelayNode` ; `createDynamicCompressor`: (`data`: [`DynamicCompressorData`](Meta_APITypes.md#dynamiccompressordata)) => `void` ; `createGain`: (`value`: `number`) => `GainNode` ; `createPannerNode`: (`nodeData`: `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\>) => `PannerNode` ; `createWaveShapeNode`: (`curve`: `Float32Array`, `oversample?`: `OverSampleType`) => `void` ; `creteAudioBuffer`: (`data`: `Uint8Array`) => `Promise`\<`AudioBuffer`\> ; `loadAudioBuffer`: (`path`: `string`) => `Promise`\<`AudioBuffer`\>  } |
| `api._dissconectEvent` | `Event` |
| `api.compression` | `DynamicsCompressorNode` |
| `api.compressionEnabled` | `boolean` |
| `api.context` | `AudioContext` |
| `api.main` | `GainNode` |
| `api.pannerNodeDefaults` | `Partial`\<[`PannerNodeData`](Meta_APITypes.md#pannernodedata)\> |
| `api.$INIT` | [object Object] |
| `api.connectToMain` | [object Object] |
| `api.createAudioBufferSource` | [object Object] |
| `api.createAudioElementNode` | [object Object] |
| `api.createBiQuadFilterNode` | [object Object] |
| `api.createConvolver` | [object Object] |
| `api.createDelayNode` | [object Object] |
| `api.createDynamicCompressor` | [object Object] |
| `api.createGain` | [object Object] |
| `api.createPannerNode` | [object Object] |
| `api.createWaveShapeNode` | [object Object] |
| `api.creteAudioBuffer` | [object Object] |
| `api.loadAudioBuffer` | [object Object] |
| `channels` | \{ `_channels`: `Map`\<`string`, [`AudioChannel`](../classes/Channels_AudioChannel.AudioChannel.md)\> ; `masterLevel`: `number` = 1; `getChannel`: (`id`: `string`) => [`AudioChannel`](../classes/Channels_AudioChannel.AudioChannel.md) ; `registerChannels`: (`channels`: [`AudioChannelData`](Meta_AudioChannelsTypes.md#audiochanneldata)[]) => `void` ; `setMasterLevel`: (`level`: `number`) => `void`  } |
| `channels._channels` | `Map`\<`string`, [`AudioChannel`](../classes/Channels_AudioChannel.AudioChannel.md)\> |
| `channels.masterLevel` | `number` |
| `channels.getChannel` | [object Object] |
| `channels.registerChannels` | [object Object] |
| `channels.setMasterLevel` | [object Object] |
| `constants` | \{ `customEffectsBaesPath`: `string` = "DAE/custom"; `effectsBaesPath`: `string` = "DAE"; `getBuiltInReverbPath`: (`id`: `string`) => `string` ; `getCustomReverbPath`: (`id`: `string`) => `string` ; `setCustomEffectsBaePath`: (`path`: `string`) => `void` ; `setEffectsBaePath`: (`path`: `string`) => `void`  } |
| `constants.customEffectsBaesPath` | `string` |
| `constants.effectsBaesPath` | `string` |
| `constants.getBuiltInReverbPath` | [object Object] |
| `constants.getCustomReverbPath` | [object Object] |
| `constants.setCustomEffectsBaePath` | [object Object] |
| `constants.setEffectsBaePath` | [object Object] |
| `effects` | \{ `builtInReverbBuffers`: `Record`\<`string`, `AudioBuffer`\> ; `customReverbBuffers`: `Record`\<`string`, `AudioBuffer`\> ; `_getReverbBuffer`: (`effectsData`: [`EffectData`](Meta_EffectTypes.md#effectdata)) => `undefined` \| `AudioBuffer` ; `getEffectsNode`: (`effectsData`: [`EffectData`](Meta_EffectTypes.md#effectdata), `source`: `AudioNode`, `master`: `GainNode`, `nodes`: `AudioNode`[]) => `void` ; `preloadReverbBuffers`: (`builtInReverbs`: [`BuiltInReverbList`](Meta_EffectTypes.md#builtinreverblist)[], `customReverbs?`: `string`[]) => `Promise`\<`void`\>  } |
| `effects.builtInReverbBuffers` | `Record`\<`string`, `AudioBuffer`\> |
| `effects.customReverbBuffers` | `Record`\<`string`, `AudioBuffer`\> |
| `effects._getReverbBuffer` | [object Object] |
| `effects.getEffectsNode` | [object Object] |
| `effects.preloadReverbBuffers` | [object Object] |
| `music` | \{ `_nodes`: `Map`\<`string`, [`MusicNode`](../classes/Music_MusicNode.MusicNode.md)\> ; `getMusicNode`: (`musicId`: `string`) => [`MusicNode`](../classes/Music_MusicNode.MusicNode.md) ; `play`: (`trackId`: `string`) => [`MusicNode`](../classes/Music_MusicNode.MusicNode.md) ; `registerMusicTracks`: (`data`: [`MusicTrackData`](Meta_AudioTypes.md#musictrackdata)[]) => `void` ; `stop`: (`trackId`: `string`) => `void`  } |
| `music._nodes` | `Map`\<`string`, [`MusicNode`](../classes/Music_MusicNode.MusicNode.md)\> |
| `music.getMusicNode` | [object Object] |
| `music.play` | [object Object] |
| `music.registerMusicTracks` | [object Object] |
| `music.stop` | [object Object] |
| `sfx` | \{ `_sfxChannels`: `Record`\<`string`, `GainNode`\> ; `_sfxCount`: `number` = 0; `_sfxData`: `Record`\<`string`, [`SFXData`](Meta_AudioTypes.md#sfxdata)\> ; `_sfxMap`: `Record`\<`number`, `string`\> ; `_sfxNodes`: `Map`\<`string`, [`SFXNode`](../classes/SFX_SFXNode.SFXNode.md)\> ; `_sfxPalette`: `Record`\<`string`, `number`\> ; `_sfxPlayCount`: `Map`\<`string` \| `number`, `number`\> ; `createSFXNodes`: () => `Promise`\<`void`\> ; `getSFXNode`: (`sfxId`: `string` \| `number`) => [`SFXNode`](../classes/SFX_SFXNode.SFXNode.md) ; `play`: (`sfxId`: `string` \| `number`, `options?`: [`SFXPlayOptions`](Meta_AudioTypes.md#sfxplayoptions)) => `void` ; `registerSFX`: (`sfxData`: [`SFXData`](Meta_AudioTypes.md#sfxdata)[]) => `void`  } |
| `sfx._sfxChannels` | `Record`\<`string`, `GainNode`\> |
| `sfx._sfxCount` | `number` |
| `sfx._sfxData` | `Record`\<`string`, [`SFXData`](Meta_AudioTypes.md#sfxdata)\> |
| `sfx._sfxMap` | `Record`\<`number`, `string`\> |
| `sfx._sfxNodes` | `Map`\<`string`, [`SFXNode`](../classes/SFX_SFXNode.SFXNode.md)\> |
| `sfx._sfxPalette` | `Record`\<`string`, `number`\> |
| `sfx._sfxPlayCount` | `Map`\<`string` \| `number`, `number`\> |
| `sfx.createSFXNodes` | [object Object] |
| `sfx.getSFXNode` | [object Object] |
| `sfx.play` | [object Object] |
| `sfx.registerSFX` | [object Object] |
| `space` | \{ `model`: ``"equalpower"`` \| ``"HRTF"`` ; `setListenerDirection`: (`x`: `number`, `y`: `number`, `z`: `number`) => `void` ; `setListenerPosition`: (`x`: `number`, `y`: `number`, `z`: `number`) => `void`  } |
| `space.model` | ``"equalpower"`` \| ``"HRTF"`` |
| `space.setListenerDirection` | [object Object] |
| `space.setListenerPosition` | [object Object] |
| `$CREATE` | () => `Promise`\<`void`\> |
| `$INIT` | () => `Promise`\<`void`\> |

#### Defined in

[DivineAudioEngine.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/audio/src/DivineAudioEngine.ts#L9)
