---
id: "Promises_SafePromise.SafePromise"
title: "Class: SafePromise<T>"
sidebar_label: "SafePromise"
custom_edit_url: null
---

[Promises/SafePromise](../modules/Promises_SafePromise.md).SafePromise

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Constructors

### constructor

• **new SafePromise**\<`T`\>(`id`, `run`, `dieTimeOut?`): [`SafePromise`](Promises_SafePromise.SafePromise.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `run` | [`SafePromiseFunction`](../modules/Promises_SafePromise.md#safepromisefunction)\<`T`\> | `undefined` |
| `dieTimeOut` | `number` | `30_000` |

#### Returns

[`SafePromise`](Promises_SafePromise.SafePromise.md)\<`T`\>

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:38](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L38)

## Properties

### \_isRejected

• `Private` **\_isRejected**: `boolean` = `false`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L28)

___

### \_isResolved

• `Private` **\_isResolved**: `boolean` = `false`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L27)

___

### \_run

• `Private` **\_run**: [`SafePromiseFunction`](../modules/Promises_SafePromise.md#safepromisefunction)\<`T`\>

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L17)

___

### canceled

• `Private` **canceled**: `boolean` = `false`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L25)

___

### dieTimeOut

• **dieTimeOut**: `number` = `30_000`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L41)

___

### dieTimer

• `Private` **dieTimer**: `any` = `0`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L19)

___

### elapsed

• `Private` **elapsed**: `number` = `0`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L24)

___

### id

• **id**: `string`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:39](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L39)

___

### observers

• **observers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canceled` | [`Observable`](Observers_Observable.Observable.md)\<`void`\> |
| `died` | [`Observable`](Observers_Observable.Observable.md)\<[`SafePromiseDiedError`](Promises_SafePromise.SafePromiseDiedError.md)\> |
| `error` | [`Observable`](Observers_Observable.Observable.md)\<`any`\> |
| `finally` | [`Observable`](Observers_Observable.Observable.md)\<`void`\> |
| `rejected` | [`Observable`](Observers_Observable.Observable.md)\<`void`\> |
| `resolved` | [`Observable`](Observers_Observable.Observable.md)\<`T`\> |

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L30)

___

### paused

• `Private` **paused**: `boolean` = `false`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L20)

___

### reject

• `Private` **reject**: `Function`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L22)

___

### resolve

• `Private` **resolve**: `Function`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L21)

___

### startTime

• `Private` **startTime**: `number` = `0`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L23)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:86](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L86)

___

### clearDieTimer

▸ **clearDieTimer**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:82](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L82)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:49](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L49)

___

### isResolved

▸ **isResolved**(): `boolean`

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:46](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L46)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:53](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L53)

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:62](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L62)

___

### run

▸ **run**(): `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:94](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L94)

___

### setDie

▸ **setDie**(`timeOut?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeOut` | `number` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:70](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L70)
