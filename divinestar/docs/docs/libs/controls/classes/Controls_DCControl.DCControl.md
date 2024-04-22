---
id: "Controls_DCControl.DCControl"
title: "Class: DCControl"
sidebar_label: "DCControl"
custom_edit_url: null
---

[Controls/DCControl](../modules/Controls_DCControl.md).DCControl

## Constructors

### constructor

• **new DCControl**(`user`, `data`): [`DCControl`](Controls_DCControl.DCControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`DCUser`](Users_DCUser.DCUser.md) |
| `data` | [`ControlData`](../modules/Controls_Control_types.md#controldata) |

#### Returns

[`DCControl`](Controls_DCControl.DCControl.md)

#### Defined in

Controls/DCControl.ts:16

## Properties

### \_events

• **\_events**: `Map`\<`string`, [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`any`\>\>

#### Defined in

Controls/DCControl.ts:19

___

### data

• **data**: [`ControlData`](../modules/Controls_Control_types.md#controldata)

#### Defined in

Controls/DCControl.ts:16

___

### user

• **user**: [`DCUser`](Users_DCUser.DCUser.md)

#### Defined in

Controls/DCControl.ts:16

## Methods

### getEvent

▸ **getEvent**(`id`): `undefined` \| [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`any`\>

#### Defined in

Controls/DCControl.ts:27

___

### registerEvents

▸ **registerEvents**(`control`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | [`ControlInputData`](../modules/Controls_Control_types.md#controlinputdata) |

#### Returns

`void`

#### Defined in

Controls/DCControl.ts:30

___

### run

▸ **run**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

Controls/DCControl.ts:21
