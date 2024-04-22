---
id: "ZeneithDB_Store_ObjectStore.ObjectStore"
title: "Class: ObjectStore<K>"
sidebar_label: "ObjectStore"
custom_edit_url: null
---

[ZeneithDB/Store/ObjectStore](../modules/ZeneithDB_Store_ObjectStore.md).ObjectStore

## Type parameters

| Name |
| :------ |
| `K` |

## Constructors

### constructor

• **new ObjectStore**\<`K`\>(`db`, `id`): [`ObjectStore`](ZeneithDB_Store_ObjectStore.ObjectStore.md)\<`K`\>

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`DataBase`](ZeneithDB_Database_Database.DataBase.md) |
| `id` | `string` |

#### Returns

[`ObjectStore`](ZeneithDB_Store_ObjectStore.ObjectStore.md)\<`K`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:4

## Properties

### db

• **db**: [`DataBase`](ZeneithDB_Database_Database.DataBase.md)

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:4

___

### id

• **id**: `string`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:4

## Methods

### delete

▸ **delete**(`id`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:11

___

### get

▸ **get**(`id`): `Promise`\<``false`` \| `K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``false`` \| `K`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:5

___

### set

▸ **set**(`id`, `data`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `K` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Store/ObjectStore.ts:8
