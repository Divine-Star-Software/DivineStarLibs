---
id: "HoldRegister.HoldRegister"
title: "Class: HoldRegister"
sidebar_label: "HoldRegister"
custom_edit_url: null
---

[HoldRegister](../modules/HoldRegister.md).HoldRegister

## Constructors

### constructor

• **new HoldRegister**(): [`HoldRegister`](HoldRegister.HoldRegister.md)

#### Returns

[`HoldRegister`](HoldRegister.HoldRegister.md)

## Properties

### \_functions

▪ `Static` `Private` **\_functions**: `Map`\<`string`, \{ `activeDelay`: `number` ; `activeTime`: `number` ; `delay`: `number` ; `run`: `Function` ; `time`: `number`  }\>

#### Defined in

HoldRegister.ts:2

## Methods

### addHold

▸ **addHold**(`id`, `run`, `delay`, `activeDelay?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `run` | `Function` | `undefined` |
| `delay` | `number` | `undefined` |
| `activeDelay` | `number` | `0` |

#### Returns

`void`

#### Defined in

HoldRegister.ts:13

___

### hasHold

▸ **hasHold**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

HoldRegister.ts:27

___

### removeHold

▸ **removeHold**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

HoldRegister.ts:23

___

### run

▸ **run**(`frameDelta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameDelta` | `number` |

#### Returns

`void`

#### Defined in

HoldRegister.ts:31
