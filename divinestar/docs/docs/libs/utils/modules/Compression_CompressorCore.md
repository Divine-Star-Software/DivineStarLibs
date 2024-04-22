---
id: "Compression_CompressorCore"
title: "Module: Compression/CompressorCore"
sidebar_label: "Compression/CompressorCore"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getArray` | \{ `BigInt64`: (`buffer`: `ArrayBuffer`) => `BigInt64Array` ; `BigUint64`: (`buffer`: `ArrayBuffer`) => `BigUint64Array` ; `Float32`: (`buffer`: `ArrayBuffer`) => `Float32Array` ; `Float64`: (`buffer`: `ArrayBuffer`) => `Float64Array` ; `Int16`: (`buffer`: `ArrayBuffer`) => `Int16Array` ; `Int32`: (`buffer`: `ArrayBuffer`) => `Int32Array` ; `Int8`: (`buffer`: `ArrayBuffer`) => `Int8Array` ; `Uint16`: (`buffer`: `ArrayBuffer`) => `Uint16Array` ; `Uint32`: (`buffer`: `ArrayBuffer`) => `Uint32Array` ; `Uint8`: (`buffer`: `ArrayBuffer`) => `Uint8Array` ; `Uint8Clamped`: (`buffer`: `ArrayBuffer`) => `Uint8ClampedArray`  } |
| `getArray.BigInt64` | (`buffer`: `ArrayBuffer`) => `BigInt64Array` |
| `getArray.BigUint64` | (`buffer`: `ArrayBuffer`) => `BigUint64Array` |
| `getArray.Float32` | (`buffer`: `ArrayBuffer`) => `Float32Array` |
| `getArray.Float64` | (`buffer`: `ArrayBuffer`) => `Float64Array` |
| `getArray.Int16` | (`buffer`: `ArrayBuffer`) => `Int16Array` |
| `getArray.Int32` | (`buffer`: `ArrayBuffer`) => `Int32Array` |
| `getArray.Int8` | (`buffer`: `ArrayBuffer`) => `Int8Array` |
| `getArray.Uint16` | (`buffer`: `ArrayBuffer`) => `Uint16Array` |
| `getArray.Uint32` | (`buffer`: `ArrayBuffer`) => `Uint32Array` |
| `getArray.Uint8` | (`buffer`: `ArrayBuffer`) => `Uint8Array` |
| `getArray.Uint8Clamped` | (`buffer`: `ArrayBuffer`) => `Uint8ClampedArray` |
| `compressArrayBuffer` | (`input`: `ArrayBuffer`) => `Promise`\<`Uint8Array`\> |
| `decompressArrayBuffer` | (`input`: `ArrayBuffer`) => `Promise`\<`Uint8Array`\> |
| `processArray` | (`type`: [`TypeArraysNames`](Compression_Meta_Array_types.md#typearraysnames), `array`: `Uint8Array`) => `Uint8Array` \| `Int8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array` |

#### Defined in

[divinestar/utils/src/Compression/CompressorCore.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Compression/CompressorCore.ts#L3)
