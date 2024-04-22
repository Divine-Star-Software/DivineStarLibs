---
id: "Queue_QueueManager.QueueManager"
title: "Class: QueueManager<T>"
sidebar_label: "QueueManager"
custom_edit_url: null
---

[Queue/QueueManager](../modules/Queue_QueueManager.md).QueueManager

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

• **new QueueManager**\<`T`\>(`id`, `onRun`, `_manager`, `getQueueKey?`): [`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `onRun` | (`data`: `T`, `queueId`: `string`) => `void` | `undefined` |
| `_manager` | [`CommManager`](Manager_CommManager.CommManager.md) | `undefined` |
| `getQueueKey` | ``null`` \| (`data`: `T`) => `string` | `null` |

#### Returns

[`QueueManager`](Queue_QueueManager.QueueManager.md)\<`T`\>

#### Defined in

[Queue/QueueManager.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L14)

## Properties

### \_\_queueData

• **\_\_queueData**: `Record`\<`string` \| `number`, \{ `map`: `Record`\<`string`, `boolean`\> ; `queue`: [`Queue`](tools_Queue.Queue.md)\<`T`\> ; `state`: `Uint32Array` ; `stateSAB`: `SharedArrayBuffer`  }\> = `{}`

#### Defined in

[Queue/QueueManager.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L5)

___

### \_manager

• **\_manager**: [`CommManager`](Manager_CommManager.CommManager.md)

#### Defined in

[Queue/QueueManager.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L17)

___

### getQueueKey

• **getQueueKey**: ``null`` \| (`data`: `T`) => `string` = `null`

#### Defined in

[Queue/QueueManager.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L18)

___

### id

• **id**: `string` \| `number`

#### Defined in

[Queue/QueueManager.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L15)

___

### onRun

• **onRun**: (`data`: `T`, `queueId`: `string`) => `void`

#### Type declaration

▸ (`data`, `queueId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `queueId` | `string` |

##### Returns

`void`

#### Defined in

[Queue/QueueManager.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L16)

## Methods

### \_\_getQueueData

▸ **__getQueueData**(`id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `map` | `Record`\<`string`, `boolean`\> |
| `queue` | [`Queue`](tools_Queue.Queue.md)\<`T`\> |
| `state` | `Uint32Array` |
| `stateSAB` | `SharedArrayBuffer` |

#### Defined in

[Queue/QueueManager.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L34)

___

### \_\_getQueueKey

▸ **__getQueueKey**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

#### Defined in

[Queue/QueueManager.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L21)

___

### \_getSyncId

▸ **_getSyncId**(`queueId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueId` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[Queue/QueueManager.ts:56](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L56)

___

### add

▸ **add**(`data`, `queueId?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `queueId` | `string` | `"main"` |

#### Returns

`void`

#### Defined in

[Queue/QueueManager.ts:68](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L68)

___

### addQueue

▸ **addQueue**(`queueId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueId` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

[Queue/QueueManager.ts:42](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L42)

___

### awaitAll

▸ **awaitAll**(`queueId?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueId` | `string` | `"main"` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Queue/QueueManager.ts:110](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L110)

___

### isDone

▸ **isDone**(`queueId?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueId` | `string` | `"main"` |

#### Returns

`boolean`

#### Defined in

[Queue/QueueManager.ts:132](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L132)

___

### onDone

▸ **onDone**(`queueId?`, `run`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueId` | `string` | `"main"` |
| `run` | `Function` | `undefined` |

#### Returns

`void`

#### Defined in

[Queue/QueueManager.ts:122](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L122)

___

### removeQueue

▸ **removeQueue**(`queueId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueId` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

[Queue/QueueManager.ts:60](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L60)

___

### run

▸ **run**(`queueId?`, `filter?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueId` | `string` | `"main"` |
| `filter?` | (`data`: `T`) => ``0`` \| ``1`` \| ``2`` | `undefined` |

#### Returns

`void`

#### Defined in

[Queue/QueueManager.ts:76](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L76)

___

### runAndAwait

▸ **runAndAwait**(`queueId?`, `filter?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueId` | `string` | `"main"` |
| `filter?` | (`data`: `T`) => ``0`` \| ``1`` \| ``2`` | `undefined` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Queue/QueueManager.ts:105](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/QueueManager.ts#L105)
