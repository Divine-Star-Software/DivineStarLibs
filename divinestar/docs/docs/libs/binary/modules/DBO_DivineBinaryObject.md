---
id: "DBO_DivineBinaryObject"
title: "Module: DBO/DivineBinaryObject"
sidebar_label: "DBO/DivineBinaryObject"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### DBO

• `Const` **DBO**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nodes` | \{ `DBO`: \<T\>(`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\>) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<[`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\>\> ; `_16i`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_16ui`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_32f`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_32i`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_32ui`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_64f`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_8i`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `_8ui`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `array`: \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> ; `bigi`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `bigui`: (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> ; `boolean`: (`value`: `boolean`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`boolean`\> ; `fixedString`: (`value`: `string`, `length`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`\> ; `fixedTypedArray`: (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`[], `length`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`[]\> ; `json`: \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> ; `object`: \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> ; `string`: (`value`: `string`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`\> ; `stringArray`: (`value`: `string`[]) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`[]\> ; `toJSONString`: (`json`: `any`) => `string` ; `typedArray`: (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`[] \| `ArrayBufferView`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<[`TypedArrays`](DBO_Types_DBO_types.md#typedarrays)\> ; `undefined`: () => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`undefined`\>  } |
| `nodes.DBO` | [object Object] |
| `nodes._16i` | [object Object] |
| `nodes._16ui` | [object Object] |
| `nodes._32f` | [object Object] |
| `nodes._32i` | [object Object] |
| `nodes._32ui` | [object Object] |
| `nodes._64f` | [object Object] |
| `nodes._8i` | [object Object] |
| `nodes._8ui` | [object Object] |
| `nodes.array` | [object Object] |
| `nodes.bigi` | [object Object] |
| `nodes.bigui` | [object Object] |
| `nodes.boolean` | [object Object] |
| `nodes.fixedString` | [object Object] |
| `nodes.fixedTypedArray` | [object Object] |
| `nodes.json` | [object Object] |
| `nodes.object` | [object Object] |
| `nodes.string` | [object Object] |
| `nodes.stringArray` | [object Object] |
| `nodes.toJSONString` | [object Object] |
| `nodes.typedArray` | [object Object] |
| `nodes.undefined` | [object Object] |
| `bufferToDBO` | \<T\>(`buffer`: `ArrayBuffer`, `byteOffSet`: `number`, `byteOffSetEnd`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> |
| `bufferToObject` | \<T\>(`buffer`: `ArrayBuffer`, `byteOffSet`: `number`) => `T` |
| `dboToBuffer` | (`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\>) => `ArrayBuffer` |
| `objectToBuffer` | (`obj`: `any`) => `ArrayBuffer` |
| `objectToDBO` | (`object`: `any`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`any`\> |

#### Defined in

[DBO/DivineBinaryObject.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/DivineBinaryObject.ts#L7)
