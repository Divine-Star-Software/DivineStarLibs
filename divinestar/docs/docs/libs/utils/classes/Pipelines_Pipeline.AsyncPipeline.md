---
id: "Pipelines_Pipeline.AsyncPipeline"
title: "Class: AsyncPipeline<T>"
sidebar_label: "AsyncPipeline"
custom_edit_url: null
---

[Pipelines/Pipeline](../modules/Pipelines_Pipeline.md).AsyncPipeline

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` = {} |

## Constructors

### constructor

• **new AsyncPipeline**\<`T`\>(): [`AsyncPipeline`](Pipelines_Pipeline.AsyncPipeline.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = {} |

#### Returns

[`AsyncPipeline`](Pipelines_Pipeline.AsyncPipeline.md)\<`T`\>

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L32)

## Properties

### pipes

• `Private` **pipes**: `Map`\<[`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys), `AsyncPipelineFunction`\<`T`\>\>

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L30)

## Methods

### isRegistered

▸ **isRegistered**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys) |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L34)

___

### pipe

▸ **pipe**(`data`): `Promise`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:46](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L46)

___

### regiser

▸ **regiser**(`key`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys) |
| `func` | `AsyncPipelineFunction`\<`T`\> |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:38](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L38)

___

### unRegister

▸ **unRegister**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys) |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:42](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L42)
