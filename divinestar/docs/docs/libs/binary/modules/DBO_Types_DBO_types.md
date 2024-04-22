---
id: "DBO_Types_DBO_types"
title: "Module: DBO/Types/DBO.types"
sidebar_label: "DBO/Types/DBO.types"
custom_edit_url: null
---

## Type Aliases

### DBOARich

Ƭ **DBOARich**: ``"fixed-typed-array"`` \| ``"fixed-string"`` \| ``"string"`` \| ``"string-array"`` \| ``"fixed-string-array"`` \| ``"typed-array"`` \| ``"json"`` \| ``"boolean"`` \| ``"undefined"`` \| ``"DBO"``

#### Defined in

[DBO/Types/DBO.types.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L15)

___

### DBOElement

Ƭ **DBOElement**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `listType?` | [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive) |
| `type` | [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive) \| [`DBOARich`](DBO_Types_DBO_types.md#dboarich) |
| `value` | `string` \| `number` \| `number`[] \| `string`[] |

#### Defined in

[DBO/Types/DBO.types.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L27)

___

### DBOMarks

Ƭ **DBOMarks**: ``"start"`` \| ``"end"`` \| ``"name"`` \| ``"object"`` \| ``"object-start"`` \| ``"object-end"`` \| ``"array"`` \| ``"array-start"`` \| ``"array-end"`` \| [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive) \| [`DBOARich`](DBO_Types_DBO_types.md#dboarich)

#### Defined in

[DBO/Types/DBO.types.ts:60](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L60)

___

### DBOPrimitive

Ƭ **DBOPrimitive**: ``"8i"`` \| ``"8ui"`` \| ``"8uic"`` \| ``"16i"`` \| ``"16ui"`` \| ``"32f"`` \| ``"32i"`` \| ``"32ui"`` \| ``"64f"`` \| ``"bigi"`` \| ``"bigui"``

#### Defined in

[DBO/Types/DBO.types.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L2)

___

### DBObject

Ƭ **DBObject**: `Record`\<`string`, [`DBOElement`](DBO_Types_DBO_types.md#dboelement)\>

#### Defined in

[DBO/Types/DBO.types.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L1)

___

### TypedArrayClasses

Ƭ **TypedArrayClasses**: typeof `Int8Array` \| typeof `Uint8Array` \| typeof `Uint8ClampedArray` \| typeof `Int16Array` \| typeof `Uint16Array` \| typeof `Int32Array` \| typeof `Uint32Array` \| typeof `Float32Array` \| typeof `Float64Array` \| typeof `BigInt64Array` \| typeof `BigUint64Array`

#### Defined in

[DBO/Types/DBO.types.ts:47](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L47)

___

### TypedArrays

Ƭ **TypedArrays**: `Int8Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`

#### Defined in

[DBO/Types/DBO.types.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Types/DBO.types.ts#L34)
