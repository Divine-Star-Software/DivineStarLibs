---
id: "DBT_Classes_TagManagerBase.TagManagerBase"
title: "Class: TagManagerBase"
sidebar_label: "TagManagerBase"
custom_edit_url: null
---

[DBT/Classes/TagManagerBase](../modules/DBT_Classes_TagManagerBase.md).TagManagerBase

## Hierarchy

- **`TagManagerBase`**

  ↳ [`RemoteTagManager`](DBT_RemoteTagManager.RemoteTagManager.md)

  ↳ [`TagManager`](DBT_TagManager.TagManager.md)

## Constructors

### constructor

• **new TagManagerBase**(`id`): [`TagManagerBase`](DBT_Classes_TagManagerBase.TagManagerBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`TagManagerBase`](DBT_Classes_TagManagerBase.TagManagerBase.md)

#### Defined in

[DBT/Classes/TagManagerBase.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L34)

## Properties

### byteOffSet

• **byteOffSet**: `number` = `0`

#### Defined in

[DBT/Classes/TagManagerBase.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L25)

___

### data

• **data**: `DataView`

#### Defined in

[DBT/Classes/TagManagerBase.ts:29](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L29)

___

### id

• **id**: `string`

#### Defined in

[DBT/Classes/TagManagerBase.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L34)

___

### index

• **index**: `DataView`

#### Defined in

[DBT/Classes/TagManagerBase.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L32)

___

### indexMap

• **indexMap**: `Map`\<`string`, `number`\>

#### Defined in

[DBT/Classes/TagManagerBase.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L31)

___

### tagIndexes

• **tagIndexes**: `number` = `0`

#### Defined in

[DBT/Classes/TagManagerBase.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L27)

___

### tagSize

• **tagSize**: `number` = `0`

#### Defined in

[DBT/Classes/TagManagerBase.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L26)

## Methods

### getArrayTagByteIndex

▸ **getArrayTagByteIndex**(`id`, `index`): `number`

## getArrayTagByteIndex
 Get the actual byte index for the provided index of the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[DBT/Classes/TagManagerBase.ts:145](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L145)

___

### getArrayTagValue

▸ **getArrayTagValue**(`id`, `index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[DBT/Classes/TagManagerBase.ts:114](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L114)

___

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

[DBT/Classes/TagManagerBase.ts:44](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L44)

___

### getTag

▸ **getTag**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`number`

#### Defined in

[DBT/Classes/TagManagerBase.ts:55](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L55)

___

### loopThroughAllIndexTags

▸ **loopThroughAllIndexTags**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`id`: `string`, `value`: `number`, `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:200](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L200)

___

### loopThroughIndex

▸ **loopThroughIndex**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`data`: `number`[]) => `void` |

#### Returns

`void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:194](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L194)

___

### loopThroughTags

▸ **loopThroughTags**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | (`id`: `string`, `value`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:189](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L189)

___

### setArrayTagValue

▸ **setArrayTagValue**(`id`, `index`, `value`): `number` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |
| `value` | `number` |

#### Returns

`number` \| `void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:161](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L161)

___

### setBuffer

▸ **setBuffer**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BufferTypes`](../modules/DBT_Types_Util_types.md#buffertypes) \| `DataView` |

#### Returns

`void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:36](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L36)

___

### setTag

▸ **setTag**(`id`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[DBT/Classes/TagManagerBase.ts:81](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L81)

___

### setTagIndex

▸ **setTagIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[DBT/Classes/TagManagerBase.ts:51](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L51)
