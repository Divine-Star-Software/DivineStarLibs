---
id: "Schemas_ObjectCollection.ObjectCollection"
title: "Class: ObjectCollection<T>"
sidebar_label: "ObjectCollection"
custom_edit_url: null
---

[Schemas/ObjectCollection](../modules/Schemas_ObjectCollection.md).ObjectCollection

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = [`ObjectCollectionData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiondata) |

## Constructors

### constructor

• **new ObjectCollection**\<`T`\>(`save?`): [`ObjectCollection`](Schemas_ObjectCollection.ObjectCollection.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = [`ObjectCollectionData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiondata) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | () => `Promise`\<`void`\> |

#### Returns

[`ObjectCollection`](Schemas_ObjectCollection.ObjectCollection.md)\<`T`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L32)

## Properties

### \_groups

• **\_groups**: `Map`\<`string`, \{ `data`: [`ObjectCollectionGroupData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiongroupdata) ; `nodes`: `Map`\<`string`, `T`\>  }\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L24)

___

### \_nodes

• **\_nodes**: `Map`\<`string`, \{ `data`: `T` ; `value`: `any`  }\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L17)

___

### save

• **save**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L32)

## Methods

### addGroups

▸ **addGroups**(`groups`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | [`ObjectCollectionGroupData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiongroupdata)[] |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L34)

___

### addNodes

▸ **addNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `T`[] |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:50](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L50)

___

### get

▸ **get**\<`T`\>(`id`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`T`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:77](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L77)

___

### getData

▸ **getData**(`id`): ``false`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``false`` \| `T`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:44](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L44)

___

### getGroup

▸ **getGroup**(`id`): `undefined` \| \{ `data`: [`ObjectCollectionGroupData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiongroupdata) ; `nodes`: `Map`\<`string`, `T`\>  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| \{ `data`: [`ObjectCollectionGroupData`](../modules/Schemas_ObjectCollection_types.md#objectcollectiongroupdata) ; `nodes`: `Map`\<`string`, `T`\>  }

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:40](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L40)

___

### loadIn

▸ **loadIn**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`StoredCollection`](../modules/Schemas_ObjectCollection_types.md#storedcollection) |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:113](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L113)

___

### restoreDefaults

▸ **restoreDefaults**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:124](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L124)

___

### store

▸ **store**(): [`StoredCollection`](../modules/Schemas_ObjectCollection_types.md#storedcollection)

#### Returns

[`StoredCollection`](../modules/Schemas_ObjectCollection_types.md#storedcollection)

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:98](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L98)

___

### update

▸ **update**\<`T`\>(`id`, `value`): `undefined` \| ``false``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| ``false``

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:64](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L64)

___

### validate

▸ **validate**(`id`): `Promise`\<[`ObjectPropertyValidatorResponse`](../modules/Schemas_Validation_ObjectValidation_types.md#objectpropertyvalidatorresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ObjectPropertyValidatorResponse`](../modules/Schemas_Validation_ObjectValidation_types.md#objectpropertyvalidatorresponse)\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.ts:88](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.ts#L88)
