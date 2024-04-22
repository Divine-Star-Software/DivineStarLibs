---
id: "DBT_Types_DBTSchema_types"
title: "Module: DBT/Types/DBTSchema.types"
sidebar_label: "DBT/Types/DBTSchema.types"
custom_edit_url: null
---

## Type Aliases

### DBTBitArrayTab

Ƭ **DBTBitArrayTab**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `length` | `number` |
| `type` | ``"bit-array"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L34)

___

### DBTBooleanTag

Ƭ **DBTBooleanTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"boolean"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L14)

___

### DBTHeaderTag

Ƭ **DBTHeaderTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `numberType` | [`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes) |
| `type` | ``"header"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:39](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L39)

___

### DBTNumberTag

Ƭ **DBTNumberTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `range` | [min: number, max: number] |
| `type` | ``"number"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L18)

___

### DBTSchema

Ƭ **DBTSchema**: `Map`\<`string`, [`DBTTagNodes`](DBT_Types_DBTSchema_types.md#dbttagnodes)\>

#### Defined in

[DBT/Types/DBTSchema.types.ts:53](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L53)

___

### DBTTagNodes

Ƭ **DBTTagNodes**: [`DBTBooleanTag`](DBT_Types_DBTSchema_types.md#dbtbooleantag) \| [`DBTNumberTag`](DBT_Types_DBTSchema_types.md#dbtnumbertag) \| [`DBTBitArrayTab`](DBT_Types_DBTSchema_types.md#dbtbitarraytab) \| [`DBTTypedNumberTag`](DBT_Types_DBTSchema_types.md#dbttypednumbertag) \| [`DBTTypedNumberArrayTag`](DBT_Types_DBTSchema_types.md#dbttypednumberarraytag) \| [`DBTHeaderTag`](DBT_Types_DBTSchema_types.md#dbtheadertag)

#### Defined in

[DBT/Types/DBTSchema.types.ts:45](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L45)

___

### DBTTagTypes

Ƭ **DBTTagTypes**: ``"number"`` \| ``"boolean"``

#### Defined in

[DBT/Types/DBTSchema.types.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L1)

___

### DBTTypedNumberArrayTag

Ƭ **DBTTypedNumberArrayTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `length` | `number` |
| `numberType` | [`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes) |
| `type` | ``"typed-number-array"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L28)

___

### DBTTypedNumberTag

Ƭ **DBTTypedNumberTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `numberType` | [`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes) |
| `type` | ``"typed-number"`` |

#### Defined in

[DBT/Types/DBTSchema.types.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L23)

___

### NumberTypes

Ƭ **NumberTypes**: ``"8ui"`` \| ``"8i"`` \| ``"16ui"`` \| ``"16i"`` \| ``"32ui"`` \| ``"32i"`` \| ``"32f"`` \| ``"64f"`` \| ``"64i"`` \| ``"64ui"``

#### Defined in

[DBT/Types/DBTSchema.types.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Types/DBTSchema.types.ts#L3)
