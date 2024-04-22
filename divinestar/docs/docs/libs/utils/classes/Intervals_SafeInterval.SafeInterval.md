---
id: "Intervals_SafeInterval.SafeInterval"
title: "Class: SafeInterval"
sidebar_label: "SafeInterval"
custom_edit_url: null
---

[Intervals/SafeInterval](../modules/Intervals_SafeInterval.md).SafeInterval

# SafeInterval
Creates a predictable sync interval.

## Constructors

### constructor

• **new SafeInterval**(`run?`, `interval?`): [`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `run?` | () => `void` \| `Promise`\<`void`\> |
| `interval?` | `number` |

#### Returns

[`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L11)

## Properties

### \_active

• `Private` **\_active**: `boolean` = `false`

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L5)

___

### \_run

• `Private` **\_run**: () => `void` \| `Promise`\<`void`\>

#### Type declaration

▸ (): `void` \| `Promise`\<`void`\>

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L6)

___

### canRun

• `Private` **canRun**: `boolean` = `true`

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L9)

___

### currentTimeout

• `Private` **currentTimeout**: `undefined` \| `number`

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L8)

___

### interval

• `Private` **interval**: `number` = `100`

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L7)

## Methods

### \_asyncRun

▸ **_asyncRun**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L26)

___

### runInterval

▸ **runInterval**(): `void`

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:42](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L42)

___

### setInterval

▸ **setInterval**(`interval`): [`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

[`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L21)

___

### setOnRun

▸ **setOnRun**(`run`): [`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | () => `void` \| `Promise`\<`void`\> |

#### Returns

[`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L16)

___

### start

▸ **start**(): [`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Returns

[`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:52](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L52)

___

### stop

▸ **stop**(): [`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Returns

[`SafeInterval`](Intervals_SafeInterval.SafeInterval.md)

#### Defined in

[divinestar/utils/src/Intervals/SafeInterval.ts:60](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Intervals/SafeInterval.ts#L60)
