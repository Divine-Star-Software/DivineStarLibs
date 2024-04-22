---
id: "Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent"
title: "Class: DCBaseWheelEvent"
sidebar_label: "DCBaseWheelEvent"
custom_edit_url: null
---

[Events/Register/Mouse/Wheel/DCBaseWheelEvent](../modules/Events_Register_Mouse_Wheel_DCBaseWheelEvent.md).DCBaseWheelEvent

## Hierarchy

- [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<[`Scroll`](../enums/Controls_Control_types.ControlInputTypes.md#scroll)\>

  ↳ **`DCBaseWheelEvent`**

  ↳↳ [`DCWheelDownEvent`](Events_Register_Mouse_Wheel_DCWheelDownEvent.DCWheelDownEvent.md)

  ↳↳ [`DCWheelUpEvent`](Events_Register_Mouse_Wheel_DCWheelUpEvent.DCWheelUpEvent.md)

## Constructors

### constructor

• **new DCBaseWheelEvent**(`controler`): [`DCBaseWheelEvent`](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DCBaseWheelEvent`](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md)

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

• `Readonly` **inputType**: [`Scroll`](../enums/Controls_Control_types.ControlInputTypes.md#scroll) = `ControlInputTypes.Scroll`

#### Overrides

[DivineControlEvent](Events_DivineControlEventBase.DivineControlEvent.md).[inputType](Events_DivineControlEventBase.DivineControlEvent.md#inputtype)

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:5

## Methods

### getDirection

▸ **getDirection**(): `undefined` \| ``"down"`` \| ``"up"``

#### Returns

`undefined` \| ``"down"`` \| ``"up"``

#### Defined in

Events/Register/Mouse/Wheel/DCBaseWheelEvent.ts:6
