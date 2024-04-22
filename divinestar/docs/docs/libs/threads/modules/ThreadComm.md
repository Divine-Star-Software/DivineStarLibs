---
id: "ThreadComm"
title: "Module: ThreadComm"
sidebar_label: "ThreadComm"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ThreadComm

• `Const` **ThreadComm**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__expectedPorts` | `Record`\<`string`, `boolean`\> |
| `__initalized` | `boolean` |
| `_commManageras` | `Record`\<`string`, [`CommManager`](../classes/Manager_CommManager.CommManager.md)\> |
| `_comms` | `Record`\<`string`, [`CommBase`](../classes/Comm_Comm.CommBase.md)\> |
| `_queues` | `Map`\<`string`, `Map`\<`string`, [`SyncedQueue`](../classes/Queue_SyncedQueue.SyncedQueue.md)\>\> |
| `crypto` | `Crypto` |
| `environment` | ``"browser"`` \| ``"node"`` |
| `internal` | \{ `_tasks`: `Map`\<`number`, `Map`\<`number`, [`MessageFunction`](Meta_Util_types.md#messagefunction)\>\> ; `isInternal`: (`data`: `any`) => `boolean` ; `registerTasks`: (`headID`: `number`, `taskId`: `number`, `run`: [`MessageFunction`](Meta_Util_types.md#messagefunction)) => `void` ; `runInternal`: (`data`: `any`, `event`: `any`) => `undefined` \| ``false``  } |
| `internal._tasks` | `Map`\<`number`, `Map`\<`number`, [`MessageFunction`](Meta_Util_types.md#messagefunction)\>\> |
| `internal.isInternal` | [object Object] |
| `internal.registerTasks` | [object Object] |
| `internal.runInternal` | [object Object] |
| `parent` | [`CommBase`](../classes/Comm_Comm.CommBase.md) |
| `threadName` | `string` |
| `threadNumber` | `number` |
| `$INIT` | (`threadName`: `string`, `threadParentName`: `string`) => `Promise`\<`void`\> |
| `addComm` | (`comm`: [`CommBase`](../classes/Comm_Comm.CommBase.md)) => `void` |
| `createComm` | \<T\>(`name`: `string`, `mergeObject`: `T`) => `T` & [`CommBase`](../classes/Comm_Comm.CommBase.md) |
| `createCommManager` | (`data`: [`CommManagerData`](Meta_Manager_Manager_types.md#commmanagerdata)) => [`CommManager`](../classes/Manager_CommManager.CommManager.md) |
| `getComm` | (`id`: `string`) => [`CommBase`](../classes/Comm_Comm.CommBase.md) |
| `getCommManager` | (`id`: `string`) => [`CommManager`](../classes/Manager_CommManager.CommManager.md) |
| `getSyncedQueue` | (`threadId`: `string`, `queueId`: `string`) => `undefined` \| [`SyncedQueue`](../classes/Queue_SyncedQueue.SyncedQueue.md) |
| `getWorkerPort` | () => `Promise`\<`any`\> |
| `onDataSync` | \<T, K\>(`dataType`: `string` \| `number`, `onSync?`: (`data`: `T`) => `void`, `onUnSync?`: (`data`: `K`) => `void`) => [`DataSync`](../classes/Data_DataSync.DataSync.md)\<`T`, `K`\> |
| `registerTasks` | \<T\>(`id`: `string` \| `number`, `run`: (`data`: `T`, `onDone?`: (`data?`: `any`, `transfers?`: `any`) => `void`) => `void`, `mode`: ``"async"`` \| ``"deferred"``) => `void` |

#### Defined in

[ThreadComm.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/ThreadComm.ts#L12)
