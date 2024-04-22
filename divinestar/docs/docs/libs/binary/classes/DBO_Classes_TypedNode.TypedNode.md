---
id: "DBO_Classes_TypedNode.TypedNode"
title: "Class: TypedNode<T>"
sidebar_label: "TypedNode"
custom_edit_url: null
---

[DBO/Classes/TypedNode](../modules/DBO_Classes_TypedNode.md).TypedNode

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

• **new TypedNode**\<`T`\>(`type`, `value`, `listType?`, `length?`): [`TypedNode`](DBO_Classes_TypedNode.TypedNode.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `undefined` |
| `value` | `T` | `undefined` |
| `listType` | `number` | `0` |
| `length` | `number` | `0` |

#### Returns

[`TypedNode`](DBO_Classes_TypedNode.TypedNode.md)\<`T`\>

#### Defined in

[DBO/Classes/TypedNode.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L31)

## Properties

### data

• **data**: [type: number, listType: number, length: number, value: T]

#### Defined in

[DBO/Classes/TypedNode.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L5)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[DBO/Classes/TypedNode.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L6)

___

### listType

• `get` **listType**(): `number`

#### Returns

`number`

#### Defined in

[DBO/Classes/TypedNode.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L18)

___

### listTypeName

• `get` **listTypeName**(): [`DBOPrimitive`](../modules/DBO_Types_DBO_types.md#dboprimitive)

#### Returns

[`DBOPrimitive`](../modules/DBO_Types_DBO_types.md#dboprimitive)

#### Defined in

[DBO/Classes/TypedNode.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L21)

___

### primiteName

• `get` **primiteName**(): [`DBOPrimitive`](../modules/DBO_Types_DBO_types.md#dboprimitive)

#### Returns

[`DBOPrimitive`](../modules/DBO_Types_DBO_types.md#dboprimitive)

#### Defined in

[DBO/Classes/TypedNode.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L15)

___

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Defined in

[DBO/Classes/TypedNode.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L9)

___

### typeName

• `get` **typeName**(): [`DBOMarks`](../modules/DBO_Types_DBO_types.md#dbomarks)

#### Returns

[`DBOMarks`](../modules/DBO_Types_DBO_types.md#dbomarks)

#### Defined in

[DBO/Classes/TypedNode.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L12)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

[DBO/Classes/TypedNode.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L24)

• `set` **value**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[DBO/Classes/TypedNode.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/Classes/TypedNode.ts#L27)
