---
id: "Tasks_PromiseTasks"
title: "Module: Tasks/PromiseTasks"
sidebar_label: "Tasks/PromiseTasks"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### PromiseTasks

• `Const` **PromiseTasks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_waiting` | `Map`\<`string` \| `number`, `Map`\<`string` \| `number`, (`data`: `any`) => `void`\>\> |
| `addPromiseTakss` | (`tasksId`: `string` \| `number`, `tasksRequestsId`: `string` \| `number`, `onDone`: (`data`: `any`) => `void`) => `void` |
| `completePromiseTasks` | (`tasksId`: `string` \| `number`, `tasksRequestsId`: `string` \| `number`, `data`: `any`) => `void` |

#### Defined in

[Tasks/PromiseTasks.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Tasks/PromiseTasks.ts#L1)
