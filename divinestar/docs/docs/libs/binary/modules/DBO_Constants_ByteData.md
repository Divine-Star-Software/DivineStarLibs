---
id: "DBO_Constants_ByteData"
title: "Module: DBO/Constants/ByteData"
sidebar_label: "DBO/Constants/ByteData"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ByteCounts

• `Const` **ByteCounts**: `Record`\<[`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `number`\>

#### Defined in

[DBO/Constants/ByteData.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L7)

___

### ByteDataGet

• `Const` **ByteDataGet**: `Record`\<[`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), (`dv`: `DataView`, `index`: `number`) => `number`\>

#### Defined in

[DBO/Constants/ByteData.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L21)

___

### ByteDataSet

• `Const` **ByteDataSet**: `Record`\<[`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), (`dv`: `DataView`, `index`: `number`, `value`: `number`) => `void`\>

#### Defined in

[DBO/Constants/ByteData.ts:40](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L40)

___

### ByteParser

• `Const` **ByteParser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `value` | `number` |
| `view` | `DataView` |
| `addBytes` | (`data`: `number`[]) => `void` |
| `setValue` | (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`) => \{ view: DataView; count: number; value: number; setValue(type: DBOPrimitive, value: number): ...; addBytes(data: number[]): void; } |

#### Defined in

[DBO/Constants/ByteData.ts:102](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L102)

___

### TypedArrayCrete

• `Const` **TypedArrayCrete**: `Record`\<[`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), (`length`: `number`) => [`TypedArrays`](DBO_Types_DBO_types.md#typedarrays)\>

#### Defined in

[DBO/Constants/ByteData.ts:57](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L57)

___

### TypedArrayMap

• `Const` **TypedArrayMap**: `Record`\<[`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), [`TypedArrayClasses`](DBO_Types_DBO_types.md#typedarrayclasses)\>

#### Defined in

[DBO/Constants/ByteData.ts:74](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L74)

___

### TypedArrayRecord

• `Const` **TypedArrayRecord**: `Map`\<[`TypedArrayClasses`](DBO_Types_DBO_types.md#typedarrayclasses), [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive)\>

#### Defined in

[DBO/Constants/ByteData.ts:88](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Constants/ByteData.ts#L88)
