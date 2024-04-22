---
id: "perlin.PerlinNoise3d"
title: "Class: PerlinNoise3d"
sidebar_label: "PerlinNoise3d"
custom_edit_url: null
---

[perlin](../modules/perlin.md).PerlinNoise3d

# Perlin Noise 3d
---
TypeScript version of the library found here:
https://github.com/alterebro/perlin-noise-3d

## Constructors

### constructor

• **new PerlinNoise3d**(): [`PerlinNoise3d`](perlin.PerlinNoise3d.md)

#### Returns

[`PerlinNoise3d`](perlin.PerlinNoise3d.md)

#### Defined in

[perlin/index.ts:33](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L33)

## Properties

### DEG\_TO\_RAD

• **DEG\_TO\_RAD**: `number`

#### Defined in

[perlin/index.ts:26](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L26)

___

### PERLIN\_SIZE

• **PERLIN\_SIZE**: `number` = `4095`

#### Defined in

[perlin/index.ts:20](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L20)

___

### PERLIN\_YWRAP

• **PERLIN\_YWRAP**: `number`

#### Defined in

[perlin/index.ts:17](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L17)

___

### PERLIN\_YWRAPB

• **PERLIN\_YWRAPB**: `number` = `4`

#### Defined in

[perlin/index.ts:16](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L16)

___

### PERLIN\_ZWRAP

• **PERLIN\_ZWRAP**: `number`

#### Defined in

[perlin/index.ts:19](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L19)

___

### PERLIN\_ZWRAPB

• **PERLIN\_ZWRAPB**: `number` = `8`

#### Defined in

[perlin/index.ts:18](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L18)

___

### SINCOS\_LENGTH

• **SINCOS\_LENGTH**: `number`

#### Defined in

[perlin/index.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L23)

___

### SINCOS\_PRECISION

• **SINCOS\_PRECISION**: `number` = `0.5`

#### Defined in

[perlin/index.ts:22](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L22)

___

### cosLUT

• **cosLUT**: `any`[]

#### Defined in

[perlin/index.ts:25](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L25)

___

### lcg

• **lcg**: [`LCG`](seededRandom_LCG.LCG.md)

#### Defined in

[perlin/index.ts:32](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L32)

___

### perlin

• **perlin**: ``null`` \| `any`[] = `null`

#### Defined in

[perlin/index.ts:29](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L29)

___

### perlin\_PI

• **perlin\_PI**: `number`

#### Defined in

[perlin/index.ts:30](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L30)

___

### perlin\_amp\_falloff

• **perlin\_amp\_falloff**: `number` = `0.5`

#### Defined in

[perlin/index.ts:28](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L28)

___

### perlin\_octaves

• **perlin\_octaves**: `number` = `4`

#### Defined in

[perlin/index.ts:27](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L27)

## Methods

### get

▸ **get**(`x`, `y`, `z`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`number`

#### Defined in

[perlin/index.ts:62](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L62)

___

### noiseSeed

▸ **noiseSeed**(`seed`): [`PerlinNoise3d`](perlin.PerlinNoise3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `number` |

#### Returns

[`PerlinNoise3d`](perlin.PerlinNoise3d.md)

#### Defined in

[perlin/index.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L41)

___

### noise\_fsc

▸ **noise_fsc**(`i`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`number`

#### Defined in

[perlin/index.ts:54](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/rng/src/perlin/index.ts#L54)
