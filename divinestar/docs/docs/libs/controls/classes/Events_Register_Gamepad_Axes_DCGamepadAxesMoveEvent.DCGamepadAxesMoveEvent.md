---
id: "Events_Register_Gamepad_Axes_DCGamepadAxesMoveEvent.DCGamepadAxesMoveEvent"
title: "Class: DCGamepadAxesMoveEvent"
sidebar_label: "DCGamepadAxesMoveEvent"
custom_edit_url: null
---

[Events/Register/Gamepad/Axes/DCGamepadAxesMoveEvent](../modules/Events_Register_Gamepad_Axes_DCGamepadAxesMoveEvent.md).DCGamepadAxesMoveEvent

## Hierarchy

- [`DCBaseGamepadAxesEvent`](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md)

  ↳ **`DCGamepadAxesMoveEvent`**

## Constructors

### constructor

• **new DCGamepadAxesMoveEvent**(`controler`): [`DCGamepadAxesMoveEvent`](Events_Register_Gamepad_Axes_DCGamepadAxesMoveEvent.DCGamepadAxesMoveEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCGamepadAxesMoveEvent`](Events_Register_Gamepad_Axes_DCGamepadAxesMoveEvent.DCGamepadAxesMoveEvent.md)

#### Inherited from

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[constructor](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### axes

• **axes**: [x: number, y: number]

#### Inherited from

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[axes](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#axes)

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:5

___

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[controler](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` **eventType**: [`GamePadAxesMove`](../enums/Events_Event_types.ControlEventTypes.md#gamepadaxesmove) = `ControlEventTypes.GamePadAxesMove`

#### Overrides

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[eventType](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#eventtype)

#### Defined in

Events/Register/Gamepad/Axes/DCGamepadAxesMoveEvent.ts:8

___

### inputType

• `Readonly` **inputType**: [`GamePadAxes`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadaxes) = `ControlInputTypes.GamePadAxes`

#### Inherited from

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[inputType](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#inputtype)

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:6

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.GamePadAxesMove`

#### Defined in

Events/Register/Gamepad/Axes/DCGamepadAxesMoveEvent.ts:7

## Methods

### getStick

▸ **getStick**(): `undefined` \| ``"Left"`` \| ``"Right"``

#### Returns

`undefined` \| ``"Left"`` \| ``"Right"``

#### Inherited from

[DCBaseGamepadAxesEvent](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md).[getStick](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md#getstick)

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:8
