---
id: "Events_Register_Keyboard_DCKeyDownEvent.DCKeyDownEvent"
title: "Class: DCKeyDownEvent"
sidebar_label: "DCKeyDownEvent"
custom_edit_url: null
---

[Events/Register/Keyboard/DCKeyDownEvent](../modules/Events_Register_Keyboard_DCKeyDownEvent.md).DCKeyDownEvent

## Hierarchy

- [`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

  ↳ **`DCKeyDownEvent`**

## Constructors

### constructor

• **new DCKeyDownEvent**(`controler`): [`DCKeyDownEvent`](Events_Register_Keyboard_DCKeyDownEvent.DCKeyDownEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCKeyDownEvent`](Events_Register_Keyboard_DCKeyDownEvent.DCKeyDownEvent.md)

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

• `Readonly` **eventType**: [`KeyBoardDown`](../enums/Events_Event_types.ControlEventTypes.md#keyboarddown) = `ControlEventTypes.KeyBoardDown`

#### Overrides

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[eventType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#eventtype)

#### Defined in

Events/Register/Keyboard/DCKeyDownEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`KeyBoard`](../enums/Controls_Control_types.ControlInputTypes.md#keyboard) = `ControlInputTypes.KeyBoard`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[inputType](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#inputtype)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:5

___

### observers

• **observers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onRelease` | `Observable`\<`void`\> |

#### Defined in

Events/Register/Keyboard/DCKeyDownEvent.ts:8

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.KeyBoardDown`

#### Defined in

Events/Register/Keyboard/DCKeyDownEvent.ts:5

## Methods

### getKey

▸ **getKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DCBaseKeyEvent](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md).[getKey](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md#getkey)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:6
