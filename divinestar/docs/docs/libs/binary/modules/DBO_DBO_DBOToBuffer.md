---
id: "DBO_DBO_DBOToBuffer"
title: "Module: DBO/DBO/DBOToBuffer"
sidebar_label: "DBO/DBO/DBOToBuffer"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### DBOToBuffer

• `Const` **DBOToBuffer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_proto` | `number`[] |
| `_addMarker` | (`marker`: [`DBOMarks`](DBO_Types_DBO_types.md#dbomarks)) => `void` |
| `_addToken` | (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`) => `void` |
| `_tokenize` | (`node`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>) => `void` |
| `_tokenizePrimiives` | (`node`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>) => `void` |
| `_tokenizeString` | (`string`: `string`) => `void` |
| `_traverseArray` | (`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>) => `void` |
| `_traverseObj` | (`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>) => `void` |
| `toBuffer` | (`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>, `byteOffSet`: `number`) => `ArrayBuffer` |

#### Defined in

[DBO/DBO/DBOToBuffer.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/DBO/DBOToBuffer.ts#L7)
