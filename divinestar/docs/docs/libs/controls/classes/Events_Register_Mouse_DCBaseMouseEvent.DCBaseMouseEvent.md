---
id: "Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent"
title: "Class: DCBaseMouseEvent"
sidebar_label: "DCBaseMouseEvent"
custom_edit_url: null
---

[Events/Register/Mouse/DCBaseMouseEvent](../modules/Events_Register_Mouse_DCBaseMouseEvent.md).DCBaseMouseEvent

## Hierarchy

- [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<[`Mouse`](../enums/Controls_Control_types.ControlInputTypes.md#mouse)\>

  ↳ **`DCBaseMouseEvent`**

  ↳↳ [`DCMouseDownEvent`](Events_Register_Mouse_DCMouseDownEvent.DCMouseDownEvent.md)

  ↳↳ [`DCMouseHoldEvent`](Events_Register_Mouse_DCMouseHoldEvent.DCMouseHoldEvent.md)

  ↳↳ [`DCMouseUpEvent`](Events_Register_Mouse_DCMouseUpEvent.DCMouseUpEvent.md)

## Constructors

### constructor

• **new DCBaseMouseEvent**(`controler`): [`DCBaseMouseEvent`](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCBaseMouseEvent`](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md)

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

• `Readonly` **inputType**: [`Mouse`](../enums/Controls_Control_types.ControlInputTypes.md#mouse) = `ControlInputTypes.Mouse`

#### Overrides

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[inputType](Events_DivineControlEventBase.DivineControlEvent.md#inputtype)

#### Defined in

Events/Register/Mouse/DCBaseMouseEvent.ts:4

## Methods

### getButton

▸ **getButton**(): `undefined` \| [`MouseButtonTypes`](../modules/Controls_Control_types.md#mousebuttontypes)

#### Returns

`undefined` \| [`MouseButtonTypes`](../modules/Controls_Control_types.md#mousebuttontypes)

#### Defined in

Events/Register/Mouse/DCBaseMouseEvent.ts:5
