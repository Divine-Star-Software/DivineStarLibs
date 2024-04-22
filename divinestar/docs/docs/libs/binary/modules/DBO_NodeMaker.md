---
id: "DBO_NodeMaker"
title: "Module: DBO/NodeMaker"
sidebar_label: "DBO/NodeMaker"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### TNM

• `Const` **TNM**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DBO` | \<T\>(`data`: [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\>) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<[`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\>\> |
| `_16i` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_16ui` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_32f` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_32i` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_32ui` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_64f` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_8i` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `_8ui` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `array` | \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> |
| `bigi` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `bigui` | (`value`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`\> |
| `boolean` | (`value`: `boolean`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`boolean`\> |
| `fixedString` | (`value`: `string`, `length`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`\> |
| `fixedTypedArray` | (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`[], `length`: `number`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`number`[]\> |
| `json` | \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> |
| `object` | \<T\>(`data`: `T`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`T`\> |
| `string` | (`value`: `string`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`\> |
| `stringArray` | (`value`: `string`[]) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`string`[]\> |
| `toJSONString` | (`json`: `any`) => `string` |
| `typedArray` | (`type`: [`DBOPrimitive`](DBO_Types_DBO_types.md#dboprimitive), `value`: `number`[] \| `ArrayBufferView`) => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<[`TypedArrays`](DBO_Types_DBO_types.md#typedarrays)\> |
| `undefined` | () => [`TypedNode`](../classes/DBO_Classes_TypedNode.TypedNode.md)\<`undefined`\> |

#### Defined in

[DBO/NodeMaker.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/binary/src/DBO/NodeMaker.ts#L7)
