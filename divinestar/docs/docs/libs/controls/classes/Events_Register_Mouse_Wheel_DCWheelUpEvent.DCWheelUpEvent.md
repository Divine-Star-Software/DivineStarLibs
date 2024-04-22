---
id: "Events_Register_Mouse_Wheel_DCWheelUpEvent.DCWheelUpEvent"
title: "Class: DCWheelUpEvent"
sidebar_label: "DCWheelUpEvent"
custom_edit_url: null
---

[Events/Register/Mouse/Wheel/DCWheelUpEvent](../modules/Events_Register_Mouse_Wheel_DCWheelUpEvent.md).DCWheelUpEvent

## Hierarchy

- [`DCBaseWheelEvent`](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md)

  ↳ **`DCWheelUpEvent`**

## Constructors

### constructor

• **new DCWheelUpEvent**(`controler`): [`DCWheelUpEvent`](Events_Register_Mouse_Wheel_DCWheelUpEvent.DCWheelUpEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCWheelUpEvent`](Events_Register_Mouse_Wheel_DCWheelUpEvent.DCWheelUpEvent.md)

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

• `Readonly` **eventType**: [`WheelUp`](../enums/Events_Event_types.ControlEventTypes.md#wheelup) = `ControlEventTypes.WheelUp`

#### Overrides

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[eventType](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#eventtype)

#### Defined in

Events/Register/Mouse/Wheel/DCWheelUpEvent.ts:6

___

### inputType

• `Readonly` **inputType**: [`Scroll`](../enums/Controls_Control_types.ControlInputTypes.md#scroll) = `ControlInputTypes.Scroll`

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[inputType](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#inputtype)

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:5

___

### eventType

▪ `Static` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) = `ControlEventTypes.WheelUp`

#### Defined in

Events/Register/Mouse/Wheel/DCWheelUpEvent.ts:5

## Methods

### getDirection

▸ **getDirection**(): `undefined` \| ``"down"`` \| ``"up"``

#### Returns

`undefined` \| ``"down"`` \| ``"up"``

#### Inherited from

[DCBaseWheelEvent](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md).[getDirection](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md#getdirection)

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:6
