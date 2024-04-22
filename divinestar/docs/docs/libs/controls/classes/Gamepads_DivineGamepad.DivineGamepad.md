---
id: "Gamepads_DivineGamepad.DivineGamepad"
title: "Class: DivineGamepad"
sidebar_label: "DivineGamepad"
custom_edit_url: null
---

[Gamepads/DivineGamepad](../modules/Gamepads_DivineGamepad.md).DivineGamepad

## Constructors

### constructor

• **new DivineGamepad**(`user`, `gamepad`): [`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`DCUser`](Users_DCUser.DCUser.md) |
| `gamepad` | `Gamepad` |

#### Returns

[`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)

#### Defined in

Gamepads/DivineGamepad.ts:45

## Properties

### \_axes1

• **\_axes1**: `number`[]

#### Defined in

Gamepads/DivineGamepad.ts:55

___

### \_axes2

• **\_axes2**: `number`[]

#### Defined in

Gamepads/DivineGamepad.ts:56

___

### axes

• **axes**: `number`[]

#### Defined in

Gamepads/DivineGamepad.ts:38

___

### bindings

• **bindings**: [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)[]

#### Defined in

Gamepads/DivineGamepad.ts:35

___

### gamepad

• **gamepad**: `Gamepad`

#### Defined in

Gamepads/DivineGamepad.ts:45

___

### invertYAxis

• **invertYAxis**: `boolean`

#### Defined in

Gamepads/DivineGamepad.ts:33

___

### observables

• **observables**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buttonPressed` | `Observable`\<\{ `key`: `string` ; `number`: `number`  }\> |
| `buttonReleased` | `Observable`\<\{ `key`: `string` ; `number`: `number`  }\> |

#### Defined in

Gamepads/DivineGamepad.ts:40

___

### pressed

• **pressed**: `Record`\<`string`, `number`\> = `{}`

#### Defined in

Gamepads/DivineGamepad.ts:36

___

### user

• **user**: [`DCUser`](Users_DCUser.DCUser.md)

#### Defined in

Gamepads/DivineGamepad.ts:45

___

### BINDINGS

▪ `Static` **BINDINGS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `XBOX360` | [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)[] |

#### Defined in

Gamepads/DivineGamepad.ts:10

## Methods

### \_testAxes

▸ **_testAxes**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

Gamepads/DivineGamepad.ts:58

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

Gamepads/DivineGamepad.ts:62
