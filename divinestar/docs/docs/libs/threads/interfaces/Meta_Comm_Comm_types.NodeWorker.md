---
id: "Meta_Comm_Comm_types.NodeWorker"
title: "Interface: NodeWorker"
sidebar_label: "NodeWorker"
custom_edit_url: null
---

[Meta/Comm/Comm.types](../modules/Meta_Comm_Comm_types.md).NodeWorker

## Properties

### postMessage

• **postMessage**: (`data`: `any`, `transfers?`: `any`) => `void`

#### Type declaration

▸ (`data`, `transfers?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `transfers?` | `any` |

##### Returns

`void`

#### Defined in

[Meta/Comm/Comm.types.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Meta/Comm/Comm.types.ts#L2)

## Methods

### on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Defined in

[Meta/Comm/Comm.types.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Meta/Comm/Comm.types.ts#L3)

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`value`: `any`) => `void` |

#### Returns

`this`

#### Defined in

[Meta/Comm/Comm.types.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Meta/Comm/Comm.types.ts#L4)

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"messageerror"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

`this`

#### Defined in

[Meta/Comm/Comm.types.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Meta/Comm/Comm.types.ts#L5)

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Defined in

[Meta/Comm/Comm.types.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Meta/Comm/Comm.types.ts#L6)
