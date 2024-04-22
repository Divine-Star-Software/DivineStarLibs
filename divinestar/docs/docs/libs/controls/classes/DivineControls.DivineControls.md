---
id: "DivineControls.DivineControls"
title: "Class: DivineControls"
sidebar_label: "DivineControls"
custom_edit_url: null
---

[DivineControls](../modules/DivineControls.md).DivineControls

## Constructors

### constructor

• **new DivineControls**(): [`DivineControls`](DivineControls.DivineControls.md)

#### Returns

[`DivineControls`](DivineControls.DivineControls.md)

#### Defined in

DivineControls.ts:23

## Properties

### \_capturedData

▪ `Static` **\_capturedData**: ``null`` \| `RecursivePartial`\<[`ControlInputData`](../modules/Controls_Control_types.md#controlinputdata)\> = `null`

#### Defined in

DivineControls.ts:21

___

### \_capturing

▪ `Static` **\_capturing**: `boolean` = `false`

#### Defined in

DivineControls.ts:19

___

### \_capturingMode

▪ `Static` **\_capturingMode**: ``"keyboard"`` \| ``"gamepad"`` = `"gamepad"`

#### Defined in

DivineControls.ts:20

___

### \_initalized

▪ `Static` `Private` **\_initalized**: `boolean` = `false`

#### Defined in

DivineControls.ts:27

___

### \_os

▪ `Static` **\_os**: `OSNames` = `Environment.system.os`

#### Defined in

DivineControls.ts:17

___

### controls

▪ `Static` **controls**: `ObjectCollection`\<[`ControlData`](../modules/Controls_Control_types.md#controldata)\>

#### Defined in

DivineControls.ts:16

___

### mainUser

▪ `Static` **mainUser**: [`DCUser`](Users_DCUser.DCUser.md)

#### Defined in

DivineControls.ts:22

## Methods

### captureControlForInput

▸ **captureControlForInput**(`controlId`, `mode?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `controlId` | `string` | `undefined` |
| `mode` | ``"keyboard"`` \| ``"gamepad"`` | `"keyboard"` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

DivineControls.ts:55

___

### clearControls

▸ **clearControls**(): `void`

#### Returns

`void`

#### Defined in

DivineControls.ts:25

___

### getControl

▸ **getControl**(`id`): ``false`` \| [`ControlData`](../modules/Controls_Control_types.md#controldata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``false`` \| [`ControlData`](../modules/Controls_Control_types.md#controldata)

#### Defined in

DivineControls.ts:51

___

### init

▸ **init**(): typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Returns

typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Defined in

DivineControls.ts:28

___

### injestInputData

▸ **injestInputData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`string`, [`ControlInputData`](../modules/Controls_Control_types.md#controlinputdata)][] |

#### Returns

`void`

#### Defined in

DivineControls.ts:96

___

### reInitControls

▸ **reInitControls**(): `void`

#### Returns

`void`

#### Defined in

DivineControls.ts:24

___

### registerControlGroups

▸ **registerControlGroups**(`data`): typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ObjectCollectionGroupData`[] |

#### Returns

typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Defined in

DivineControls.ts:41

___

### registerControls

▸ **registerControls**(`data`): typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ControlData`](../modules/Controls_Control_types.md#controldata)[] |

#### Returns

typeof [`DivineControls`](DivineControls.DivineControls.md)

#### Defined in

DivineControls.ts:46

___

### serializeInputData

▸ **serializeInputData**(): `StoredCollection`

#### Returns

`StoredCollection`

#### Defined in

DivineControls.ts:92

___

### update

▸ **update**(`delta?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delta` | `number` | `0.16` |

#### Returns

`void`

#### Defined in

DivineControls.ts:100

___

### updateControlInputData

▸ **updateControlInputData**(`controlId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controlId` | `string` |
| `data` | `RecursivePartial`\<[`ControlInputData`](../modules/Controls_Control_types.md#controlinputdata)\> |

#### Returns

`void`

#### Defined in

DivineControls.ts:75
