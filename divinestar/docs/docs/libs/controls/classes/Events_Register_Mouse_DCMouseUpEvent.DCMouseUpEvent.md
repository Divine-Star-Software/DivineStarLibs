---
id: "Events_Register_Mouse_DCMouseUpEvent.DCMouseUpEvent"
title: "Class: DCMouseUpEvent"
sidebar_label: "DCMouseUpEvent"
custom_edit_url: null
---

[Events/Register/Mouse/DCMouseUpEvent](../modules/Events_Register_Mouse_DCMouseUpEvent.md).DCMouseUpEvent

## Hierarchy

- [`DCBaseMouseEvent`](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md)

  ↳ **`DCMouseUpEvent`**

## Constructors

### constructor

• **new DCMouseUpEvent**(`controler`): [`DCMouseUpEvent`](Events_Register_Mouse_DCMouseUpEvent.DCMouseUpEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCMouseUpEvent`](Events_Register_Mouse_DCMouseUpEvent.DCMouseUpEvent.md)

#### Inherited from

[DCBaseMouseEvent](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md).[constructor](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DCBaseMouseEvent](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md).[controler](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` **eventType**: [`MouseUp`](../enums/Events_Event_types.ControlEventTypes.md#mouseup) = `ControlEventTypes.MouseUp`

#### Overrides

[DCBaseMouseEvent](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md).[eventType](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md#eventtype)

#### Defined in

Events/Register/Mouse/DCMouseUpEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`Mouse`](../enums/Controls_Control_types.ControlInputTypes.md#mouse) = `ControlInputTypes.Mouse`

#### Inherited from

[DCBaseMouseEvent](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md).[inputType](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md#inputtype)

#### Defined in

Events/Register/Mouse/DCBaseMouseEvent.ts:4

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.MouseUp`

#### Defined in

Events/Register/Mouse/DCMouseUpEvent.ts:5

## Methods

### getButton

▸ **getButton**(): `undefined` \| [`MouseButtonTypes`](../modules/Controls_Control_types.md#mousebuttontypes)

#### Returns

`undefined` \| [`MouseButtonTypes`](../modules/Controls_Control_types.md#mousebuttontypes)

#### Inherited from

[DCBaseMouseEvent](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md).[getButton](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md#getbutton)

#### Defined in

Events/Register/Mouse/DCBaseMouseEvent.ts:5
