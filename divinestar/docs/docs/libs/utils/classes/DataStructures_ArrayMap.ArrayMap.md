---
id: "DataStructures_ArrayMap.ArrayMap"
title: "Class: ArrayMap<T, K>"
sidebar_label: "ArrayMap"
custom_edit_url: null
---

[DataStructures/ArrayMap](../modules/DataStructures_ArrayMap.md).ArrayMap

## Type parameters

| Name |
| :------ |
| `T` |
| `K` |

## Constructors

### constructor

• **new ArrayMap**\<`T`, `K`\>(`data?`): [`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`T`, `K`][] |

#### Returns

[`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L5)

## Properties

### \_keys

• `Private` **\_keys**: `T`[] = `[]`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L3)

___

### \_map

• `Private` **\_map**: `Map`\<`T`, `K`\>

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L2)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:84](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L84)

## Methods

### add

▸ **add**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`T`, `K`][] |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L22)

___

### at

▸ **at**(`index`): `undefined` \| [`T`, `K`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`T`, `K`]

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:39](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L39)

___

### delete

▸ **delete**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L30)

___

### filter

▸ **filter**(`predicate`): [`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `K`, `key`: `T`, `map`: `Map`\<`T`, `K`\>) => `boolean` |

#### Returns

[`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:100](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L100)

___

### forEach

▸ **forEach**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `K`, `key`: `T`, `map`: `Map`\<`T`, `K`\>) => `void` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:88](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L88)

___

### get

▸ **get**(`id`): `undefined` \| `K`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |

#### Returns

`undefined` \| `K`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L18)

___

### has

▸ **has**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L26)

___

### indexOf

▸ **indexOf**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |

#### Returns

`number`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:80](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L80)

___

### map

▸ **map**\<`U`\>(`callback`): `U`[]

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `K`, `key`: `T`, `map`: `Map`\<`T`, `K`\>) => `U` |

#### Returns

`U`[]

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:94](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L94)

___

### pop

▸ **pop**(): `undefined` \| [`T`, `K`]

#### Returns

`undefined` \| [`T`, `K`]

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:51](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L51)

___

### push

▸ **push**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |
| `value` | `K` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:47](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L47)

___

### reduce

▸ **reduce**\<`U`\>(`callback`, `initialValue`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accumulator`: `U`, `value`: `K`, `key`: `T`, `map`: `Map`\<`T`, `K`\>) => `U` |
| `initialValue` | `U` |

#### Returns

`U`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:113](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L113)

___

### set

▸ **set**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |
| `value` | `K` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L11)

___

### shift

▸ **shift**(): `undefined` \| [`T`, `K`]

#### Returns

`undefined` \| [`T`, `K`]

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:61](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L61)

___

### sort

▸ **sort**(`compareFunction?`): [`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFunction?` | (`a`: [`T`, `K`], `b`: [`T`, `K`]) => `number` |

#### Returns

[`ArrayMap`](DataStructures_ArrayMap.ArrayMap.md)\<`T`, `K`\>

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:123](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L123)

___

### unshift

▸ **unshift**(`id`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `T` |
| `value` | `K` |

#### Returns

`number`

#### Defined in

[divinestar/utils/src/DataStructures/ArrayMap.ts:71](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ArrayMap.ts#L71)
