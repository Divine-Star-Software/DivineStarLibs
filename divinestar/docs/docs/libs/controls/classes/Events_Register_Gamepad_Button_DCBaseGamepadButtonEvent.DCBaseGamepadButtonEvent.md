---
id: "Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent"
title: "Class: DCBaseGamepadButtonEvent"
sidebar_label: "DCBaseGamepadButtonEvent"
custom_edit_url: null
---

[Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent](../modules/Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.md).DCBaseGamepadButtonEvent

## Hierarchy

- [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<[`GamePadButton`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadbutton)\>

  ↳ **`DCBaseGamepadButtonEvent`**

  ↳↳ [`DCGamepadDownEvent`](Events_Register_Gamepad_Button_DCGamepadButtonDownEvent.DCGamepadDownEvent.md)

  ↳↳ [`DCGamepadButtonHoldEvent`](Events_Register_Gamepad_Button_DCGamepadButtonHoldEvent.DCGamepadButtonHoldEvent.md)

  ↳↳ [`DCGamepadUpEvent`](Events_Register_Gamepad_Button_DCGamepadButtonUpEvent.DCGamepadUpEvent.md)

## Constructors

### constructor

• **new DCBaseGamepadButtonEvent**(`controler`): [`DCBaseGamepadButtonEvent`](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCBaseGamepadButtonEvent`](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md)

#### Inherited from

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[constructor](Events_DivineControlEventBase.DivineControlEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

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

• `Readonly` **inputType**: [`GamePadButton`](../enums/Controls_Control_types.ControlInputTypes.md#gamepadbutton) = `ControlInputTypes.GamePadButton`

#### Overrides

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[inputType](Events_DivineControlEventBase.DivineControlEvent.md#inputtype)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:5

## Methods

### getButton

▸ **getButton**(): `undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Returns

`undefined` \| [`DefaultGamePadButtons`](../modules/Controls_Control_types.md#defaultgamepadbuttons)

#### Defined in

Events/Register/Gamepad/Button/DCBaseGamepadButtonEvent.ts:7
