---
id: "Controls_Control_types"
title: "Module: Controls/Control.types"
sidebar_label: "Controls/Control.types"
custom_edit_url: null
---

## Enumerations

- [ControlInputTypes](../enums/Controls_Control_types.ControlInputTypes.md)

## Type Aliases

### ControlData

Ƭ **ControlData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | (`event`: [`DCEvents`](Events_DivineControlsEventManager.md#dcevents)) => `void` |
| `groupId` | `string` |
| `id` | `string` |
| `input` | [`ControlInputData`](Controls_Control_types.md#controlinputdata) |
| `name` | `string` |

#### Defined in

Controls/Control.types.ts:45

___

### ControlGroupData

Ƭ **ControlGroupData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

Controls/Control.types.ts:53

___

### ControlInputData

Ƭ **ControlInputData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gamepad-axes?` | \{ `stick`: ``"Left"`` \| ``"Right"``  } |
| `gamepad-axes.stick` | ``"Left"`` \| ``"Right"`` |
| `gamepad-button?` | \{ `button`: [`DefaultGamePadButtons`](Controls_Control_types.md#defaultgamepadbuttons) ; `holdDelay?`: `number` ; `initHoldDelay?`: `number` ; `mode`: [`InputModeTypes`](Controls_Control_types.md#inputmodetypes)  } |
| `gamepad-button.button` | [`DefaultGamePadButtons`](Controls_Control_types.md#defaultgamepadbuttons) |
| `gamepad-button.holdDelay?` | `number` |
| `gamepad-button.initHoldDelay?` | `number` |
| `gamepad-button.mode` | [`InputModeTypes`](Controls_Control_types.md#inputmodetypes) |
| `keyboard?` | \{ `alt?`: `boolean` ; `ctrl?`: `boolean` ; `holdDelay?`: `number` ; `initHoldDelay?`: `number` ; `key`: `string` ; `mode`: [`InputModeTypes`](Controls_Control_types.md#inputmodetypes) ; `shift?`: `boolean`  } |
| `keyboard.alt?` | `boolean` |
| `keyboard.ctrl?` | `boolean` |
| `keyboard.holdDelay?` | `number` |
| `keyboard.initHoldDelay?` | `number` |
| `keyboard.key` | `string` |
| `keyboard.mode` | [`InputModeTypes`](Controls_Control_types.md#inputmodetypes) |
| `keyboard.shift?` | `boolean` |
| `mouse?` | \{ `button`: [`MouseButtonTypes`](Controls_Control_types.md#mousebuttontypes) ; `holdDelay?`: `number` ; `initHoldDelay?`: `number` ; `mode`: [`InputModeTypes`](Controls_Control_types.md#inputmodetypes)  } |
| `mouse.button` | [`MouseButtonTypes`](Controls_Control_types.md#mousebuttontypes) |
| `mouse.holdDelay?` | `number` |
| `mouse.initHoldDelay?` | `number` |
| `mouse.mode` | [`InputModeTypes`](Controls_Control_types.md#inputmodetypes) |
| `scroll?` | \{ `mode`: ``"up"`` \| ``"down"``  } |
| `scroll.mode` | ``"up"`` \| ``"down"`` |

#### Defined in

Controls/Control.types.ts:13

___

### ControlInputDataNode

Ƭ **ControlInputDataNode**\<`T`\>: [`ControlInputData`](Controls_Control_types.md#controlinputdata)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ControlInputKeys` |

#### Defined in

Controls/Control.types.ts:43

___

### DefaultGamePadButtons

Ƭ **DefaultGamePadButtons**: ``"A"`` \| ``"B"`` \| ``"X"`` \| ``"Y"`` \| ``"LB"`` \| ``"RB"`` \| ``"Left Trigger"`` \| ``"Right Trigger"`` \| ``"Back"`` \| ``"Start"`` \| ``"Left Analog In"`` \| ``"Right Analog In"`` \| ``"DPad Up"`` \| ``"DPad Down"`` \| ``"DPad Left"`` \| ``"DPad Right"``

#### Defined in

Controls/Control.types.ts:58

___

### InputModeTypes

Ƭ **InputModeTypes**: ``"down"`` \| ``"up"`` \| ``"hold"``

#### Defined in

Controls/Control.types.ts:11

___

### MouseButtonTypes

Ƭ **MouseButtonTypes**: ``"primary"`` \| ``"secondary"`` \| ``"middle"``

#### Defined in

Controls/Control.types.ts:12
