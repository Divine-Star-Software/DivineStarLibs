---
id: "Compression_Compression"
title: "Module: Compression/Compression"
sidebar_label: "Compression/Compression"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### Compressor

• `Const` **Compressor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `core` | \{ `getArray`: \{ `BigInt64`: (`buffer`: `ArrayBuffer`) => `BigInt64Array` ; `BigUint64`: (`buffer`: `ArrayBuffer`) => `BigUint64Array` ; `Float32`: (`buffer`: `ArrayBuffer`) => `Float32Array` ; `Float64`: (`buffer`: `ArrayBuffer`) => `Float64Array` ; `Int16`: (`buffer`: `ArrayBuffer`) => `Int16Array` ; `Int32`: (`buffer`: `ArrayBuffer`) => `Int32Array` ; `Int8`: (`buffer`: `ArrayBuffer`) => `Int8Array` ; `Uint16`: (`buffer`: `ArrayBuffer`) => `Uint16Array` ; `Uint32`: (`buffer`: `ArrayBuffer`) => `Uint32Array` ; `Uint8`: (`buffer`: `ArrayBuffer`) => `Uint8Array` ; `Uint8Clamped`: (`buffer`: `ArrayBuffer`) => `Uint8ClampedArray`  } ; `compressArrayBuffer`: (`input`: `ArrayBuffer`) => `Promise`\<`Uint8Array`\> ; `decompressArrayBuffer`: (`input`: `ArrayBuffer`) => `Promise`\<`Uint8Array`\> ; `processArray`: (`type`: [`TypeArraysNames`](Compression_Meta_Array_types.md#typearraysnames), `array`: `Uint8Array`) => `Uint8Array` \| `Int8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`  } |
| `core.getArray` | \{ `BigInt64`: (`buffer`: `ArrayBuffer`) => `BigInt64Array` ; `BigUint64`: (`buffer`: `ArrayBuffer`) => `BigUint64Array` ; `Float32`: (`buffer`: `ArrayBuffer`) => `Float32Array` ; `Float64`: (`buffer`: `ArrayBuffer`) => `Float64Array` ; `Int16`: (`buffer`: `ArrayBuffer`) => `Int16Array` ; `Int32`: (`buffer`: `ArrayBuffer`) => `Int32Array` ; `Int8`: (`buffer`: `ArrayBuffer`) => `Int8Array` ; `Uint16`: (`buffer`: `ArrayBuffer`) => `Uint16Array` ; `Uint32`: (`buffer`: `ArrayBuffer`) => `Uint32Array` ; `Uint8`: (`buffer`: `ArrayBuffer`) => `Uint8Array` ; `Uint8Clamped`: (`buffer`: `ArrayBuffer`) => `Uint8ClampedArray`  } |
| `core.getArray.BigInt64` | (`buffer`: `ArrayBuffer`) => `BigInt64Array` |
| `core.getArray.BigUint64` | (`buffer`: `ArrayBuffer`) => `BigUint64Array` |
| `core.getArray.Float32` | (`buffer`: `ArrayBuffer`) => `Float32Array` |
| `core.getArray.Float64` | (`buffer`: `ArrayBuffer`) => `Float64Array` |
| `core.getArray.Int16` | (`buffer`: `ArrayBuffer`) => `Int16Array` |
| `core.getArray.Int32` | (`buffer`: `ArrayBuffer`) => `Int32Array` |
| `core.getArray.Int8` | (`buffer`: `ArrayBuffer`) => `Int8Array` |
| `core.getArray.Uint16` | (`buffer`: `ArrayBuffer`) => `Uint16Array` |
| `core.getArray.Uint32` | (`buffer`: `ArrayBuffer`) => `Uint32Array` |
| `core.getArray.Uint8` | (`buffer`: `ArrayBuffer`) => `Uint8Array` |
| `core.getArray.Uint8Clamped` | (`buffer`: `ArrayBuffer`) => `Uint8ClampedArray` |
| `core.compressArrayBuffer` | [object Object] |
| `core.decompressArrayBuffer` | [object Object] |
| `core.processArray` | [object Object] |
| `version` | `number` |
| `compressArray` | (`array`: [`TypedArrays`](Compression_Meta_Array_types.md#typedarrays)) => `Promise`\<`Uint8Array`\> |
| `decompressArray` | (`buffer`: `ArrayBuffer`, `type`: [`TypeArraysNames`](Compression_Meta_Array_types.md#typearraysnames)) => `Promise`\<`Uint8Array` \| `Int8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`\> |

#### Defined in

[divinestar/utils/src/Compression/Compression.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Compression/Compression.ts#L4)
