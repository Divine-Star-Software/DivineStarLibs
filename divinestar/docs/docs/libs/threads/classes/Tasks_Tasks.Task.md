---
id: "Tasks_Tasks.Task"
title: "Class: Task<T>"
sidebar_label: "Task"
custom_edit_url: null
---

[Tasks/Tasks](../modules/Tasks_Tasks.md).Task

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

• **new Task**\<`T`\>(`name`, `run`, `mode`): [`Task`](Tasks_Tasks.Task.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `number` |
| `run` | (`data`: `T`, `onDone?`: (`data?`: `any`, `transfers?`: `any`) => `void`) => `void` |
| `mode` | ``"async"`` \| ``"deferred"`` |

#### Returns

[`Task`](Tasks_Tasks.Task.md)\<`T`\>

#### Defined in

[Tasks/Tasks.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/Tasks.ts#L2)

## Properties

### mode

• **mode**: ``"async"`` \| ``"deferred"``

#### Defined in

[Tasks/Tasks.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/Tasks.ts#L5)

___

### name

• **name**: `string` \| `number`

#### Defined in

[Tasks/Tasks.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/Tasks.ts#L3)

___

### run

• **run**: (`data`: `T`, `onDone?`: (`data?`: `any`, `transfers?`: `any`) => `void`) => `void`

#### Type declaration

▸ (`data`, `onDone?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `onDone?` | (`data?`: `any`, `transfers?`: `any`) => `void` |

##### Returns

`void`

#### Defined in

[Tasks/Tasks.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/Tasks.ts#L4)
