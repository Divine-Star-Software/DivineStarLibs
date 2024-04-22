---
id: "seededRandom_Algorithms_Mulberry32.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[seededRandom/Algorithms/Mulberry32](../modules/seededRandom_Algorithms_Mulberry32.md).default

**`Classdesc`**

Concrete mulberry32 implementation.

## Hierarchy

- [`default`](seededRandom_Algorithms_Base.default.md)

  ↳ **`default`**

## Implements

- [`default`](../interfaces/seededRandom_Algorithm.default.md)

## Constructors

### constructor

• **new default**(`str`): [`default`](seededRandom_Algorithms_Mulberry32.default.md)

Create a new mulberry32 instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`default`](seededRandom_Algorithms_Mulberry32.default.md)

#### Overrides

[default](seededRandom_Algorithms_Base.default.md).[constructor](seededRandom_Algorithms_Base.default.md#constructor)

#### Defined in

[seededRandom/Algorithms/Mulberry32.ts:21](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Mulberry32.ts#L21)

## Properties

### a

• `Private` **a**: `number`

Seed parameter.

**`Var`**

#### Defined in

[seededRandom/Algorithms/Mulberry32.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Mulberry32.ts#L14)

## Methods

### next

▸ **next**(): `number`

Generate a random number using the mulberry32 algorithm.

#### Returns

`number`

#### Implementation of

[default](../interfaces/seededRandom_Algorithm.default.md).[next](../interfaces/seededRandom_Algorithm.default.md#next)

#### Defined in

[seededRandom/Algorithms/Mulberry32.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Mulberry32.ts#L32)

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
