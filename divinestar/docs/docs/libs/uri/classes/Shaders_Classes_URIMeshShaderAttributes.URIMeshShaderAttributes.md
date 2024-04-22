---
id: "Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes"
title: "Class: URIMeshShaderAttributes"
sidebar_label: "URIMeshShaderAttributes"
custom_edit_url: null
---

[Shaders/Classes/URIMeshShaderAttributes](../modules/Shaders_Classes_URIMeshShaderAttributes.md).URIMeshShaderAttributes

## Constructors

### constructor

• **new URIMeshShaderAttributes**(`id`): [`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L7)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | `Map`\<`string`, [`ShaderDataTypes`](../modules/Shaders_Types_ShaderData_types.md#shaderdatatypes)\> |

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L4)

___

### id

• **id**: `string`

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L7)

## Methods

### addAttributes

▸ **addAttributes**(`data`): [`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [id: string, type: ShaderDataTypes][] |

#### Returns

[`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L12)

___

### clone

▸ **clone**(`id`): [`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`URIMeshShaderAttributes`](Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md)

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L19)

___

### getAttributeList

▸ **getAttributeList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L9)

___

### getAttributes

▸ **getAttributes**(): [id: string, stride: number][]

#### Returns

[id: string, stride: number][]

#### Defined in

[Shaders/Classes/URIMeshShaderAttributes.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIMeshShaderAttributes.ts#L41)
