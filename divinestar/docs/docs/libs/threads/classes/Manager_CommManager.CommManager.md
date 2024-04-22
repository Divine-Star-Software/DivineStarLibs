---
id: "Manager_CommManager.CommManager"
title: "Class: CommManager"
sidebar_label: "CommManager"
custom_edit_url: null
---

[Manager/CommManager](../modules/Manager_CommManager.md).CommManager

## Constructors

### constructor

• **new CommManager**(`data`): [`CommManager`](Manager_CommManager.CommManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CommManagerData`](../modules/Meta_Manager_Manager_types.md#commmanagerdata) |

#### Returns

[`CommManager`](Manager_CommManager.CommManager.md)

#### Defined in

[Manager/CommManager.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L24)

## Properties

### \_\_comms

• **\_\_comms**: [`CommBase`](Comm_Comm.CommBase.md)[] = `[]`

#### Defined in

[Manager/CommManager.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L16)

___

### \_\_data

• **\_\_data**: [`CommManagerData`](../modules/Meta_Manager_Manager_types.md#commmanagerdata)

#### Defined in

[Manager/CommManager.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L17)

___

### \_\_queues

• **\_\_queues**: `Record`\<`string`, [`QueueManager`](Queue_QueueManager.QueueManager.md)\<`any`\>\> = `{}`

#### Defined in

[Manager/CommManager.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L21)

___

### \_currentCom

• **\_currentCom**: `number` = `0`

#### Defined in

[Manager/CommManager.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L14)

___

### \_totalComms

• **\_totalComms**: `number` = `0`

#### Defined in

[Manager/CommManager.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L13)

___

### messageFunctions

• **messageFunctions**: [`MessageRecord`](../modules/Meta_Util_types.md#messagerecord) = `{}`

#### Defined in

[Manager/CommManager.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L22)

___

### name

• **name**: `string` = `""`

#### Defined in

[Manager/CommManager.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L15)

## Methods

### \_\_handleCount

▸ **__handleCount**(): `number`

#### Returns

`number`

#### Defined in

[Manager/CommManager.ts:186](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L186)

___

### \_\_handleManagerMessage

▸ **__handleManagerMessage**(`data`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:94](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L94)

___

### \_\_isManagerMessage

▸ **__isManagerMessage**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Manager/CommManager.ts:90](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L90)

___

### \_\_syncQueue

▸ **__syncQueue**(`id`, `sab`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `sab` | `SharedArrayBuffer` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:238](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L238)

___

### \_\_throwError

▸ **__throwError**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:29](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L29)

___

### \_\_unSyncQueue

▸ **__unSyncQueue**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:244](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L244)

___

### addComms

▸ **addComms**(`comms`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `comms` | [`CommBase`](Comm_Comm.CommBase.md)[] |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:85](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L85)

___

### addPort

▸ **addPort**(`port`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes) |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:65](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L65)

___

### addPorts

▸ **addPorts**(`ports`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ports` | [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes)[] |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:80](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L80)

___

### addQueue

▸ **addQueue**\<`T`\>(`id`, `associatedTasksId`, `getQueueKey?`, `beforeRun?`, `afterRun?`, `getThread?`, `getTransfers?`): [`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `associatedTasksId` | `string` \| `number` | `undefined` |
| `getQueueKey` | ``null`` \| (`data`: `T`) => `string` | `null` |
| `beforeRun` | (`data`: `T`) => `T` | `undefined` |
| `afterRun` | (`data`: `T`, `thread`: `number`) => `void` | `undefined` |
| `getThread` | (`data`: `T`) => `number` | `undefined` |
| `getTransfers` | (`data`: `T`) => `any`[] | `undefined` |

#### Returns

[`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Defined in

[Manager/CommManager.ts:195](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L195)

___

### connectToCom

▸ **connectToCom**(`commToConnectTo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commToConnectTo` | [`CommBase`](Comm_Comm.CommBase.md) |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:33](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L33)

___

### destroyAll

▸ **destroyAll**(): `void`

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:39](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L39)

___

### getQueue

▸ **getQueue**\<`T`\>(`id`): [`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Defined in

[Manager/CommManager.ts:230](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L230)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Manager/CommManager.ts:45](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L45)

___

### listenForMessage

▸ **listenForMessage**(`message`, `run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `number` |
| `run` | [`MessageFunction`](../modules/Meta_Util_types.md#messagefunction) |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:99](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L99)

___

### runAsyncTasks

▸ **runAsyncTasks**\<`T`, `K`\>(`id`, `data`, `transfers?`, `threadNumber?`, `excludeThread?`): `Promise`\<`K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `K` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `data` | `T` | `undefined` |
| `transfers` | `any`[] | `[]` |
| `threadNumber?` | `number` | `undefined` |
| `excludeThread` | `number` | `-1` |

#### Returns

`Promise`\<`K`\>

#### Defined in

[Manager/CommManager.ts:165](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L165)

___

### runPromiseTasks

▸ **runPromiseTasks**\<`T`\>(`id`, `data`, `transfers?`, `onDone`, `threadNumber?`, `excludeThread?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `data` | `T` | `undefined` |
| `transfers` | `any`[] | `[]` |
| `onDone` | (`data`: `any`) => `void` | `undefined` |
| `threadNumber?` | `number` | `undefined` |
| `excludeThread` | `number` | `-1` |

#### Returns

`number`

#### Defined in

[Manager/CommManager.ts:143](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L143)

___

### runTask

▸ **runTask**\<`T`\>(`id`, `data`, `transfers?`, `threadNumber?`, `queueId?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `data` | `T` | `undefined` |
| `transfers` | `any`[] | `[]` |
| `threadNumber` | `number` | `-1` |
| `queueId?` | `string` | `undefined` |

#### Returns

`number`

#### Defined in

[Manager/CommManager.ts:125](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L125)

___

### runTasksForAll

▸ **runTasksForAll**\<`T`\>(`id`, `data`, `transfers?`, `queueId?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `data` | `T` | `undefined` |
| `transfers` | `any`[] | `[]` |
| `queueId?` | `string` | `undefined` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:114](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L114)

___

### sendMessageToAll

▸ **sendMessageToAll**(`message`, `data?`, `transfers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` \| `number` | `undefined` |
| `data` | `any`[] | `[]` |
| `transfers?` | `any`[] | `undefined` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:104](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L104)

___

### syncData

▸ **syncData**\<`T`\>(`dataType`, `data`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | `string` \| `number` |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:250](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L250)

___

### unSyncData

▸ **unSyncData**\<`T`\>(`dataType`, `data`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | `string` \| `number` |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[Manager/CommManager.ts:256](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L256)

___

### waitTillAllAreReady

▸ **waitTillAllAreReady**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Manager/CommManager.ts:53](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Manager/CommManager.ts#L53)
