---
id: "Data_DataSyncManager"
title: "Module: Data/DataSyncManager"
sidebar_label: "Data/DataSyncManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### DataSyncManager

• `Const` **DataSyncManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_onDataSync` | `Map`\<`string` \| `number`, [`DataSync`](../classes/Data_DataSync.DataSync.md)\<`any`, `any`\>\> |
| `getDataSync` | (`id`: `string` \| `number`) => ``false`` \| [`DataSync`](../classes/Data_DataSync.DataSync.md)\<`any`, `any`\> |
| `registerDataSync` | \<T, K\>(`dataType`: `string` \| `number`, `onSync?`: (`data`: `T`) => `void`, `onUnSync?`: (`data`: `K`) => `void`) => [`DataSync`](../classes/Data_DataSync.DataSync.md)\<`T`, `K`\> |

#### Defined in

[Data/DataSyncManager.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Data/DataSyncManager.ts#L3)
