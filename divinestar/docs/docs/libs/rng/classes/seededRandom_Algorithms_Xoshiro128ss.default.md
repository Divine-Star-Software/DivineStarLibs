---
id: "seededRandom_Algorithms_Xoshiro128ss.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[seededRandom/Algorithms/Xoshiro128ss](../modules/seededRandom_Algorithms_Xoshiro128ss.md).default

**`Classdesc`**

Concrete xoshiro128** implementation.

## Hierarchy

- [`default`](seededRandom_Algorithms_Base.default.md)

  ↳ **`default`**

## Implements

- [`default`](../interfaces/seededRandom_Algorithm.default.md)

## Constructors

### constructor

• **new default**(`str`): [`default`](seededRandom_Algorithms_Xoshiro128ss.default.md)

Create a new xoshiro128** instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`default`](seededRandom_Algorithms_Xoshiro128ss.default.md)

#### Overrides

[default](seededRandom_Algorithms_Base.default.md).[constructor](seededRandom_Algorithms_Base.default.md#constructor)

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:24](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L24)

## Properties

### a

• `Private` **a**: `number`

Seed parameters.

**`Var`**

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L14)

___

### b

• `Private` **b**: `number`

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:15](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L15)

___

### c

• `Private` **c**: `number`

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L16)

___

### d

• `Private` **d**: `number`

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L17)

## Methods

### next

▸ **next**(): `number`

Generate a random number using the xoshiro128** algorithm.

#### Returns

`number`

#### Implementation of

[default](../interfaces/seededRandom_Algorithm.default.md).[next](../interfaces/seededRandom_Algorithm.default.md#next)

#### Defined in

[seededRandom/Algorithms/Xoshiro128ss.ts:40](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Xoshiro128ss.ts#L40)

___

### \_xfnv1a

▸ **_xfnv1a**(`str`): () => `number`

Generate a hash from a string that is suitable to use as a seed for any
of the PRNG's that inherit from this.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

#### Inherited from

[default](seededRandom_Algorithms_Base.default.md).[_xfnv1a](seededRandom_Algorithms_Base.default.md#_xfnv1a)

#### Defined in

[seededRandom/Algorithms/Base.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Base.ts#L13)
