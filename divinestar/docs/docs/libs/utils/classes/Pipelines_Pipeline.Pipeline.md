---
id: "Pipelines_Pipeline.Pipeline"
title: "Class: Pipeline<T>"
sidebar_label: "Pipeline"
custom_edit_url: null
---

[Pipelines/Pipeline](../modules/Pipelines_Pipeline.md).Pipeline

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` = {} |

## Constructors

### constructor

• **new Pipeline**\<`T`\>(): [`Pipeline`](Pipelines_Pipeline.Pipeline.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = {} |

#### Returns

[`Pipeline`](Pipelines_Pipeline.Pipeline.md)\<`T`\>

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L8)

## Properties

### pipes

• `Private` **pipes**: `Map`\<[`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys), `SyncPipelineFunction`\<`T`\>\>

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L6)

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

[divinestar/utils/src/Pipelines/Pipeline.ts:10](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L10)

___

### pipe

▸ **pipe**(`data`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`T`

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L22)

___

### regiser

▸ **regiser**(`key`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PipelineKeys`](../modules/Pipelines_Pipeline.md#pipelinekeys) |
| `func` | `SyncPipelineFunction`\<`T`\> |

#### Returns

`void`

#### Defined in

[divinestar/utils/src/Pipelines/Pipeline.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L14)

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

[divinestar/utils/src/Pipelines/Pipeline.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Pipelines/Pipeline.ts#L18)
