---
id: "Events_Register_Keyboard_DCKeyUpEvent.DCKeyUpEvent"
title: "Class: DCKeyUpEvent"
sidebar_label: "DCKeyUpEvent"
custom_edit_url: null
---

[Events/Register/Keyboard/DCKeyUpEvent](../modules/Events_Register_Keyboard_DCKeyUpEvent.md).DCKeyUpEvent

## Hierarchy

- [`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

  ↳ **`DCKeyUpEvent`**

## Constructors

### constructor

• **new DCKeyUpEvent**(`controler`): [`DCKeyUpEvent`](Events_Register_Keyboard_DCKeyUpEvent.DCKeyUpEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCKeyUpEvent`](Events_Register_Keyboard_DCKeyUpEvent.DCKeyUpEvent.md)

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

• `Readonly` **eventType**: [`KeyBoardUp`](../enums/Events_Event_types.ControlEventTypes.md#keyboardup) = `ControlEventTypes.KeyBoardUp`

#### Overrides

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[eventType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#eventtype)

#### Defined in

Events/Register/Keyboard/DCKeyUpEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`KeyBoard`](../enums/Controls_Control_types.ControlInputTypes.md#keyboard) = `ControlInputTypes.KeyBoard`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[inputType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#inputtype)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.KeyBoardUp`

#### Defined in

Events/Register/Keyboard/DCKeyUpEvent.ts:5

## Methods

### getKey

▸ **getKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[getKey](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#getkey)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:6
