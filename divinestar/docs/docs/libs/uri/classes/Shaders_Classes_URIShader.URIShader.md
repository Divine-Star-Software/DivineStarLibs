---
id: "Shaders_Classes_URIShader.URIShader"
title: "Class: URIShader"
sidebar_label: "URIShader"
custom_edit_url: null
---

[Shaders/Classes/URIShader](../modules/Shaders_Classes_URIShader.md).URIShader

## Constructors

### constructor

• **new URIShader**(`id`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:78](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L78)

## Properties

### compiled

• **compiled**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:73](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L73)

___

### data

• **data**: [`ShaderData`](../modules/Shaders_Types_ShaderData_types.md#shaderdata)

#### Defined in

[Shaders/Classes/URIShader.ts:53](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L53)

___

### id

• **id**: `string`

#### Defined in

[Shaders/Classes/URIShader.ts:78](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L78)

___

### ShaderVersions

▪ `Static` **ShaderVersions**: typeof `ShaderVersions` = `ShaderVersions`

#### Defined in

[Shaders/Classes/URIShader.ts:52](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L52)

## Methods

### addAttributes

▸ **addAttributes**(`data`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [id: string, type: ShaderDataTypes][] |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:113](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L113)

___

### addFunction

▸ **addFunction**\<`T`\>(`id`, `forSharer`, `data`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `forSharer` | `ShaderTypes` |
| `data` | [`ShaderFunctionData`](../modules/Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`T`\> |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:170](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L170)

___

### addTextures

▸ **addTextures**(`data`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [id: string, data: ShaderTextureData][] |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:163](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L163)

___

### addUniform

▸ **addUniform**(`data`, `forSharer?`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`ShaderUniformData`](../modules/Shaders_Types_ShaderData_types.md#shaderuniformdata)[] | `undefined` |
| `forSharer` | `ShaderTypes` | `"shared"` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:134](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L134)

___

### addVarying

▸ **addVarying**(`data`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ShaderVaryingData`](../modules/Shaders_Types_ShaderData_types.md#shadervaryingdata)\<`any`\>[] |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:156](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L156)

___

### clone

▸ **clone**(`newID`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newID` | `string` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:455](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L455)

___

### compile

▸ **compile**(`header?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:383](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L383)

___

### compileAttributes

▸ **compileAttributes**(`predicate?`, `version?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `predicate` | (`id`: `string`, `type`: [`ShaderDataTypes`](../modules/Shaders_Types_ShaderData_types.md#shaderdatatypes)) => `boolean` | `undefined` |
| `version` | `ShaderVersions` | `ShaderVersions.GLSL3` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:262](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L262)

___

### compileDefines

▸ **compileDefines**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:217](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L217)

___

### compileFunctinos

▸ **compileFunctinos**(`predicate?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`id`: `string`, `type`: [`ShaderFunctionData`](../modules/Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>) => `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:277](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L277)

___

### compileTextures

▸ **compileTextures**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:347](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L347)

___

### compileUniforms

▸ **compileUniforms**(`predicate?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`id`: `string`, `type`: [`ShaderUniformData`](../modules/Shaders_Types_ShaderData_types.md#shaderuniformdata)) => `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `vertex` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:235](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L235)

___

### compileVarying

▸ **compileVarying**(`version?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `version` | `ShaderVersions` | `ShaderVersions.GLSL3` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fragTop` | `string` |
| `vertexMainTop` | `string` |
| `vertexTop` | `string` |

#### Defined in

[Shaders/Classes/URIShader.ts:361](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L361)

___

### getAttributeList

▸ **getAttributeList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[Shaders/Classes/URIShader.ts:109](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L109)

___

### getTextureDataList

▸ **getTextureDataList**(): [`string`, [`ShaderTextureData`](../modules/Shaders_Types_ShaderData_types.md#shadertexturedata)][]

#### Returns

[`string`, [`ShaderTextureData`](../modules/Shaders_Types_ShaderData_types.md#shadertexturedata)][]

#### Defined in

[Shaders/Classes/URIShader.ts:332](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L332)

___

### getTextureList

▸ **getTextureList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[Shaders/Classes/URIShader.ts:339](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L339)

___

### getUniformDataList

▸ **getUniformDataList**(): [`string`, [`ShaderUniformData`](../modules/Shaders_Types_ShaderData_types.md#shaderuniformdata)][]

#### Returns

[`string`, [`ShaderUniformData`](../modules/Shaders_Types_ShaderData_types.md#shaderuniformdata)][]

#### Defined in

[Shaders/Classes/URIShader.ts:102](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L102)

___

### getUniformList

▸ **getUniformList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[Shaders/Classes/URIShader.ts:94](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L94)

___

### loadInFunctions

▸ **loadInFunctions**(`id`, `forSharer?`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `string`[] | `undefined` |
| `forSharer` | `ShaderTypes` | `"shared"` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:189](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L189)

___

### merge

▸ **merge**(`shader`, `overrideMesh?`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shader` | [`URIShader`](Shaders_Classes_URIShader.URIShader.md) | `undefined` |
| `overrideMesh` | `boolean` | `true` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:459](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L459)

___

### setArgumentOverride

▸ **setArgumentOverride**(`type`, `id`, `data`): `undefined` \| `Map`\<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"function"`` \| ``"varying"`` \| ``"snippet"`` |
| `id` | `string` |
| `data` | `any` |

#### Returns

`undefined` \| `Map`\<`string`, `any`\>

#### Defined in

[Shaders/Classes/URIShader.ts:118](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L118)

___

### setCodeBody

▸ **setCodeBody**(`forSharer?`, `text`): [`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forSharer` | `ShaderTypes` | `"shared"` |
| `text` | `string` | `undefined` |

#### Returns

[`URIShader`](Shaders_Classes_URIShader.URIShader.md)

#### Defined in

[Shaders/Classes/URIShader.ts:82](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Classes/URIShader.ts#L82)
