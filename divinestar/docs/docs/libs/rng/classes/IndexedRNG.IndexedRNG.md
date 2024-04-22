---
id: "IndexedRNG.IndexedRNG"
title: "Class: IndexedRNG"
sidebar_label: "IndexedRNG"
custom_edit_url: null
---

[IndexedRNG](../modules/IndexedRNG.md).IndexedRNG

## Constructors

### constructor

• **new IndexedRNG**(`seed`): [`IndexedRNG`](IndexedRNG.IndexedRNG.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `number` |

#### Returns

[`IndexedRNG`](IndexedRNG.IndexedRNG.md)

#### Defined in

[IndexedRNG/index.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L11)

## Properties

### MAX\_VERTICES

• **MAX\_VERTICES**: `number` = `256_000`

#### Defined in

[IndexedRNG/index.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L4)

___

### MAX\_VERTICES\_MASK

• **MAX\_VERTICES\_MASK**: `number`

#### Defined in

[IndexedRNG/index.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L5)

___

### amplitude

• **amplitude**: `number` = `1`

#### Defined in

[IndexedRNG/index.ts:6](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L6)

___

### r

• **r**: `number`[] = `[]`

#### Defined in

[IndexedRNG/index.ts:9](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L9)

___

### scale

• **scale**: `number` = `1`

#### Defined in

[IndexedRNG/index.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L7)

___

### seed

• **seed**: `number`

#### Defined in

[IndexedRNG/index.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L11)

## Methods

### \_lerp

▸ **_lerp**(`a`, `b`, `t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `t` | `number` |

#### Returns

`number`

#### Defined in

[IndexedRNG/index.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L28)

___

### get

▸ **get**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[IndexedRNG/index.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/IndexedRNG/index.ts#L18)
