import type {
  DBTBooleanTag,
  DBTNumberTag,
  DBTTypedNumberTag,
  NumberTypes,
  DBTSchema,
  DBTTagNodes,
  DBTTypedNumberArrayTag,
  DBTHeaderTag,
  DBTBitArrayTab,
} from "./Types/DBTSchema.types";
import type { RemoteTagManagerInitData } from "./Types/Util.types.js";
import { DBTUtil, TagNodeTypes, NumberTypeRecord } from "./Util/DBTUtil.js";
import { TagManagerBase } from "./Classes/TagManagerBase.js";

type TagManagerInitData = {
  indexBufferMode?: "normal" | "shared";
  numberOfIndexes?: number;
};
const TagIndexSize =
  DBTUtil.getTypedSize("32ui") + DBTUtil.getTypedSize("8ui") * 3;

const setIndexData = (
  data: DataView,
  indexBufferIndex: number,
  byteIndex: number,
  bitOffSet: number,
  bitSize: number,
  type: number
) => {
  data.setUint32(indexBufferIndex, byteIndex);
  indexBufferIndex += DBTUtil.getTypedSize("32ui");
  data.setUint8(indexBufferIndex, bitOffSet);
  indexBufferIndex += DBTUtil.getTypedSize("8ui");
  data.setUint8(indexBufferIndex, bitSize);
  indexBufferIndex += DBTUtil.getTypedSize("8ui");
  data.setUint8(indexBufferIndex, type);
  indexBufferIndex += DBTUtil.getTypedSize("8ui");
  return indexBufferIndex;
};

export class TagManager extends TagManagerBase {
  schema: DBTSchema = new Map();

  initData = <RemoteTagManagerInitData>{};

  constructor(public id: string) {
    super(id);
  }

  registerTag(tagData: DBTTagNodes) {
    this.schema.set(tagData.id, tagData);
  }
  $INIT(initData?: TagManagerInitData): RemoteTagManagerInitData {
    /*
[Process Tags]
*/
    const headers: Map<NumberTypes, DBTHeaderTag[]> = new Map();
    const booleans: DBTBooleanTag[] = [];
    const numbers: DBTNumberTag[][] = [];
    const typedNumbers: Map<NumberTypes, DBTTypedNumberTag[]> = new Map();
    const typedNumbersArrays: Map<NumberTypes, DBTTypedNumberArrayTag[]> =
      new Map();
    const bitArrays: DBTBitArrayTab[] = [];
    this.schema.forEach((tag) => {
      if (tag.type == "header") {
        let tags = headers.get(tag.numberType);
        if (!tags) {
          tags = [];
          headers.set(tag.numberType, tags);
        }
        tags.push(tag);
      }
      if (tag.type == "boolean") {
        booleans.push(tag);
      }
      if (tag.type == "number") {
        const range = (tag as DBTNumberTag).range;
        const bitSize = DBTUtil.calculateBitsNeeded(range[0], range[1]);

        numbers[bitSize] ??= [];
        numbers[bitSize].push(tag);
      }
      if (tag.type == "typed-number") {
        let tags = typedNumbers.get(tag.numberType);
        if (!tags) {
          tags = [];
          typedNumbers.set(tag.numberType, tags);
        }
        tags.push(tag);
      }
      if (tag.type == "typed-number-array") {
        let arrayTags = typedNumbersArrays.get(tag.numberType);
        if (!arrayTags) {
          arrayTags = [];
          typedNumbersArrays.set(tag.numberType, arrayTags);
        }
        arrayTags.push(tag);
      }
      if (tag.type == "bit-array") {
        bitArrays.push(tag);
      }
    });

    /*
[Build Index]
*/
    const indexSize = this.schema.size * TagIndexSize;
    let indexBuffer = new ArrayBuffer(indexSize);
    if (initData?.indexBufferMode == "shared") {
      indexBuffer = new SharedArrayBuffer(indexSize);
    }
    const index = new DataView(indexBuffer);

    this.index = index;
    let indexBufferIndex = 0;

    let byteIndex = 0;
    let bitIndex = 0;
    let bitSize = 1;
    /*
[Headers]
*/
    headers.forEach((tags, type) => {
      const byteSise = DBTUtil.getTypedSize(type);
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        this.indexMap.set(tag.id, indexBufferIndex);
        indexBufferIndex = setIndexData(
          index,
          indexBufferIndex,
          byteIndex,
          0,
          NumberTypeRecord[tag.numberType],
          TagNodeTypes.typedNumber
        );
        byteIndex += byteSise;
      }
    });

