---
id: "Materials_URIMaterial.URIMaterial"
title: "Class: URIMaterial<Scene, Data, InternalMaterial>"
sidebar_label: "URIMaterial"
custom_edit_url: null
---

[Materials/URIMaterial](../modules/Materials_URIMaterial.md).URIMaterial

## Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md) = [`URIScene`](Scenes_URIScene.URIScene.md) |
| `Data` | extends `object` = `any` |
| `InternalMaterial` | extends `any` = `unknown` |

## Constructors

### constructor

• **new URIMaterial**\<`Scene`, `Data`, `InternalMaterial`\>(): [`URIMaterial`](Materials_URIMaterial.URIMaterial.md)\<`Scene`, `Data`, `InternalMaterial`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> = [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> |
| `Data` | extends `object` = `any` |
| `InternalMaterial` | extends `unknown` = `unknown` |

#### Returns

[`URIMaterial`](Materials_URIMaterial.URIMaterial.md)\<`Scene`, `Data`, `InternalMaterial`\>

## Properties

### \_material

• **\_material**: `InternalMaterial`

#### Defined in

[Materials/URIMaterial.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L26)

___

### id

• `Abstract` **id**: `string`

#### Defined in

[Materials/URIMaterial.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L28)

## Methods

### \_create

▸ **_create**(`data`): `InternalMaterial`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`URIMaterialData`](../interfaces/Materials_URIMaterial.URIMaterialData.md)\<`Scene`, `Data`\> |

#### Returns

`InternalMaterial`

#### Defined in

[Materials/URIMaterial.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L30)

___

### setMatrix

▸ **setMatrix**\<`MatrixType`\>(`uniform`, `matrix`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MatrixType` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `matrix` | `MatrixType` |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:44](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L44)

___

### setNumber

▸ **setNumber**(`uniform`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:33](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L33)

___

### setNumberArray

▸ **setNumberArray**(`uniform`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `value` | `ArrayLike`\<`number`\> |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:34](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L34)

___

### setTexture

▸ **setTexture**(`samplerId`, `sampler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `samplerId` | `string` |
| `sampler` | [`URITexture`](Textures_URITexture.URITexture.md)\<[`URIScene`](Scenes_URIScene.URIScene.md)\<`any`\>, `any`\> |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L32)

___

### setTextureArray

▸ **setTextureArray**(`samplerId`, `sampler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `samplerId` | `string` |
| `sampler` | [`URITexture`](Textures_URITexture.URITexture.md)\<[`URIScene`](Scenes_URIScene.URIScene.md)\<`any`\>, `any`\>[] |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:31](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L31)

___

### setVector2

▸ **setVector2**(`uniform`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:35](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L35)

___

### setVector3

▸ **setVector3**(`uniform`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:36](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L36)

___

### setVector4

▸ **setVector4**(`uniform`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniform` | `string` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Defined in

[Materials/URIMaterial.ts:37](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Materials/URIMaterial.ts#L37)
