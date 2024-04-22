---
id: "Comm_Comm.CommBase"
title: "Class: CommBase"
sidebar_label: "CommBase"
custom_edit_url: null
---

[Comm/Comm](../modules/Comm_Comm.md).CommBase

## Constructors

### constructor

• **new CommBase**(`name`, `managerName?`, `commManager?`): [`CommBase`](Comm_Comm.CommBase.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `managerName` | `string` | `"worker"` |
| `commManager` | ``null`` \| [`CommManager`](Manager_CommManager.CommManager.md) | `null` |

#### Returns

[`CommBase`](Comm_Comm.CommBase.md)

#### Defined in

[Comm/Comm.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L15)

## Properties

### \_\_onSetPortRun

• **\_\_onSetPortRun**: (`port`: [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes)) => `void`

#### Type declaration

▸ (`port`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes) |

##### Returns

`void`

#### Defined in

[Comm/Comm.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L41)

___

### \_\_ready

• **\_\_ready**: `boolean` = `false`

#### Defined in

[Comm/Comm.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L11)

___

### \_manager

• **\_manager**: ``null`` \| [`CommManager`](Manager_CommManager.CommManager.md) = `null`

#### Defined in

[Comm/Comm.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L14)

___

### environment

• **environment**: ``"browser"`` \| ``"node"`` = `"browser"`

#### Defined in

[Comm/Comm.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L10)

___

### managerName

• **managerName**: `string` = `"worker"`

#### Defined in

[Comm/Comm.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L17)

___

### messageFunctions

• **messageFunctions**: [`MessageRecord`](../modules/Meta_Util_types.md#messagerecord) = `{}`

#### Defined in

[Comm/Comm.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L13)

___

### name

• **name**: `string`

#### Defined in

[Comm/Comm.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L16)

___

### port

• **port**: ``null`` \| [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes) = `null`

#### Defined in

[Comm/Comm.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L12)

## Methods

### \_\_handleMessage

▸ **__handleMessage**(`data`, `event`): `undefined` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `any` |

#### Returns

`undefined` \| ``false``

#### Defined in

[Comm/Comm.ts:51](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L51)

___

### \_\_sendInternalMessage

▸ **__sendInternalMessage**(`id`, `data?`, `transfers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `data` | `any` | `[]` |
| `transfers` | `any` | `[]` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:205](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L205)

___

### \_\_sendReadySignal

▸ **__sendReadySignal**(): `void`

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L34)

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

[Comm/Comm.ts:209](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L209)

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

[Comm/Comm.ts:97](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L97)

___

### \_\_unSyqncQueue

▸ **__unSyqncQueue**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:218](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L218)

___

### connectToComm

▸ **connectToComm**(`commToConnectTo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commToConnectTo` | [`CommBase`](Comm_Comm.CommBase.md) |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:117](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L117)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L23)

___

### isPortSet

▸ **isPortSet**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Comm/Comm.ts:43](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L43)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Comm/Comm.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L30)

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

[Comm/Comm.ts:112](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L112)

___

### onMessage

▸ **onMessage**(`data`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:255](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L255)

___

### onSetPort

▸ **onSetPort**(`set`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | (`port`: [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes)) => `void` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:47](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L47)

___

### runAsyncTasks

▸ **runAsyncTasks**\<`T`, `K`\>(`id`, `data`, `transfers?`): `Promise`\<`K`\>

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

#### Returns

`Promise`\<`K`\>

#### Defined in

[Comm/Comm.ts:193](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L193)

___

### runPromiseTasks

▸ **runPromiseTasks**\<`T`\>(`id`, `data`, `transfers?`, `onDone`): `void`

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

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:178](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L178)

___

### runTasks

▸ **runTasks**\<`T`\>(`id`, `data`, `transfers?`, `queueId?`): `void`

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
| `queueId?` | `string` | `undefined` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:132](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L132)

___

### sendMessage

▸ **sendMessage**(`message`, `data?`, `transfers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` \| `number` | `undefined` |
| `data` | `any`[] | `[]` |
| `transfers?` | `any`[] | `undefined` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:101](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L101)

___

### setPort

▸ **setPort**(`port`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`CommPortTypes`](../modules/Meta_Comm_Comm_types.md#commporttypes) |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:70](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L70)

___

### syncData

▸ **syncData**\<`T`\>(`dataType`, `data`, `transfers?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | `string` \| `number` |
| `data` | `T` |
| `transfers?` | `any`[] |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:226](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L226)

___

### tasksExist

▸ **tasksExist**(`id`, `onDone`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `onDone` | (`exist`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:164](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L164)

___

### unSyncData

▸ **unSyncData**\<`T`\>(`dataType`, `data`, `transfers?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | `string` \| `number` |
| `data` | `T` |
| `transfers?` | `any`[] |

#### Returns

`void`

#### Defined in

[Comm/Comm.ts:234](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L234)

___

### waitTillReady

▸ **waitTillReady**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Comm/Comm.ts:242](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L242)

___

### waitTillTasksExist

▸ **waitTillTasksExist**(`id`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Comm/Comm.ts:151](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/threads/src/Comm/Comm.ts#L151)
