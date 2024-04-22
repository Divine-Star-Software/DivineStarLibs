---
id: "Schemas_ObjectCollection_types"
title: "Module: Schemas/ObjectCollection.types"
sidebar_label: "Schemas/ObjectCollection.types"
custom_edit_url: null
---

## Type Aliases

### ObjectCollectionColorInput

Ƭ **ObjectCollectionColorInput**: \{ `type`: ``"color"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`string`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:55](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L55)

___

### ObjectCollectionCondition

Ƭ **ObjectCollectionCondition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `mode` | ``"equals"`` \| ``"not-equals"`` \| ``"contains"`` |
| `value` | `any` |

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:77](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L77)

___

### ObjectCollectionConditionTypes

Ƭ **ObjectCollectionConditionTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conditions` | [`ObjectCollectionCondition`](Schemas_ObjectCollection_types.md#objectcollectioncondition)[] |
| `type` | ``"enable"`` |

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:82](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L82)

___

### ObjectCollectionData

Ƭ **ObjectCollectionData**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ObjectCollectionInputs`](Schemas_ObjectCollection_types.md#objectcollectioninputs) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conditions?` | [`ObjectCollectionConditionTypes`](Schemas_ObjectCollection_types.md#objectcollectionconditiontypes)[] |
| `editable?` | `boolean` |
| `groupId` | `string` |
| `id` | `string` |
| `input?` | `T` |
| `name` | `string` |

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:86](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L86)

___

### ObjectCollectionDataTypes

Ƭ **ObjectCollectionDataTypes**: ``"string"`` \| ``"number"`` \| ``"vec3"`` \| ``"boolean"`` \| ``"json"``

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:70](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L70)

___

### ObjectCollectionFilePathInput

Ƭ **ObjectCollectionFilePathInput**: \{ `acceptedFileExtensions`: `string`[] ; `type`: ``"file-path"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`string`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:58](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L58)

___

### ObjectCollectionFloatInput

Ƭ **ObjectCollectionFloatInput**: \{ `max`: `number` ; `min`: `number` ; `type`: ``"float"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`number`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:45](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L45)

___

### ObjectCollectionGroupData

Ƭ **ObjectCollectionGroupData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:1](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L1)

___

### ObjectCollectionInputBase

Ƭ **ObjectCollectionInputBase**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeStore?` | (`newValue`: `T`) => `any` |
| `default` | `T` |
| `mode?` | `string` |
| `onUpdate?` | (`newValue`: `T`) => `void` |
| `required?` | `boolean` |
| `validator?` | `string` |

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:62](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L62)

___

### ObjectCollectionInputs

Ƭ **ObjectCollectionInputs**: [`ObjectCollectionColorInput`](Schemas_ObjectCollection_types.md#objectcollectioncolorinput) \| [`ObjectCollectionRangeInput`](Schemas_ObjectCollection_types.md#objectcollectionrangeinput) \| [`ObjectCollectionFloatInput`](Schemas_ObjectCollection_types.md#objectcollectionfloatinput) \| [`ObjectCollectionVec2Input`](Schemas_ObjectCollection_types.md#objectcollectionvec2input) \| [`ObjectCollectionVec3Input`](Schemas_ObjectCollection_types.md#objectcollectionvec3input) \| [`ObjectCollectionIntInput`](Schemas_ObjectCollection_types.md#objectcollectionintinput) \| [`ObjectCollectionStringInput`](Schemas_ObjectCollection_types.md#objectcollectionstringinput) \| [`ObjectCollectionSelectInput`](Schemas_ObjectCollection_types.md#objectcollectionselectinput) \| [`ObjectCollectionFilePathInput`](Schemas_ObjectCollection_types.md#objectcollectionfilepathinput) \| [`ObjectCollectionPasswordInput`](Schemas_ObjectCollection_types.md#objectcollectionpasswordinput)

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L6)

___

### ObjectCollectionIntInput

Ƭ **ObjectCollectionIntInput**: \{ `max`: `number` ; `min`: `number` ; `type`: ``"int"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`number`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:50](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L50)

___

### ObjectCollectionPasswordInput

Ƭ **ObjectCollectionPasswordInput**: \{ `max`: `number` ; `min`: `number` ; `type`: ``"password"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`string`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:36](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L36)

___

### ObjectCollectionRangeInput

Ƭ **ObjectCollectionRangeInput**: \{ `max`: `number` ; `min`: `number` ; `step`: `number` ; `type`: ``"range"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`number`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L25)

___

### ObjectCollectionSelectInput

Ƭ **ObjectCollectionSelectInput**: \{ `options`: [title: string, value: string][] ; `type`: ``"select"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`string`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L41)

___

### ObjectCollectionStringInput

Ƭ **ObjectCollectionStringInput**: \{ `max`: `number` ; `min`: `number` ; `type`: ``"string"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<`string`\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L31)

___

### ObjectCollectionVec2Input

Ƭ **ObjectCollectionVec2Input**: \{ `type`: ``"vec2"`` ; `valueType`: ``"position"`` \| ``"dimension"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<[x: number, z: number]\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L17)

___

### ObjectCollectionVec3Input

Ƭ **ObjectCollectionVec3Input**: \{ `type`: ``"vec3"`` ; `valueType`: ``"position"`` \| ``"dimension"``  } & [`ObjectCollectionInputBase`](Schemas_ObjectCollection_types.md#objectcollectioninputbase)\<[x: number, y: number, z: number]\>

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L21)

___

### StoredCollection

Ƭ **StoredCollection**: [`string`, `any`][]

#### Defined in

[divinestar/utils/src/Schemas/ObjectCollection.types.ts:96](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Schemas/ObjectCollection.types.ts#L96)
