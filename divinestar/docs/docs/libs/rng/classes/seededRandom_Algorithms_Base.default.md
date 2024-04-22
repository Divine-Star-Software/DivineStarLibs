---
id: "seededRandom_Algorithms_Base.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[seededRandom/Algorithms/Base](../modules/seededRandom_Algorithms_Base.md).default

**`Classdesc`**

Base class all algorithm implementations should inherit from.

## Hierarchy

- **`default`**

  ↳ [`default`](seededRandom_Algorithms_Mulberry32.default.md)

  ↳ [`default`](seededRandom_Algorithms_Sfc32.default.md)

  ↳ [`default`](seededRandom_Algorithms_Xoshiro128ss.default.md)

## Constructors

### constructor

• **new default**(): [`default`](seededRandom_Algorithms_Base.default.md)

#### Returns

[`default`](seededRandom_Algorithms_Base.default.md)

## Methods

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

#### Defined in

[seededRandom/Algorithms/Base.ts:13](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Algorithms/Base.ts#L13)
