---
id: "Internal_InternalTasks"
title: "Module: Internal/InternalTasks"
sidebar_label: "Internal/InternalTasks"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### InternalTasks

• `Const` **InternalTasks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_tasks` | `Map`\<`number`, `Map`\<`number`, [`MessageFunction`](Meta_Util_types.md#messagefunction)\>\> |
| `isInternal` | (`data`: `any`) => `boolean` |
| `registerTasks` | (`headID`: `number`, `taskId`: `number`, `run`: [`MessageFunction`](Meta_Util_types.md#messagefunction)) => `void` |
| `runInternal` | (`data`: `any`, `event`: `any`) => `undefined` \| ``false`` |

#### Defined in

[Internal/InternalTasks.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Internal/InternalTasks.ts#L8)
