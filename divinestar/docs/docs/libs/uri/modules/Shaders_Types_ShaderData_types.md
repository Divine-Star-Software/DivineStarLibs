---
id: "Shaders_Types_ShaderData_types"
title: "Module: Shaders/Types/ShaderData.types"
sidebar_label: "Shaders/Types/ShaderData.types"
custom_edit_url: null
---

## Type Aliases

### GeneratedShaderCodeBody

Ƭ **GeneratedShaderCodeBody**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GLSL` | (`data`: `T`) => `string` |
| `WGSL?` | (`data`: `T`) => `string` |

#### Defined in

[Shaders/Types/ShaderData.types.ts:70](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L70)

___

### ShaderAttributeData

Ƭ **ShaderAttributeData**: [name: string, type: ShaderDataTypes]

#### Defined in

[Shaders/Types/ShaderData.types.ts:108](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L108)

___

### ShaderCodeBody

Ƭ **ShaderCodeBody**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GLSL` | `string` |
| `WGSL?` | `string` |

#### Defined in

[Shaders/Types/ShaderData.types.ts:66](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L66)

___

### ShaderCodeSections

Ƭ **ShaderCodeSections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fragBeforeMain` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `fragMain` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `fragMainTop` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `fragTop` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `vertexBeforeMain` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `vertexMain` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `vertexMainTop` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |
| `vertexTop` | [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) |

#### Defined in

[Shaders/Types/ShaderData.types.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L4)

___

### ShaderData

Ƭ **ShaderData**: \{ `fragBeforeMain`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `fragDefines`: `Map`\<`string`, [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)\> ; `fragFunctions`: `string`[] ; `fragMain`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `fragMainTop`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `fragTop`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `fragxUniforms`: `Map`\<`string`, [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)\> ; `functionArgumentOverrides`: `Map`\<`string`, `any`\> ; `localFragFunctions`: `Map`\<`string`, [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>\> ; `localVertexFunctions`: `Map`\<`string`, [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>\> ; `mesh`: [`URIMeshShaderAttributes`](../classes/Shaders_Classes_URIMeshShaderAttributes.URIMeshShaderAttributes.md) ; `sharedDefines`: `Map`\<`string`, [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)\> ; `sharedFunctions`: `string`[] ; `sharedUniforms`: `Map`\<`string`, [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)\> ; `snippetArgumentOverrides`: `Map`\<`string`, `any`\> ; `textures`: `Map`\<`string`, [`ShaderTextureData`](Shaders_Types_ShaderData_types.md#shadertexturedata)\> ; `varying`: `Map`\<`string`, [`ShaderVaryingData`](Shaders_Types_ShaderData_types.md#shadervaryingdata)\<`any`\>\> ; `varyingArgumentOverrides`: `Map`\<`string`, `any`\> ; `vertexBeforeMain`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `vertexDefines`: `Map`\<`string`, [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)\> ; `vertexFunctions`: `string`[] ; `vertexMain`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `vertexMainTop`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `vertexTop`: [`ShaderCodeBody`](Shaders_Types_ShaderData_types.md#shadercodebody) ; `vertexUniforms`: `Map`\<`string`, [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)\>  } & [`ShaderCodeSections`](Shaders_Types_ShaderData_types.md#shadercodesections)

#### Defined in

[Shaders/Types/ShaderData.types.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L28)

___

### ShaderDataTypes

Ƭ **ShaderDataTypes**: ``"vec4"`` \| ``"vec3"`` \| ``"vec2"`` \| ``"float"`` \| ``"mat3"`` \| ``"mat4"`` \| ``"int"``

#### Defined in

[Shaders/Types/ShaderData.types.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L20)

___

### ShaderDefinesData

Ƭ **ShaderDefinesData**: [name: string, value: number]

#### Defined in

[Shaders/Types/ShaderData.types.ts:104](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L104)

___

### ShaderFunctionData

Ƭ **ShaderFunctionData**\<`T`\>: `ShaderFuncitonBase`\<`T`\> & \{ `overrides?`: `ShaderFuncitonBase`\<`T`\>[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[Shaders/Types/ShaderData.types.ts:74](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L74)

___

### ShaderSnippetData

Ƭ **ShaderSnippetData**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arguments?` | `T` |
| `body` | [`GeneratedShaderCodeBody`](Shaders_Types_ShaderData_types.md#generatedshadercodebody)\<`T`\> |
| `id` | `string` |

#### Defined in

[Shaders/Types/ShaderData.types.ts:98](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L98)

___

### ShaderTextureData

Ƭ **ShaderTextureData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arrayLength?` | `number` |
| `isArray?` | `boolean` |
| `type` | [`ShaerTextureTypes`](Shaders_Types_ShaderData_types.md#shaertexturetypes) |

#### Defined in

[Shaders/Types/ShaderData.types.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L15)

___

### ShaderUniformData

Ƭ **ShaderUniformData**: [name: string, type: ShaderDataTypes \| "ignore"] \| [name: string, type: ShaderDataTypes, arrayLength: number]

#### Defined in

[Shaders/Types/ShaderData.types.ts:105](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L105)

___

### ShaderVaryingData

Ƭ **ShaderVaryingData**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arguments?` | `T` |
| `body` | [`GeneratedShaderCodeBody`](Shaders_Types_ShaderData_types.md#generatedshadercodebody)\<`T`\> |
| `id` | `string` |
| `type` | [`ShaderDataTypes`](Shaders_Types_ShaderData_types.md#shaderdatatypes) |

#### Defined in

[Shaders/Types/ShaderData.types.ts:78](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L78)

___

### ShaerTextureTypes

Ƭ **ShaerTextureTypes**: ``"sampler2DArray"``

#### Defined in

[Shaders/Types/ShaderData.types.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/Types/ShaderData.types.ts#L3)
