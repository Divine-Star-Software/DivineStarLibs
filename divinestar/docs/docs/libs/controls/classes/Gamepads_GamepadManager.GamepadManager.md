---
id: "Gamepads_GamepadManager.GamepadManager"
title: "Class: GamepadManager"
sidebar_label: "GamepadManager"
custom_edit_url: null
---

[Gamepads/GamepadManager](../modules/Gamepads_GamepadManager.md).GamepadManager

## Constructors

### constructor

• **new GamepadManager**(): [`GamepadManager`](Gamepads_GamepadManager.GamepadManager.md)

#### Returns

[`GamepadManager`](Gamepads_GamepadManager.GamepadManager.md)

## Properties

### \_gamepads

▪ `Static` **\_gamepads**: `Map`\<`number`, [`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)\>

#### Defined in

Gamepads/GamepadManager.ts:6

___

### observers

▪ `Static` **observers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gamepadAdded` | `Observable`\<[`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)\> |
| `gamepadRemoved` | `Observable`\<[`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)\> |

#### Defined in

Gamepads/GamepadManager.ts:8

## Methods

### addGamepad

▸ **addGamepad**(`event`): [`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

[`DivineGamepad`](Gamepads_DivineGamepad.DivineGamepad.md)

#### Defined in

Gamepads/GamepadManager.ts:13

___

### removeGamepad

▸ **removeGamepad**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

`void`

#### Defined in

Gamepads/GamepadManager.ts:20

___

### updateGamepads

▸ **updateGamepads**(): `void`

#### Returns

`void`

#### Defined in

Gamepads/GamepadManager.ts:27
