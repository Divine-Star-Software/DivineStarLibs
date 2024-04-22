---
id: "Search_FuzzySearch.FuzzySearch"
title: "Class: FuzzySearch"
sidebar_label: "FuzzySearch"
custom_edit_url: null
---

[Search/FuzzySearch](../modules/Search_FuzzySearch.md).FuzzySearch

## Constructors

### constructor

• **new FuzzySearch**(): [`FuzzySearch`](Search_FuzzySearch.FuzzySearch.md)

#### Returns

[`FuzzySearch`](Search_FuzzySearch.FuzzySearch.md)

## Methods

### \_compareBool

▸ **_compareBool**(`string`, `compare`, `ratio?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `string` | `string` | `undefined` |
| `compare` | `string` | `undefined` |
| `ratio` | `number` | `0.5` |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:7](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L7)

___

### \_compareNumber

▸ **_compareNumber**(`string`, `compare`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `compare` | `string` |

#### Returns

`number`

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:23](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L23)

___

### \_process

▸ **_process**(`input`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`[]

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:2](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L2)

___

### \_processStrings

▸ **_processStrings**(`strings`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `string`[] |

#### Returns

`string`[]

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:37](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L37)

___

### fuzzyCloseMatch

▸ **fuzzyCloseMatch**(`haystack`, `needle`, `overallRatio?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `haystack` | `string`[] | `undefined` |
| `needle` | `string`[] | `undefined` |
| `overallRatio` | `number` | `0.5` |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:78](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L78)

___

### fuzzyHas

▸ **fuzzyHas**(`haystack`, `needle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `haystack` | `string`[] |
| `needle` | `string`[] |

#### Returns

`boolean`

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:41](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L41)

___

### fuzzySearch

▸ **fuzzySearch**(`haystack`, `needle`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `haystack` | `string`[] |
| `needle` | `string`[] |

#### Returns

`string`[]

#### Defined in

[divinestar/utils/src/Search/FuzzySearch.ts:59](https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinestar/utils/src/Search/FuzzySearch.ts#L59)
