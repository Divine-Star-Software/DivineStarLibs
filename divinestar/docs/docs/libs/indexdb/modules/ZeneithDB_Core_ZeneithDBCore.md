---
id: "ZeneithDB_Core_ZeneithDBCore"
title: "Module: ZeneithDB/Core/ZeneithDBCore"
sidebar_label: "ZeneithDB/Core/ZeneithDBCore"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ZeneithDBCore

• `Const` **ZeneithDBCore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__version` | `number` |
| `dataBase` | [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md) |
| `loadedDatabases` | `Record`\<`string`, [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `tasks` | \{ `close`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\> ; `open`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\>  } |
| `tasks.close` | [object Object] |
| `tasks.open` | [object Object] |
| `util` | \{ `getUUID`: () => `string`  } |
| `util.getUUID` | () => `string` |
| `createDataBase` | (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `dataBaseExist` | (`dataBasename`: `string`) => `Promise`\<`boolean`\> |
| `deleteDataBase` | (`dataBasename`: `string`) => `Promise`\<`undefined` \| ``false``\> |
| `getDataBase` | (`dataBasename`: `string`) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `initialize` | () => `Promise`\<`void`\> |
| `updateDatBaseData` | (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<`void`\> |

#### Defined in

divinestar/indexdb/src/ZeneithDB/Core/ZeneithDBCore.ts:10
