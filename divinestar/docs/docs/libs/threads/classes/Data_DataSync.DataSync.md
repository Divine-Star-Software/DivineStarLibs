---
id: "Data_DataSync.DataSync"
title: "Class: DataSync<T, K>"
sidebar_label: "DataSync"
custom_edit_url: null
---

[Data/DataSync](../modules/Data_DataSync.md).DataSync

## Type parameters

| Name |
| :------ |
| `T` |
| `K` |

## Constructors

### constructor

• **new DataSync**\<`T`, `K`\>(): [`DataSync`](Data_DataSync.DataSync.md)\<`T`, `K`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Returns

[`DataSync`](Data_DataSync.DataSync.md)\<`T`, `K`\>

#### Defined in

[Data/DataSync.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L7)

## Properties

### \_\_onSyncFunctions

• **\_\_onSyncFunctions**: `OnSyncFunction`\<`T`\>[] = `[]`

#### Defined in

[Data/DataSync.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L5)

___

### \_\_onUnSyncFunctions

• **\_\_onUnSyncFunctions**: `OnUnSyncFunction`\<`K`\>[] = `[]`

#### Defined in

[Data/DataSync.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L6)

## Methods

### addOnSync

▸ **addOnSync**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `OnSyncFunction`\<`T`\> |

#### Returns

`void`

#### Defined in

[Data/DataSync.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L11)

___

### addOnUnSync

▸ **addOnUnSync**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `OnUnSyncFunction`\<`K`\> |

#### Returns

`void`

#### Defined in

[Data/DataSync.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L15)

___

### sync

▸ **sync**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[Data/DataSync.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L19)

___

### unSync

▸ **unSync**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `K` |

#### Returns

`void`

#### Defined in

[Data/DataSync.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSync.ts#L25)
