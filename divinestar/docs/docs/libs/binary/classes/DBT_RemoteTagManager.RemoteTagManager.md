---
id: "DBT_RemoteTagManager.RemoteTagManager"
title: "Class: RemoteTagManager"
sidebar_label: "RemoteTagManager"
custom_edit_url: null
---

[DBT/RemoteTagManager](../modules/DBT_RemoteTagManager.md).RemoteTagManager

## Hierarchy

- [`TagManagerBase`](DBT_Classes_TagManagerBase.TagManagerBase.md)

  ↳ **`RemoteTagManager`**

## Constructors

### constructor

• **new RemoteTagManager**(`id`): [`RemoteTagManager`](DBT_RemoteTagManager.RemoteTagManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`RemoteTagManager`](DBT_RemoteTagManager.RemoteTagManager.md)

#### Overrides

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[constructor](DBT_Classes_TagManagerBase.TagManagerBase.md#constructor)

#### Defined in

[DBT/RemoteTagManager.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/RemoteTagManager.ts#L6)

## Properties

### byteOffSet

• **byteOffSet**: `number` = `0`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[byteOffSet](DBT_Classes_TagManagerBase.TagManagerBase.md#byteoffset)

#### Defined in

[DBT/Classes/TagManagerBase.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L25)

___

### data

• **data**: `DataView`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[data](DBT_Classes_TagManagerBase.TagManagerBase.md#data)

#### Defined in

[DBT/Classes/TagManagerBase.ts:29](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L29)

___

### id

• **id**: `string`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[id](DBT_Classes_TagManagerBase.TagManagerBase.md#id)

#### Defined in

[DBT/RemoteTagManager.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/RemoteTagManager.ts#L6)

___

### index

• **index**: `DataView`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[index](DBT_Classes_TagManagerBase.TagManagerBase.md#index)

#### Defined in

[DBT/Classes/TagManagerBase.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L32)

___

### indexMap

• **indexMap**: `Map`\<`string`, `number`\>

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[indexMap](DBT_Classes_TagManagerBase.TagManagerBase.md#indexmap)

#### Defined in

[DBT/Classes/TagManagerBase.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L31)

___

### initData

• **initData**: [`RemoteTagManagerInitData`](../modules/DBT_Types_Util_types.md#remotetagmanagerinitdata)

#### Defined in

[DBT/RemoteTagManager.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/RemoteTagManager.ts#L5)

___

### tagIndexes

• **tagIndexes**: `number` = `0`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[tagIndexes](DBT_Classes_TagManagerBase.TagManagerBase.md#tagindexes)

#### Defined in

[DBT/Classes/TagManagerBase.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L27)

___

### tagSize

• **tagSize**: `number` = `0`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[tagSize](DBT_Classes_TagManagerBase.TagManagerBase.md#tagsize)

#### Defined in

[DBT/Classes/TagManagerBase.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L26)

## Methods

### $INIT

▸ **$INIT**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RemoteTagManagerInitData`](../modules/DBT_Types_Util_types.md#remotetagmanagerinitdata) |

#### Returns

`void`

#### Defined in

[DBT/RemoteTagManager.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/RemoteTagManager.ts#L9)

___

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[getArrayTagByteIndex](DBT_Classes_TagManagerBase.TagManagerBase.md#getarraytagbyteindex)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[getArrayTagValue](DBT_Classes_TagManagerBase.TagManagerBase.md#getarraytagvalue)

#### Defined in

[DBT/Classes/TagManagerBase.ts:114](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L114)

___

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[getBuffer](DBT_Classes_TagManagerBase.TagManagerBase.md#getbuffer)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[getTag](DBT_Classes_TagManagerBase.TagManagerBase.md#gettag)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[loopThroughAllIndexTags](DBT_Classes_TagManagerBase.TagManagerBase.md#loopthroughallindextags)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[loopThroughIndex](DBT_Classes_TagManagerBase.TagManagerBase.md#loopthroughindex)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[loopThroughTags](DBT_Classes_TagManagerBase.TagManagerBase.md#loopthroughtags)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[setArrayTagValue](DBT_Classes_TagManagerBase.TagManagerBase.md#setarraytagvalue)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[setBuffer](DBT_Classes_TagManagerBase.TagManagerBase.md#setbuffer)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[setTag](DBT_Classes_TagManagerBase.TagManagerBase.md#settag)

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

#### Inherited from

[TagManagerBase](DBT_Classes_TagManagerBase.TagManagerBase.md).[setTagIndex](DBT_Classes_TagManagerBase.TagManagerBase.md#settagindex)

#### Defined in

[DBT/Classes/TagManagerBase.ts:51](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBT/Classes/TagManagerBase.ts#L51)
