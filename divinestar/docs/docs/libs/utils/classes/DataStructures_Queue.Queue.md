---
id: "DataStructures_Queue.Queue"
title: "Class: Queue<T>"
sidebar_label: "Queue"
custom_edit_url: null
---

[DataStructures/Queue](../modules/DataStructures_Queue.md).Queue

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

• **new Queue**\<`T`\>(): [`Queue`](DataStructures_Queue.Queue.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Queue`](DataStructures_Queue.Queue.md)\<`T`\>

## Properties

### first

• **first**: ``null`` \| `QueueNode`\<`T`\>

#### Defined in

[divinestar/utils/src/DataStructures/Queue.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/Queue.ts#L9)

___

### last

• **last**: ``null`` \| `QueueNode`\<`T`\>

#### Defined in

[divinestar/utils/src/DataStructures/Queue.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/Queue.ts#L10)

___

### size

• **size**: `number` = `0`

#### Defined in

[divinestar/utils/src/DataStructures/Queue.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/Queue.ts#L7)

## Methods

### dequeue

▸ **dequeue**(): ``null`` \| `T`

#### Returns

``null`` \| `T`

#### Defined in

[divinestar/utils/src/DataStructures/Queue.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/Queue.ts#L24)

___

### enqueue

▸ **enqueue**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/DataStructures/Queue.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/DataStructures/Queue.ts#L12)
