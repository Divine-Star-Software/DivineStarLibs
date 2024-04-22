---
id: "ZeneithDB_Meta_Database_Schema_types"
title: "Module: ZeneithDB/Meta/Database/Schema.types"
sidebar_label: "ZeneithDB/Meta/Database/Schema.types"
custom_edit_url: null
---

## Type Aliases

### ZeneithSchema

Ƭ **ZeneithSchema**: [`ZeneithSchemaNodes`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschemanodes)[]

#### Defined in

divinestar/indexdb/src/ZeneithDB/Meta/Database/Schema.types.ts:19

___

### ZeneithSchemaNode

Ƭ **ZeneithSchemaNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`ZeneithSchema`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschema) |
| `index?` | `boolean` |
| `isUnique?` | `boolean` |
| `name` | `string` |
| `valueType` | [`ZeneithSchemaNodeValueTypes`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschemanodevaluetypes) |

#### Defined in

divinestar/indexdb/src/ZeneithDB/Meta/Database/Schema.types.ts:10

___

### ZeneithSchemaNodeValueTypes

Ƭ **ZeneithSchemaNodeValueTypes**: ``"string"`` \| ``"boolean"`` \| ``"number"`` \| ``"any"`` \| ``"any[]"`` \| ``"string[]"`` \| ``"number[]"`` \| ``"object"``

#### Defined in

divinestar/indexdb/src/ZeneithDB/Meta/Database/Schema.types.ts:1

___

### ZeneithSchemaNodes

Ƭ **ZeneithSchemaNodes**: [`ZeneithSchemaNode`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschemanode) \| [`ZeneithSchemaNode`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschemanode)[] \| [`ZeneithSchema`](ZeneithDB_Meta_Database_Schema_types.md#zeneithschema)[]

#### Defined in

divinestar/indexdb/src/ZeneithDB/Meta/Database/Schema.types.ts:18
