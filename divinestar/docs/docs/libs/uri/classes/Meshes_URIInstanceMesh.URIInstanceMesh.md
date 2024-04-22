---
id: "Meshes_URIInstanceMesh.URIInstanceMesh"
title: "Class: URIInstanceMesh<Scene, InternalMesh, InstanceMeshEntity>"
sidebar_label: "URIInstanceMesh"
custom_edit_url: null
---

[Meshes/URIInstanceMesh](../modules/Meshes_URIInstanceMesh.md).URIInstanceMesh

## Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md) = [`URIScene`](Scenes_URIScene.URIScene.md) |
| `InternalMesh` | extends `any` = `unknown` |
| `InstanceMeshEntity` | extends [`URIInstanceMeshEntity`](Meshes_URIInstanceMesh.URIInstanceMeshEntity.md) = [`URIInstanceMeshEntity`](Meshes_URIInstanceMesh.URIInstanceMeshEntity.md) |

## Hierarchy

- [`URIMeshBase`](Meshes_URIMeshBase.URIMeshBase.md)

  ↳ **`URIInstanceMesh`**

## Constructors

### constructor

• **new URIInstanceMesh**\<`Scene`, `InternalMesh`, `InstanceMeshEntity`\>(`scene`): [`URIInstanceMesh`](Meshes_URIInstanceMesh.URIInstanceMesh.md)\<`Scene`, `InternalMesh`, `InstanceMeshEntity`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Scene` | extends [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> = [`URIScene`](Scenes_URIScene.URIScene.md)\<`unknown`\> |
| `InternalMesh` | extends `unknown` = `unknown` |
| `InstanceMeshEntity` | extends [`URIInstanceMeshEntity`](Meshes_URIInstanceMesh.URIInstanceMeshEntity.md)\<`unknown`\> = [`URIInstanceMeshEntity`](Meshes_URIInstanceMesh.URIInstanceMeshEntity.md)\<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |

#### Returns

[`URIInstanceMesh`](Meshes_URIInstanceMesh.URIInstanceMesh.md)\<`Scene`, `InternalMesh`, `InstanceMeshEntity`\>

#### Overrides

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[constructor](Meshes_URIMeshBase.URIMeshBase.md#constructor)

#### Defined in

[Meshes/URIInstanceMesh.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L16)

## Properties

### \_mesh

• **\_mesh**: `InternalMesh`

#### Defined in

[Meshes/URIInstanceMesh.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L15)

___

### scene

• **scene**: `Scene`

#### Defined in

[Meshes/URIInstanceMesh.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L16)

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

### getIndicies

▸ **getIndicies**(): `ArrayLike`\<`number`\>

#### Returns

`ArrayLike`\<`number`\>

#### Inherited from

[URIMeshBase](Meshes_URIMeshBase.URIMeshBase.md).[getIndicies](Meshes_URIMeshBase.URIMeshBase.md#getindicies)

#### Defined in

[Meshes/URIMeshBase.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIMeshBase.ts#L5)

___

### getInstance

▸ **getInstance**(): `InstanceMeshEntity`

#### Returns

`InstanceMeshEntity`

#### Defined in

[Meshes/URIInstanceMesh.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L21)

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

### setCount

▸ **setCount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[Meshes/URIInstanceMesh.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L19)

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

### setInstanceBuffer

▸ **setInstanceBuffer**(`id`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

[Meshes/URIInstanceMesh.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/uri/src/Meshes/URIInstanceMesh.ts#L20)

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
