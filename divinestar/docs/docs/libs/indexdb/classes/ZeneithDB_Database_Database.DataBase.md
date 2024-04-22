---
id: "ZeneithDB_Database_Database.DataBase"
title: "Class: DataBase"
sidebar_label: "DataBase"
custom_edit_url: null
---

[ZeneithDB/Database/Database](../modules/ZeneithDB_Database_Database.md).DataBase

## Constructors

### constructor

• **new DataBase**(`creationData`, `outsideZeneith?`): [`DataBase`](ZeneithDB_Database_Database.DataBase.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creationData` | [`ZeneithDatabaseCreationData`](../modules/ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata) | `undefined` |
| `outsideZeneith` | `boolean` | `false` |

#### Returns

[`DataBase`](ZeneithDB_Database_Database.DataBase.md)

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:41

## Properties

### \_\_db

• **\_\_db**: ``null`` \| [`SecureIDBWrap`](ZeneithDB_Classes_SecureIDBWrap.SecureIDBWrap.md)

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:16

___

### \_activeTransaction

• **\_activeTransaction**: ``null`` \| `IDBTransaction` = `null`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:39

___

### \_beingUpgrded

• **\_beingUpgrded**: `boolean` = `false`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:35

___

### \_closed

• **\_closed**: `number`[] = `[]`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:37

___

### \_openeed

• **\_openeed**: `number`[] = `[]`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:36

___

### creationData

• **creationData**: [`ZeneithDatabaseCreationData`](../modules/ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:42

___

### dataBaseName

• **dataBaseName**: `string` = `""`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:13

___

### opened

• **opened**: `boolean` = `false`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:15

___

### outsideZeneith

• **outsideZeneith**: `boolean` = `false`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:43

___

### states

• **states**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionUpdate` | `boolean` |
| `dataUpdating` | `boolean` |

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:18

___

### util

• **util**: `Object` = `ZeneithUtil`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getUUID` | () => `string` |

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:14

## Accessors

### db

• `get` **db**(): ``null`` \| [`SecureIDBWrap`](ZeneithDB_Classes_SecureIDBWrap.SecureIDBWrap.md)

#### Returns

``null`` \| [`SecureIDBWrap`](ZeneithDB_Classes_SecureIDBWrap.SecureIDBWrap.md)

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:23

• `set` **db**(`db`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | ``null`` \| [`SecureIDBWrap`](ZeneithDB_Classes_SecureIDBWrap.SecureIDBWrap.md) |

#### Returns

`void`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:26

## Methods

### \_\_create

▸ **__create**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:147

___

### \_\_open

▸ **__open**(`version?`): `IDBOpenDBRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version?` | `number` |

#### Returns

`IDBOpenDBRequest`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:48

___

### \_\_traverseColletionScehma

▸ **__traverseColletionScehma**(`collection`, `schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `IDBObjectStore` |
| `schema` | [`ZeneithSchema`](../modules/ZeneithDB_Meta_Database_Schema_types.md#zeneithschema) |

#### Returns

`void`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:220

___

### \_openAtVersion

▸ **_openAtVersion**(`version?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `version` | `number` | `1` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:113

___

### \_processCollectionScehma

▸ **_processCollectionScehma**(`collection`, `schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `IDBObjectStore` |
| `schema` | [`ZeneithSchema`](../modules/ZeneithDB_Meta_Database_Schema_types.md#zeneithschema) |

#### Returns

`void`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:216

___

### addCollection

▸ **addCollection**(`data`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ZeneithCollectionData`](../modules/ZeneithDB_Meta_Database_Database_types.md#zeneithcollectiondata)[] |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:245

___

### close

▸ **close**(): `boolean`

#### Returns

`boolean`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:101

___

### doesCollectionExist

▸ **doesCollectionExist**(`collectionName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |

#### Returns

`boolean`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:339

___

### forceUpdate

▸ **forceUpdate**(`removeCollections?`, `newDB?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `removeCollections?` | `string`[] | `undefined` |
| `newDB` | `boolean` | `false` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:151

___

### getAllData

▸ **getAllData**\<`T`\>(`collectionName`): `Promise`\<``false`` \| `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |

#### Returns

`Promise`\<``false`` \| `T`[]\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:400

___

### getAllKeys

▸ **getAllKeys**(`collectionName`): `Promise`\<``false`` \| `IDBValidKey`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |

#### Returns

`Promise`\<``false`` \| `IDBValidKey`[]\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:430

___

### getCollection

▸ **getCollection**\<`T`\>(`id`): `Promise`\<[`ObjectStore`](ZeneithDB_Store_ObjectStore.ObjectStore.md)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ObjectStore`](ZeneithDB_Store_ObjectStore.ObjectStore.md)\<`T`\>\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:235

___

### getData

▸ **getData**\<`T`\>(`collectionName`, `key`): `Promise`\<``false`` \| `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<``false`` \| `T`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:369

___

### getDatabaeVersion

▸ **getDatabaeVersion**(): `number` \| `Promise`\<`number`\>

#### Returns

`number` \| `Promise`\<`number`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:304

___

### getUUID

▸ **getUUID**(): `string`

#### Returns

`string`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:60

___

### isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:56

___

### open

▸ **open**(): `boolean` \| `Promise`\<`boolean`\>

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:64

___

### removeAllData

▸ **removeAllData**(`collectionName`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:490

___

### removeCollection

▸ **removeCollection**(`collectionName`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` \| `string`[] |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:270

___

### removeData

▸ **removeData**(`collectionName`, `key`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:460

___

### setData

▸ **setData**\<`T`\>(`collectionName`, `key`, `setData`): `Promise`\<`boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `key` | `string` |
| `setData` | `T` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:519

___

### updateData

▸ **updateData**\<`T`\>(`collectionName`, `key`, `updateFunction`): `Promise`\<`boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `key` | `string` |
| `updateFunction` | (`data`: `T`) => `T` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:549

___

### waitTillTranscationDone

▸ **waitTillTranscationDone**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:350

___

### waitTillUpdatingDone

▸ **waitTillUpdatingDone**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

divinestar/indexdb/src/ZeneithDB/Database/Database.ts:359
