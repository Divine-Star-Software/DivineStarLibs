---
id: "Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent"
title: "Class: DCBaseGamepadAxesEvent"
sidebar_label: "DCBaseGamepadAxesEvent"
custom_edit_url: null
---

[Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent](../modules/Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.md).DCBaseGamepadAxesEvent

## Hierarchy

- [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<[`GamePadAxes`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadaxes)\>

  ↳ **`DCBaseGamepadAxesEvent`**

  ↳↳ [`DCGamepadAxesMoveEvent`](Events_Register_Gamepad_Axes_DCGamepadAxesMoveEvent.DCGamepadAxesMoveEvent.md)

## Constructors

### constructor

• **new DCBaseGamepadAxesEvent**(`controler`): [`DCBaseGamepadAxesEvent`](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCBaseGamepadAxesEvent`](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md)

#### Inherited from

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[constructor](Events_DivineControlEventBase.DivineControlEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### axes

• **axes**: [x: number, y: number]

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:5

___

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[controler](Events_DivineControlEventBase.DivineControlEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` `Abstract` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md)

#### Inherited from

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[eventType](Events_DivineControlEventBase.DivineControlEvent.md#eventtype)

#### Defined in

Events/DivineControlEventBase.ts:16

___

### inputType

• `Readonly` **inputType**: [`GamePadAxes`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadaxes) = `ControlInputTypes.GamePadAxes`

#### Overrides

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[inputType](Events_DivineControlEventBase.DivineControlEvent.md#inputtype)

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:6

## Methods

### getStick

▸ **getStick**(): `undefined` \| ``"Left"`` \| ``"Right"``

#### Returns

`undefined` \| ``"Left"`` \| ``"Right"``

#### Defined in

Events/Register/Gamepad/Axes/DCBaseGamepadAxesEvent.ts:8
