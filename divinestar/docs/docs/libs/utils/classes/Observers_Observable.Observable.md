---
id: "Observers_Observable.Observable"
title: "Class: Observable<T>"
sidebar_label: "Observable"
custom_edit_url: null
---

[Observers/Observable](../modules/Observers_Observable.md).Observable

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

## Constructors

### constructor

• **new Observable**\<`T`\>(): [`Observable`](Observers_Observable.Observable.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Returns

[`Observable`](Observers_Observable.Observable.md)\<`T`\>

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L6)

## Properties

### observers

• **observers**: `Map`\<[`ObserverKeys`](../modules/Observers_Observable.md#observerkeys), [`ObservableFunction`](../modules/Observers_Observable.md#observablefunction)\<`T`\>\>

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L4)

___

### onceObservers

• **onceObservers**: `Function`[] = `[]`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L5)

## Methods

### clear

▸ **clear**(): `void`

# clear
---
Removes all observers.

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:50](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L50)

___

### notify

▸ **notify**(`data`): `void`

# notify
---
Run each callback function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L25)

___

### notifyAsync

▸ **notifyAsync**(`data`): `Promise`\<`void`\>

# notifyAsync
---
Run each callback function with async/await.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:38](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L38)

___

### subscribe

▸ **subscribe**(`key`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ObserverKeys`](../modules/Observers_Observable.md#observerkeys) |
| `func` | [`ObservableFunction`](../modules/Observers_Observable.md#observablefunction)\<`T`\> |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L8)

___

### subscribeOnce

▸ **subscribeOnce**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`ObservableFunction`](../modules/Observers_Observable.md#observablefunction)\<`T`\> |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L12)

___

### unsubscribe

▸ **unsubscribe**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ObserverKeys`](../modules/Observers_Observable.md#observerkeys) |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Observers/Observable.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Observers/Observable.ts#L16)
