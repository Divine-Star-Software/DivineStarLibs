---
id: "Promises_SafePromise.SafePromiseDiedError"
title: "Class: SafePromiseDiedError"
sidebar_label: "SafePromiseDiedError"
custom_edit_url: null
---

[Promises/SafePromise](../modules/Promises_SafePromise.md).SafePromiseDiedError

## Hierarchy

- `Error`

  ↳ **`SafePromiseDiedError`**

## Constructors

### constructor

• **new SafePromiseDiedError**(`promise`): [`SafePromiseDiedError`](Promises_SafePromise.SafePromiseDiedError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | [`SafePromise`](Promises_SafePromise.SafePromise.md)\<`any`\> |

#### Returns

[`SafePromiseDiedError`](Promises_SafePromise.SafePromiseDiedError.md)

#### Overrides

Error.constructor

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L11)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

docs/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### fatal

• **fatal**: `boolean` = `true`

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L10)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### promise

• **promise**: [`SafePromise`](Promises_SafePromise.SafePromise.md)\<`any`\>

#### Defined in

[divinestar/utils/src/Promises/SafePromise.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Promises/SafePromise.ts#L11)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
