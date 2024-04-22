---
id: "Events_Register_Gamepad_Button_DCGamepadButtonHoldEvent.DCGamepadButtonHoldEvent"
title: "Class: DCGamepadButtonHoldEvent"
sidebar_label: "DCGamepadButtonHoldEvent"
custom_edit_url: null
---

[Events/Register/Gamepad/Button/DCGamepadButtonHoldEvent](../modules/Events_Register_Gamepad_Button_DCGamepadButtonHoldEvent.md).DCGamepadButtonHoldEvent

## Hierarchy

- [`DCBaseGamepadButtonEvent`](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md)

  ↳ **`DCGamepadButtonHoldEvent`**

## Constructors

### constructor

• **new DCGamepadButtonHoldEvent**(`controler`): [`DCGamepadButtonHoldEvent`](Events_Register_Gamepad_Button_DCGamepadButtonHoldEvent.DCGamepadButtonHoldEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCGamepadButtonHoldEvent`](Events_Register_Gamepad_Button_DCGamepadButtonHoldEvent.DCGamepadButtonHoldEvent.md)

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[constructor](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[controler](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` **eventType**: [`GamePadButtonHold`](../enums/Events_Event_types.ControlEventTypes.md#gamepadbuttonhold) = `ControlEventTypes.GamePadButtonHold`

#### Overrides

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[eventType](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#eventtype)

#### Defined in

Events/Register/Gamepad/Button/DCGamepadButtonHoldEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`GamePadButton`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadbutton) = `ControlInputTypes.GamePadButton`

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[inputType](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#inputtype)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.GamePadButtonHold`

#### Defined in

Events/Register/Gamepad/Button/DCGamepadButtonHoldEvent.ts:5

## Methods

### getButton

▸ **getButton**(): `undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Returns

`undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[getButton](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#getbutton)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:7
