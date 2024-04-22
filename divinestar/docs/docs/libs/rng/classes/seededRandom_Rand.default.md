---
id: "seededRandom_Rand.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[seededRandom/Rand](../modules/seededRandom_Rand.md).default

A class for generating random numbers. Several different (seedable) random
number generator algorithms are configurable.

See https://stackoverflow.com/a/47593316/7024747 for more info.

**`Classdesc`**

A class for generating random numbers.

## Constructors

### constructor

• **new default**(`str?`, `prng?`): [`default`](seededRandom_Rand.default.md)

Create a new rand instance.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str?` | `string` | `undefined` |
| `prng` | [`PRNG`](../enums/seededRandom_Rand.PRNG.md) | `PRNG.sfc32` |

#### Returns

[`default`](seededRandom_Rand.default.md)

#### Defined in

[seededRandom/Rand.ts:55](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L55)

## Properties

### generator

• `Private` **generator**: [`default`](../interfaces/seededRandom_Algorithm.default.md)

The generator that should be used for generating random numbers.

**`Var`**

#### Defined in

[seededRandom/Rand.ts:47](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L47)

___

### prng

• `Private` **prng**: [`PRNG`](../enums/seededRandom_Rand.PRNG.md)

The PRNG algorithm that should be used for random number generation.

**`Var`**

#### Defined in

[seededRandom/Rand.ts:40](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L40)

___

### str

• `Private` `Optional` **str**: `string`

The string that will be used for generating a suitable hash for any of
the provided PRNG algorithms.

**`Var`**

#### Defined in

[seededRandom/Rand.ts:33](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L33)

## Methods

### \_initializeGenerator

▸ **_initializeGenerator**(): [`default`](../interfaces/seededRandom_Algorithm.default.md)

Initialize the chosen random number generator.

#### Returns

[`default`](../interfaces/seededRandom_Algorithm.default.md)

#### Defined in

[seededRandom/Rand.ts:75](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L75)

___

### next

▸ **next**(): `number`

Generate a new random number using the selected generator.

#### Returns

`number`

#### Defined in

[seededRandom/Rand.ts:66](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L66)

___

### wrap

▸ **wrap**(): [`default`](../interfaces/seededRandom_Algorithm.default.md)

Wrap the standard random function in an object.

#### Returns

[`default`](../interfaces/seededRandom_Algorithm.default.md)

#### Defined in

[seededRandom/Rand.ts:95](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/Rand.ts#L95)
