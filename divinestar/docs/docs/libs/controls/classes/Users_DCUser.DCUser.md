---
id: "Users_DCUser.DCUser"
title: "Class: DCUser"
sidebar_label: "DCUser"
custom_edit_url: null
---

[Users/DCUser](../modules/Users_DCUser.md).DCUser

## Constructors

### constructor

• **new DCUser**(`id`): [`DCUser`](Users_DCUser.DCUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`DCUser`](Users_DCUser.DCUser.md)

#### Defined in

Users/DCUser.ts:10

## Properties

### \_controls

• **\_controls**: `Map`\<`string`, [`DCControl`](Controls_DCControl.DCControl.md)\>

#### Defined in

Users/DCUser.ts:9

___

### \_controlsMapped

• **\_controlsMapped**: `Map`\<`string`, [`DCControl`](Controls_DCControl.DCControl.md)\>

#### Defined in

Users/DCUser.ts:8

___

### \_events

• **\_events**: `Map`\<`string`, [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`any`\>\>

#### Defined in

Users/DCUser.ts:7

___

### id

• **id**: `number`

#### Defined in

Users/DCUser.ts:10

## Methods

### clearControls

▸ **clearControls**(): `void`

#### Returns

`void`

#### Defined in

Users/DCUser.ts:19

___

### getControlById

▸ **getControlById**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

Users/DCUser.ts:12

___

### getControlByType

▸ **getControlByType**(`id`): `undefined` \| [`DCControl`](Controls_DCControl.DCControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`DCControl`](Controls_DCControl.DCControl.md)

#### Defined in

Users/DCUser.ts:15

___

### registerControl

▸ **registerControl**(`controlData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controlData` | [`ControlData`](../modules/Controls_Control_types.md#controldata) |

#### Returns

`void`

#### Defined in

Users/DCUser.ts:25
