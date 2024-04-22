---
id: "Shaders_URIShaderBuilder"
title: "Module: Shaders/URIShaderBuilder"
sidebar_label: "Shaders/URIShaderBuilder"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### URIShaderBuilder

• `Const` **URIShaderBuilder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `define` | \{ `_process`: (`data`: [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)) => `string` ; `build`: (`data`: [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata) \| `Map`\<`string`, [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)\> \| [`ShaderDefinesData`](Shaders_Types_ShaderData_types.md#shaderdefinesdata)[]) => `string`  } |
| `define._process` | [object Object] |
| `define.build` | [object Object] |
| `functions` | \{ `_functionSets`: `Map`\<`string`, `string`[]\> ; `_functions`: `Map`\<`string`, [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>\> ; `_processFunctinos`: (`id`: `string`, `data`: [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>, `shader`: ``null`` \| [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)) => `string` ; `build`: (`id`: `string`, `data`: ``null`` \| [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>, `shader`: ``null`` \| [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md), `predicate`: (`id`: `string`, `type`: [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>) => `boolean`) => `string` ; `create`: (`id`: `string`, `data`: [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>) => `void`  } |
| `functions._functionSets` | `Map`\<`string`, `string`[]\> |
| `functions._functions` | `Map`\<`string`, [`ShaderFunctionData`](Shaders_Types_ShaderData_types.md#shaderfunctiondata)\<`any`\>\> |
| `functions._processFunctinos` | [object Object] |
| `functions.build` | [object Object] |
| `functions.create` | [object Object] |
| `shaders` | \{ `_shaders`: `Map`\<`string`, [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)\> ; `create`: (`id`: `string`) => [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)  } |
| `shaders._shaders` | `Map`\<`string`, [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)\> |
| `shaders.create` | [object Object] |
| `snippets` | \{ `_snippets`: `Map`\<`string`, [`ShaderSnippetData`](Shaders_Types_ShaderData_types.md#shadersnippetdata)\<`any`\>\> ; `_process`: (`text`: `string`, `shader?`: [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)) => \{ `foundSnippet`: `boolean` ; `newBody`: `string`  } ; `build`: (`text`: `string`, `shader?`: [`URIShader`](../classes/Shaders_Classes_URIShader.URIShader.md)) => `string` ; `create`: (`data`: [`ShaderSnippetData`](Shaders_Types_ShaderData_types.md#shadersnippetdata)\<`any`\>) => `void` ; `get`: (`id`: `string`, `args?`: `any`) => `string` ; `override`: (`id`: `string`, `data`: [`ShaderSnippetData`](Shaders_Types_ShaderData_types.md#shadersnippetdata)\<`any`\>) => `boolean`  } |
| `snippets._snippets` | `Map`\<`string`, [`ShaderSnippetData`](Shaders_Types_ShaderData_types.md#shadersnippetdata)\<`any`\>\> |
| `snippets._process` | [object Object] |
| `snippets.build` | [object Object] |
| `snippets.create` | [object Object] |
| `snippets.get` | [object Object] |
| `snippets.override` | [object Object] |
| `uniforms` | \{ `_process`: (`data`: [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)) => `string` ; `build`: (`data`: `Map`\<`string`, [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)\> \| [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)[], `predicate`: (`id`: `string`, `type`: [`ShaderUniformData`](Shaders_Types_ShaderData_types.md#shaderuniformdata)) => `boolean`) => `string`  } |
| `uniforms._process` | [object Object] |
| `uniforms.build` | [object Object] |

#### Defined in

[Shaders/URIShaderBuilder.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Shaders/URIShaderBuilder.ts#L9)
