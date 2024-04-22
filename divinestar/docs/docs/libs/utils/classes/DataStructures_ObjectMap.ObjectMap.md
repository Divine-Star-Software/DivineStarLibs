---
id: "DataStructures_ObjectMap.ObjectMap"
title: "Class: ObjectMap<K, V>"
sidebar_label: "ObjectMap"
custom_edit_url: null
---

[DataStructures/ObjectMap](../modules/DataStructures_ObjectMap.md).ObjectMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | extends `any` |

## Constructors

### constructor

• **new ObjectMap**\<`K`, `V`\>(`values?`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `Record`\<`K`, `V`\> |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L6)

## Properties

### \_values

• `Private` **\_values**: `Record`\<`string`, `any`\> = `{}`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L2)

___

### size

• **size**: `number` = `0`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L4)

## Methods

### clear

▸ **clear**(): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:94](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L94)

___

### clone

▸ **clone**(`deep?`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`string`, `unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `deep` | `boolean` | `false` |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`string`, `unknown`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:72](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L72)

___

### delete

▸ **delete**(`key`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L22)

___

### filterInPlace

▸ **filterInPlace**(`run`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`value`: `V`) => `boolean` |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:58](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L58)

___

### forEach

▸ **forEach**(`run`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`value`: `V`) => `void` |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:50](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L50)

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L31)

___

### getAsArray

▸ **getAsArray**(): `V`[]

#### Returns

`V`[]

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:88](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L88)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:37](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L37)

___

### map

▸ **map**\<`T`\>(`run`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`value`: `V`) => `T` |

#### Returns

`T`[]

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L41)

___

### push

▸ **push**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `V` & \{ `id`: `K`  }[] |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:68](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L68)

___

### set

▸ **set**(`key`, `value`): [`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`ObjectMap`](DataStructures_ObjectMap.ObjectMap.md)\<`K`, `V`\>

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L13)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[divinestar/utils/src/DataStructures/ObjectMap.ts:84](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/ObjectMap.ts#L84)
