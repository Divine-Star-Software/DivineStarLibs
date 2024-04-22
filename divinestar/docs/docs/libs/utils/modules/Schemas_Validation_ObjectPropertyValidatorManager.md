---
id: "Schemas_Validation_ObjectPropertyValidatorManager"
title: "Module: Schemas/Validation/ObjectPropertyValidatorManager"
sidebar_label: "Schemas/Validation/ObjectPropertyValidatorManager"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ObjectPropertyValidatorManager

• `Const` **ObjectPropertyValidatorManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_validators` | `Map`\<`string`, [`ObjectPropertyValidator`](../classes/Schemas_Validation_ObjectPropertyValidator.ObjectPropertyValidator.md)\> |
| `getValidator` | (`id`: `string`) => [`ObjectPropertyValidator`](../classes/Schemas_Validation_ObjectPropertyValidator.ObjectPropertyValidator.md) |
| `registerValidators` | (`validators`: [`ObjectPropertyValidatorData`](Schemas_Validation_ObjectValidation_types.md#objectpropertyvalidatordata)[]) => `void` |

#### Defined in

[divinestar/utils/src/Schemas/Validation/ObjectPropertyValidatorManager.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/Validation/ObjectPropertyValidatorManager.ts#L4)
