---
id: "Meshes_URIMesh.URIMesh"
title: "Class: URIMesh<Scene, InternalMesh>"
sidebar_label: "URIMesh"
custom_edit_url: null
---

[Meshes/URIMesh](../modules/Meshes_URIMesh.md).URIMesh

## Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md) = [`URIScene`](Scenes_URIScene.URIScene.md) |
| `InternalMesh` | extends `any` = `unknown` |

## Hierarchy

- [`URIMeshBase`](Meshes_URIMeshBase.URIMeshBase.md)

  ↳ **`URIMesh`**

## Constructors

### constructor

• **new URIMesh**\<`Scene`, `InternalMesh`\>(`scene`): [`URIMesh`](Meshes_URIMesh.URIMesh.md)\<`Scene`, `InternalMesh`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> = [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> |
| `InternalMesh` | extends `unknown` = `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |

#### Returns

[`URIMesh`](Meshes_URIMesh.URIMesh.md)\<`Scene`, `InternalMesh`\>

#### Overrides

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[constructor](Meshes_URIMeshBase.URIMeshBase.md#constructor)

#### Defined in

[Meshes/URIMesh.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L8)

## Properties

### \_mesh

• **\_mesh**: `InternalMesh`

#### Defined in

[Meshes/URIMesh.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L11)

___

### isVisible

• `Abstract` **isVisible**: `boolean`

#### Defined in

[Meshes/URIMesh.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L14)

___

### scene

• **scene**: `Scene`

#### Defined in

[Meshes/URIMesh.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L8)

## Methods

### clearCachedData

▸ **clearCachedData**(): `void`

#### Returns

`void`

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[clearCachedData](Meshes_URIMeshBase.URIMeshBase.md#clearcacheddata)

#### Defined in

[Meshes/URIMeshBase.ts:8](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L8)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[Meshes/URIMesh.ts:12](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L12)

___

### getIndicies

▸ **getIndicies**(): `ArrayLike`\<`number`\>

#### Returns

`ArrayLike`\<`number`\>

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[getIndicies](Meshes_URIMeshBase.URIMeshBase.md#getindicies)

#### Defined in

[Meshes/URIMeshBase.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L5)

___

### getVertexData

▸ **getVertexData**(`id`): `ArrayLike`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`ArrayLike`\<`number`\>

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[getVertexData](Meshes_URIMeshBase.URIMeshBase.md#getvertexdata)

#### Defined in

[Meshes/URIMeshBase.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L7)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[Meshes/URIMesh.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMesh.ts#L15)

___

### setIndicies

▸ **setIndicies**(`indicies`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indicies` | `ArrayLike`\<`number`\> |

#### Returns

`void`

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[setIndicies](Meshes_URIMeshBase.URIMeshBase.md#setindicies)

#### Defined in

[Meshes/URIMeshBase.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L4)

___

### setVertexData

▸ **setVertexData**(`id`, `data`, `stride`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `ArrayLike`\<`number`\> |
| `stride` | `number` |

#### Returns

`void`

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[setVertexData](Meshes_URIMeshBase.URIMeshBase.md#setvertexdata)

#### Defined in

[Meshes/URIMeshBase.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L6)
