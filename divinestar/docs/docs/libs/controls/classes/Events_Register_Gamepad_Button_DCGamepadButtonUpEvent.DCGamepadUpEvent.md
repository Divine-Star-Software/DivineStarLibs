---
id: "Events_Register_Gamepad_Button_DCGamepadButtonUpEvent.DCGamepadUpEvent"
title: "Class: DCGamepadUpEvent"
sidebar_label: "DCGamepadUpEvent"
custom_edit_url: null
---

[Events/Register/Gamepad/Button/DCGamepadButtonUpEvent](../modules/Events_Register_Gamepad_Button_DCGamepadButtonUpEvent.md).DCGamepadUpEvent

## Hierarchy

- [`DCBaseGamepadButtonEvent`](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md)

  ↳ **`DCGamepadUpEvent`**

## Constructors

### constructor

• **new DCGamepadUpEvent**(`controler`): [`DCGamepadUpEvent`](Events_Register_Gamepad_Button_DCGamepadButtonUpEvent.DCGamepadUpEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCGamepadUpEvent`](Events_Register_Gamepad_Button_DCGamepadButtonUpEvent.DCGamepadUpEvent.md)

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

Events/Register/Gamepad/Button/DCGamepadButtonUpEvent.ts:5

___

### inputType

• `Readonly` **inputType**: [`GamePadButton`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadbutton) = `ControlInputTypes.GamePadButton`

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[inputType](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#inputtype)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.GamePadButtonUp`

#### Defined in

Events/Register/Gamepad/Button/DCGamepadButtonUpEvent.ts:4

## Methods

### getButton

▸ **getButton**(): `undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Returns

`undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Inherited from

[DCBaseGamepadButtonEvent](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md).[getButton](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md#getbutton)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:7
