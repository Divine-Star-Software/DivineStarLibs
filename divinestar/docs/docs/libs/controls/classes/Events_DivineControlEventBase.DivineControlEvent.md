---
id: "Events_DivineControlEventBase.DivineControlEvent"
title: "Class: DivineControlEvent<T>"
sidebar_label: "DivineControlEvent"
custom_edit_url: null
---

[Events/DivineControlEventBase](../modules/Events_DivineControlEventBase.md).DivineControlEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ControlInputTypes`](../enums/Controls_Control_types.ControlInputTypes.md) = `any` |

## Hierarchy

- **`DivineControlEvent`**

  ↳ [`DCBaseKeyEvent`](Events_Register_Keyboard_DCBaseKeyEvent.DCBaseKeyEvent.md)

  ↳ [`DCBaseMouseEvent`](Events_Register_Mouse_DCBaseMouseEvent.DCBaseMouseEvent.md)

  ↳ [`DCBaseGamepadAxesEvent`](Events_Register_Gamepad_Axes_DCBaseGamepadAxesEvent.DCBaseGamepadAxesEvent.md)

  ↳ [`DCBaseGamepadButtonEvent`](Events_Register_Gamepad_Button_DCBaseGamepadButtonEvent.DCBaseGamepadButtonEvent.md)

  ↳ [`DCBaseWheelEvent`](Events_Register_Mouse_Wheel_DCBaseWheelEvent.DCBaseWheelEvent.md)

## Constructors

### constructor

• **new DivineControlEvent**\<`T`\>(`controler`): [`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ControlInputTypes`](../enums/Controls_Control_types.ControlInputTypes.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `controler` | [`DCControl`](Controls_DCControl.DCControl.md) |

#### Returns

[`DivineControlEvent`](Events_DivineControlEventBase.DivineControlEvent.md)\<`T`\>

#### Defined in

Events/DivineControlEventBase.ts:18

## Properties

### controler

• **controler**: [`DCControl`](Controls_DCControl.DCControl.md)

#### Defined in

Events/DivineControlEventBase.ts:18

___

### eventType

• `Readonly` `Abstract` **eventType**: [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md)

#### Defined in

Events/DivineControlEventBase.ts:16

___

### inputType

• `Readonly` `Abstract` **inputType**: `T`

#### Defined in

Events/DivineControlEventBase.ts:17
