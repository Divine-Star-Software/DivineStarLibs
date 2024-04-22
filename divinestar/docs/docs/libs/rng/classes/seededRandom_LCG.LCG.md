---
id: "seededRandom_LCG.LCG"
title: "Class: LCG"
sidebar_label: "LCG"
custom_edit_url: null
---

[seededRandom/LCG](../modules/seededRandom_LCG.md).LCG

## Constructors

### constructor

• **new LCG**(`seed`): [`LCG`](seededRandom_LCG.LCG.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `number` |

#### Returns

[`LCG`](seededRandom_LCG.LCG.md)

#### Defined in

[seededRandom/LCG.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L7)

## Properties

### a

• **a**: `number` = `1664525`

#### Defined in

[seededRandom/LCG.ts:3](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L3)

___

### c

• **c**: `number` = `1013904223`

#### Defined in

[seededRandom/LCG.ts:4](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L4)

___

### m

• **m**: `number` = `4294967296`

#### Defined in

[seededRandom/LCG.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L2)

___

### seed

• **seed**: `number`

#### Defined in

[seededRandom/LCG.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L7)

___

### z

• **z**: `number` = `0`

#### Defined in

[seededRandom/LCG.ts:5](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L5)

## Methods

### getSeed

▸ **getSeed**(): `number`

#### Returns

`number`

#### Defined in

[seededRandom/LCG.ts:14](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L14)

___

### rand

▸ **rand**(): `number`

#### Returns

`number`

#### Defined in

[seededRandom/LCG.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L17)

___

### setSeed

▸ **setSeed**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[seededRandom/LCG.ts:11](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/seededRandom/LCG.ts#L11)
