---
id: "ZeneithDB_ZeneithDB"
title: "Module: ZeneithDB/ZeneithDB"
sidebar_label: "ZeneithDB/ZeneithDB"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ZeneithDB

• `Const` **ZeneithDB**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__initalized` | `boolean` |
| `core` | \{ `__version`: `number` = 1; `dataBase`: [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md) ; `loadedDatabases`: `Record`\<`string`, [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> ; `tasks`: \{ `close`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\> ; `open`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\>  } ; `util`: \{ `getUUID`: () => `string`  } = ZeneithUtil; `createDataBase`: (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> ; `dataBaseExist`: (`dataBasename`: `string`) => `Promise`\<`boolean`\> ; `deleteDataBase`: (`dataBasename`: `string`) => `Promise`\<`undefined` \| ``false``\> ; `getDataBase`: (`dataBasename`: `string`) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> ; `initialize`: () => `Promise`\<`void`\> ; `updateDatBaseData`: (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<`void`\>  } |
| `core.__version` | `number` |
| `core.dataBase` | [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md) |
| `core.loadedDatabases` | `Record`\<`string`, [`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `core.tasks` | \{ `close`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\> ; `open`: (`comm`: `CommBase` \| `CommManager`, `id`: `string`) => `Promise`\<`unknown`\>  } |
| `core.tasks.close` | [object Object] |
| `core.tasks.open` | [object Object] |
| `core.util` | \{ `getUUID`: () => `string`  } |
| `core.util.getUUID` | () => `string` |
| `core.createDataBase` | [object Object] |
| `core.dataBaseExist` | [object Object] |
| `core.deleteDataBase` | [object Object] |
| `core.getDataBase` | [object Object] |
| `core.initialize` | [object Object] |
| `core.updateDatBaseData` | [object Object] |
| `$INIT` | () => `Promise`\<`void`\> |
| `createDatabase` | (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `databaseExists` | (`dataBaseName`: `string`) => `Promise`\<`boolean`\> |
| `deleteDatabase` | (`name`: `string`) => `Promise`\<`undefined` \| ``false``\> |
| `getDatabase` | (`name`: `string`) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |
| `updateDatabase` | (`data`: [`ZeneithDatabaseCreationData`](ZeneithDB_Meta_Database_Database_types.md#zeneithdatabasecreationdata)) => `Promise`\<[`DataBase`](../classes/ZeneithDB_Database_Database.DataBase.md)\> |

#### Defined in

divinestar/indexdb/src/ZeneithDB/ZeneithDB.ts:4
