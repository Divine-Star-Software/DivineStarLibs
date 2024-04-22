---
id: "DBO_DBO_BufferToDBO"
title: "Module: DBO/DBO/BufferToDBO"
sidebar_label: "DBO/DBO/BufferToDBO"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### BufferToDBO

• `Const` **BufferToDBO**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_cobj` | `any` |
| `_inOject` | `boolean` |
| `_length` | `number` |
| `_mode` | ``"object"`` \| ``"json"`` \| ``"DBO"`` |
| `_name` | `string` |
| `_objArray` | `never`[] |
| `_objCount` | `number` |
| `_parents` | `any`[] |
| `markFunctions` | `Record`\<[`DBOMarks`](DBO_Types_DBO_types.md#dbomarks), (`dv`: `DataView`, `index`: `number`) => `number`\> |
| `_assign` | (`value`: `any`) => `void` |
| `_newDBONode` | (`type`: [`DBOMarks`](DBO_Types_DBO_types.md#dbomarks), `value`: `any`, `listType`: `string`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\> |
| `toDBO` | \<T\>(`buffer`: `ArrayBuffer`, `byteOffSet`: `number`, `byteOffSetEnd`: `number`) => `T` |
| `toJSON` | \<T\>(`buffer`: `ArrayBuffer`, `byteOffSet`: `number`) => `T` |
| `toObject` | \<T\>(`buffer`: `ArrayBuffer`, `byteOffSet`: `number`) => `T` |

#### Defined in

[DBO/DBO/BufferToDBO.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/DBO/BufferToDBO.ts#L8)
