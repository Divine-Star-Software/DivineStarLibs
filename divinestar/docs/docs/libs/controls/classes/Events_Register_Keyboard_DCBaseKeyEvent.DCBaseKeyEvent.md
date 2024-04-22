---
id: "Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent"
title: "Class: DCBaseKeyEvent"
sidebar_label: "DCBaseKeyEvent"
custom_edit_url: null
---

[Events/Register/Keyboard/DCBaseKeyEvent](../modules/Events_Register_Keyboard_DCBaseKeyEvent.md).DCBaseKeyEvent

## Hierarchy

- [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<[`KeyBoard`](../enums/Controls_Control_types.ControlInputTypes.md#keyboard)\>

  ↳ **`DCBaseKeyEvent`**

  ↳↳ [`DCKeyDownEvent`](Events_Register_Keyboard_DCKeyDownEvent.DCKeyDownEvent.md)

  ↳↳ [`DCKeyHoldEvent`](Events_Register_Keyboard_DCKeyHoldEvent.DCKeyHoldEvent.md)

  ↳↳ [`DCKeyUpEvent`](Events_Register_Keyboard_DCKeyUpEvent.DCKeyUpEvent.md)

## Constructors

### constructor

• **new DCBaseKeyEvent**(`controler`): [`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

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

• `Readonly` **inputType**: [`KeyBoard`](../enums/Controls_Control_types.ControlInputTypes.md#keyboard) = `ControlInputTypes.KeyBoard`

#### Overrides

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[inputType](Events_DivineControlEventBase.DivineControlEvent.md#inputtype)

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:5

## Methods

### getKey

▸ **getKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

Events/Register/Keyboard/DCBaseKeyEvent.ts:6