    /*
[Booleans]
*/
    bitSize = 1;
    for (let i = 0; i < booleans.length; i++) {
      const bool = booleans[i];
      this.indexMap.set(bool.id, indexBufferIndex);
      indexBufferIndex = setIndexData(
        index,
        indexBufferIndex,
        byteIndex,
        bitIndex,
        bitSize,
        TagNodeTypes.boolean
      );
      bitIndex++;
      if (bitIndex >= 8) {
        byteIndex++;
        bitIndex = 0;
      }
    }
    /*
[Ranged Numbers]
*/
    byteIndex++;
    bitIndex = 0;
    let cachedBitSize = 0;
    numbers.forEach((tags, bitS) => {
      bitSize = bitS;
      if (cachedBitSize != bitSize) {
        byteIndex++;
        bitIndex = 0;
      }
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        this.indexMap.set(tag.id, indexBufferIndex);
        indexBufferIndex = setIndexData(
          index,
          indexBufferIndex,
          byteIndex,
          bitIndex,
          bitSize,
          TagNodeTypes.number
        );
        bitIndex += bitSize;
        if (bitIndex >= 8) {
          byteIndex++;
          bitIndex = 0;
        }
      }
    });
    /*
[Typed Numbers]
*/
    bitIndex = 0;
    byteIndex++;
    typedNumbers.forEach((tags, type) => {
      const byteSise = DBTUtil.getTypedSize(type);
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        this.indexMap.set(tag.id, indexBufferIndex);
        indexBufferIndex = setIndexData(
          index,
          indexBufferIndex,
          byteIndex,
          0,
          NumberTypeRecord[tag.numberType],
          TagNodeTypes.typedNumber
        );
        byteIndex += byteSise;
      }
    });
    /*
[Typed Numbers Arrays]
*/
    byteIndex++;
    typedNumbersArrays.forEach((tags, type) => {
      const byteSise = DBTUtil.getTypedSize(type);
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        this.indexMap.set(tag.id, indexBufferIndex);
        indexBufferIndex = setIndexData(
          index,
          indexBufferIndex,
          byteIndex,
          0,
          NumberTypeRecord[tag.numberType],
          TagNodeTypes.typedNumberArray
        );
        byteIndex += byteSise * tag.length;
      }
    });
    byteIndex++;
    bitArrays.forEach((tag) => {
      const byteSise = Math.ceil(tag.length / 8) + 1;
      this.indexMap.set(tag.id, indexBufferIndex);
      indexBufferIndex = setIndexData(
        index,
        indexBufferIndex,
        byteIndex,
        0,
        byteSise,
        TagNodeTypes.bitArray
      );
      byteIndex += byteSise;
    });
    /*
[Create Remote Tag Manager Data]
*/
    let numberOfIndexes = 1;
    if (initData?.numberOfIndexes) {
      numberOfIndexes = initData.numberOfIndexes;
    }
    this.tagIndexes = numberOfIndexes;
    this.tagSize = byteIndex;
    const remoteData = {
      bufferSize: byteIndex * numberOfIndexes,
      buffer: new ArrayBuffer(0),
      indexBuffer: indexBuffer,
      indexMap: this.indexMap,
      tagSize: this.tagSize,
      totalIndexes: numberOfIndexes,
    };
    this.initData = remoteData;
    return remoteData;
  }
}
