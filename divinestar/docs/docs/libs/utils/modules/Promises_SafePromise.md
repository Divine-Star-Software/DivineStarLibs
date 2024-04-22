---
id: "Promises_SafePromise"
title: "Module: Promises/SafePromise"
sidebar_label: "Promises/SafePromise"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [SafePromise](../classes/Promises_SafePromise.SafePromise.md)
- [SafePromiseDiedError](../classes/Promises_SafePromise.SafePromiseDiedError.md)

## Type Aliases

### SafePromiseFunction

Ƭ **SafePromiseFunction**\<`T`\>: (`resolve`: (`data`: `T`) => `void`, `reject`: (`data`: `any`) => `void`, `promise`: [`SafePromise`](../classes/Promises_SafePromise.SafePromise.md)) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`resolve`, `reject`, `promise`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `resolve` | (`data`: `T`) => `void` |
| `reject` | (`data`: `any`) => `void` |
| `promise` | [`SafePromise`](../classes/Promises_SafePromise.SafePromise.md) |

##### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L3)
