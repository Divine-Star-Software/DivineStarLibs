---
id: "Events_Register_Mouse_Wheel_DCWheelDownEvent.DCWheelDownEvent"
title: "Class: DCWheelDownEvent"
sidebar_label: "DCWheelDownEvent"
custom_edit_url: null
---

[Events/Register/Mouse/Wheel/DCWheelDownEvent](../modules/Events_Register_Mouse_Wheel_DCWheelDownEvent.md).DCWheelDownEvent

## Hierarchy

- [`DCBaseWheelEvent`](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md)

  ↳ **`DCWheelDownEvent`**

## Constructors

### constructor

• **new DCWheelDownEvent**(`controler`): [`DCWheelDownEvent`](Events_Register_Mouse_Wheel_DCWheelDownEvent.DCWheelDownEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCWheelDownEvent`](Events_Register_Mouse_Wheel_DCWheelDownEvent.DCWheelDownEvent.md)

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[constructor](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#constructor)

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[controler](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#controler)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` **eventType**: [`WheelDown`](../enums/Events_Event_types.ControlEventTypes.md#wheeldown) = `ControlEventTypes.WheelDown`

#### Overrides

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[eventType](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#eventtype)

#### Defined in

Events/Register/Mouse/Wheel/DCWheelDownEvent.ts:7

___

### inputType

• `Readonly` **inputType**: [`Scroll`](../enums/Controls_Control_types.ControlInputTypes.md#scroll) = `ControlInputTypes.Scroll`

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[inputType](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#inputtype)

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.WheelDown`

#### Defined in

Events/Register/Mouse/Wheel/DCWheelDownEvent.ts:6

## Methods

### getDirection

▸ **getDirection**(): `undefined` \| ``"down"`` \| ``"up"``

#### Returns

`undefined` \| ``"down"`` \| ``"up"``

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[getDirection](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#getdirection)

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:6
