---
id: "Queue_SyncedQueue.SyncedQueue"
title: "Class: SyncedQueue"
sidebar_label: "SyncedQueue"
custom_edit_url: null
---

[Queue/SyncedQueue](../modules/Queue_SyncedQueue.md).SyncedQueue

## Constructors

### constructor

• **new SyncedQueue**(`id`, `sab`): [`SyncedQueue`](Queue_SyncedQueue.SyncedQueue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `sab` | `SharedArrayBuffer` |

#### Returns

[`SyncedQueue`](Queue_SyncedQueue.SyncedQueue.md)

#### Defined in

[Queue/SyncedQueue.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L3)

## Properties

### id

• **id**: `string`

#### Defined in

[Queue/SyncedQueue.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L3)

___

### sab

• **sab**: `SharedArrayBuffer`

#### Defined in

[Queue/SyncedQueue.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L3)

___

### states

• **states**: `Uint32Array`

#### Defined in

[Queue/SyncedQueue.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L2)

## Methods

### addToCount

▸ **addToCount**(`total?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `total` | `number` | `1` |

#### Returns

`void`

#### Defined in

[Queue/SyncedQueue.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L7)

___

### getCount

▸ **getCount**(): `number`

#### Returns

`number`

#### Defined in

[Queue/SyncedQueue.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L14)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Queue/SyncedQueue.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L18)

___

### onDone

▸ **onDone**(`onDone`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDone` | `Function` |

#### Returns

`void`

#### Defined in

[Queue/SyncedQueue.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L22)

___

### subtractFromCount

▸ **subtractFromCount**(`total?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `total` | `number` | `1` |

#### Returns

`void`

#### Defined in

[Queue/SyncedQueue.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L10)

___

### wait

▸ **wait**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Queue/SyncedQueue.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Queue/SyncedQueue.ts#L31)
