---
id: "DataStructures_PathObject.PathObject"
title: "Class: PathObject"
sidebar_label: "PathObject"
custom_edit_url: null
---

[DataStructures/PathObject](../modules/DataStructures_PathObject.md).PathObject

## Indexable

▪ [key: `string`]: `any`

## Constructors

### constructor

• **new PathObject**(): [`PathObject`](DataStructures_PathObject.PathObject.md)

#### Returns

[`PathObject`](DataStructures_PathObject.PathObject.md)

## Methods

### getPath

▸ **getPath**\<`T`\>(`path`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |

#### Returns

``null`` \| `T`

#### Defined in

[divinestar/utils/src/DataStructures/PathObject.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/PathObject.ts#L5)

▸ **getPath**\<`T`\>(`path`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |

#### Returns

``null`` \| `T`

#### Defined in

[divinestar/utils/src/DataStructures/PathObject.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/PathObject.ts#L10)

___

### setPath

▸ **setPath**(`path`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/PathObject.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/PathObject.ts#L6)

▸ **setPath**(`path`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[divinestar/utils/src/DataStructures/PathObject.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/PathObject.ts#L17)

___

### traverse

▸ **traverse**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`key`: `string`, `data`: `any`) => ``null`` \| `void` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/PathObject.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/PathObject.ts#L25)
