---
id: "Schemas_Validation_ObjectValidation_types"
title: "Module: Schemas/Validation/ObjectValidation.types"
sidebar_label: "Schemas/Validation/ObjectValidation.types"
custom_edit_url: null
---

## Type Aliases

### ObjectPropertyValidatorData

Ƭ **ObjectPropertyValidatorData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `validate` | (`value`: `unknown`, `data`: [`ObjectCollectionData`](Schemas_ObjectCollection_types.md#objectcollectiondata)) => [`ObjectPropertyValidatorResponse`](Schemas_Validation_ObjectValidation_types.md#objectpropertyvalidatorresponse) |

#### Defined in

[divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts#L11)

___

### ObjectPropertyValidatorError

Ƭ **ObjectPropertyValidatorError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `id` | `string` |

#### Defined in

[divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts#L3)

___

### ObjectPropertyValidatorResponse

Ƭ **ObjectPropertyValidatorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors?` | [`ObjectPropertyValidatorError`](Schemas_Validation_ObjectValidation_types.md#objectpropertyvalidatorerror)[] |
| `success` | `boolean` |

#### Defined in

[divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/Validation/ObjectValidation.types.ts#L7)
