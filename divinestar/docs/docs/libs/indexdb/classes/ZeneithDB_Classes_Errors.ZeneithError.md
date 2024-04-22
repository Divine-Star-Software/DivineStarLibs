---
id: "ZeneithDB_Classes_Errors.ZeneithError"
title: "Class: ZeneithError"
sidebar_label: "ZeneithError"
custom_edit_url: null
---

[ZeneithDB/Classes/Errors](../modules/ZeneithDB_Classes_Errors.md).ZeneithError

## Hierarchy

- `Error`

  ↳ **`ZeneithError`**

## Constructors

### constructor

• **new ZeneithError**(`message`, `data`): [`ZeneithError`](ZeneithDB_Classes_Errors.ZeneithError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `data` | `Object` |
| `data.blocked?` | `boolean` |
| `data.collection?` | `string` |
| `data.dataBase?` | `any` |
| `data.dataBaseID?` | `string` |
| `data.event?` | `any` |
| `data.functionName?` | `string` |

#### Returns

[`ZeneithError`](ZeneithDB_Classes_Errors.ZeneithError.md)

#### Overrides

Error.constructor

#### Defined in

divinestar/indexdb/src/ZeneithDB/Classes/Errors.ts:6

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

docs/node_modules/typescript/lib/lib.es2022.error.d.ts:24

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
