---
id: "Events_Register_Keyboard_DCKeyHoldEvent.DCKeyHoldEvent"
title: "Class: DCKeyHoldEvent"
sidebar_label: "DCKeyHoldEvent"
custom_edit_url: null
---

[Events/Register/Keyboard/DCKeyHoldEvent](../modules/Events_Register_Keyboard_DCKeyHoldEvent.md).DCKeyHoldEvent

## Hierarchy

- [`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

  ↳ **`DCKeyHoldEvent`**

## Constructors

### constructor

• **new DCKeyHoldEvent**(`controler`): [`DCKeyHoldEvent`](Events_Register_Keyboard_DCKeyHoldEvent.DCKeyHoldEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCKeyHoldEvent`](Events_Register_Keyboard_DCKeyHoldEvent.DCKeyHoldEvent.md)

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[constructor](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[controler](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` **eventType**: [`KeyBoardHold`](../enums/Events_Event_types.ControlEventTypes.md#keyboardhold) = `ControlEventTypes.KeyBoardHold`

#### Overrides

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[eventType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#eventtype)

#### Defined in

Events/Register/Keyboard/DCKeyHoldEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`KeyBoard`](../enums/Controls_Control_types.ControlInputTypes.md#keyboard) = `ControlInputTypes.KeyBoard`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[inputType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#inputtype)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.KeyBoardHold`

#### Defined in

Events/Register/Keyboard/DCKeyHoldEvent.ts:5

## Methods

### getKey

▸ **getKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[getKey](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#getkey)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:6
