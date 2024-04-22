---
id: "Tasks_TaskManager"
title: "Module: Tasks/TaskManager"
sidebar_label: "Tasks/TaskManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### TasksManager

• `Const` **TasksManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_tasks` | `Map`\<`string` \| `number`, [`Task`](../classes/Tasks_Tasks.Task.md)\<`any`\>\> |
| `getTasks` | (`id`: `string` \| `number`) => ``false`` \| [`Task`](../classes/Tasks_Tasks.Task.md)\<`any`\> |
| `registerTasks` | \<T\>(`id`: `string` \| `number`, `run`: (`data`: `T`, `onDone?`: (`data?`: `any`, `transfers?`: `any`) => `void`) => `void`, `mode`: ``"async"`` \| ``"deferred"``) => [`Task`](../classes/Tasks_Tasks.Task.md)\<`T`\> |

#### Defined in

[Tasks/TaskManager.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/TaskManager.ts#L3)
