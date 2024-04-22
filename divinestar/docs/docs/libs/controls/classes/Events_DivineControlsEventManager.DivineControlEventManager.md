---
id: "Events_DivineControlsEventManager.DivineControlEventManager"
title: "Class: DivineControlEventManager"
sidebar_label: "DivineControlEventManager"
custom_edit_url: null
---

[Events/DivineControlsEventManager](../modules/Events_DivineControlsEventManager.md).DivineControlEventManager

## Constructors

### constructor

• **new DivineControlEventManager**(): [`DivineControlEventManager`](Events_DivineControlsEventManager.DivineControlEventManager.md)

#### Returns

[`DivineControlEventManager`](Events_DivineControlsEventManager.DivineControlEventManager.md)

## Properties

### \_events

▪ `Static` `Private` **\_events**: `Map`\<`string`, [`DivineControlEventConstructor`](../interfaces/Events_DivineControlEventBase.DivineControlEventConstructor.md)\<`any`\>\>

#### Defined in

Events/DivineControlsEventManager.ts:20

## Methods

### getEvent

▸ **getEvent**(`id`): [`DivineControlEventConstructor`](../interfaces/Events_DivineControlEventBase.DivineControlEventConstructor.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`ControlEventTypes`](../enums/Events_Event_types.ControlEventTypes.md) |

#### Returns

[`DivineControlEventConstructor`](../interfaces/Events_DivineControlEventBase.DivineControlEventConstructor.md)\<`any`\>

#### Defined in

Events/DivineControlsEventManager.ts:25

___

### registerEvents

▸ **registerEvents**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DivineControlEventConstructor`](../interfaces/Events_DivineControlEventBase.DivineControlEventConstructor.md)\<`any`\>[] |

#### Returns

`void`

#### Defined in

Events/DivineControlsEventManager.ts:22
