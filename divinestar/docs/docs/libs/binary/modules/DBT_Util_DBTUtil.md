---
id: "DBT_Util_DBTUtil"
title: "Module: DBT/Util/DBTUtil"
sidebar_label: "DBT/Util/DBTUtil"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### DBTUtil

• `Const` **DBTUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `calculateBitsNeeded` | (`min`: `number`, `max`: `number`) => `number` |
| `getBitArrayIndex` | (`data`: `DataView`, `byteIndex`: `number`, `arrayIndex`: `number`) => `number` |
| `getBitValue` | (`data`: `number`, `index`: `number`, `bitSize`: `number`) => `number` |
| `getTypedNumber` | (`data`: `DataView`, `index`: `number`, `numberType`: `number`) => `number` |
| `getTypedSize` | (`type`: [`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes)) => `number` |
| `getTypedSizeFromNumber` | (`t`: `number`) => `number` |
| `setBitArrayIndex` | (`data`: `DataView`, `byteIndex`: `number`, `arrayIndex`: `number`, `value`: `number`) => `void` |
| `setBitValue` | (`data`: `number`, `index`: `number`, `value`: `number`, `bitSize`: `number`) => `number` |
| `setTypedNumber` | (`data`: `DataView`, `index`: `number`, `numberType`: `number`, `value`: `number`) => `void` |

#### Defined in

[DBT/Util/DBTUtil.ts:72](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Util/DBTUtil.ts#L72)

___

### NumberTypeMap

• `Const` **NumberTypeMap**: `Record`\<`number`, [`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes)\> = `{}`

#### Defined in

[DBT/Util/DBTUtil.ts:35](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Util/DBTUtil.ts#L35)

___

### NumberTypeRecord

• `Const` **NumberTypeRecord**: `Record`\<[`NumberTypes`](DBT_Types_DBTSchema_types.md#numbertypes), `number`\>

#### Defined in

[DBT/Util/DBTUtil.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Util/DBTUtil.ts#L22)

___

### TagNodeTypes

• `Const` **TagNodeTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bitArray` | `number` |
| `boolean` | `number` |
| `number` | `number` |
| `typedNumber` | `number` |
| `typedNumberArray` | `number` |

#### Defined in

[DBT/Util/DBTUtil.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Util/DBTUtil.ts#L2)
