import {
  BiquadFilterNodeData,
  DynamicCompressorData,
  PannerNodeData,
} from "../Meta/APITypes";
import { MusicTrackNodes } from "../Meta/AudioTypes";

const context = new AudioContext();
const mainChanel = context.createGain();
mainChanel.gain.value = 1;
mainChanel.connect(context.destination);
const mainCompression = context.createDynamicsCompressor();
let connected = false;
mainCompression.threshold.value = -50;
mainCompression.knee.value = 40;
mainCompression.ratio.value = 12;
mainCompression.attack.value = 0;
mainCompression.release.value = 0.25;
mainCompression.release.value = 0.25;
export const APIManager = {
  context: context,

  _dissconectEvent: new Event("disconnect"),

  compressionEnabled: true,
  compression: mainCompression,
  main: mainChanel,

  pannerNodeDefaults: <Partial<PannerNodeData>>{
    panningModel: "HRTF",
    distanceModel: "exponential",
  },

  $INIT() {
    if (!APIManager.context) {
      throw new Error(
        "AudioContext is not found. This browser is not suppourted."
      );
    }
  },

  connectToMain(node: AudioNode) {
    if (this.compressionEnabled) {
      node.connect(this.compression);
      if (!connected) this.compression.connect(context.destination);
      connected = true;
      return;
    }
    node.connect(context.destination);
  },

  createAudioBufferSource(buffer: AudioBuffer) {
    const source = context.createBufferSource();
    source.buffer = buffer;
    return source;
  },

  createDynamicCompressor(data: DynamicCompressorData) {
    const comp = this.context.createDynamicsCompressor();
    if (data.threshold != undefined) {
      comp.threshold.value = data.threshold;
    }
    if (data.knee != undefined) {
      comp.knee.value = data.knee;
    }
    if (data.ratio != undefined) {
      comp.ratio.value = data.ratio;
    }
    if (data.attack != undefined) {
      comp.attack.value = data.attack;
    }
    if (data.release != undefined) {
      comp.release.value = data.release;
    }
  },

  /*
  https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
  */
  createWaveShapeNode(curve: Float32Array, oversample?: OverSampleType) {
    const node = this.context.createWaveShaper();
    node.curve = curve;
    if (oversample) {
      node.oversample = oversample;
    }
  },

  createGain(value: number = 1) {
    const gain = this.context.createGain();
    gain.gain.value = value;
    return gain;
  },

  createDelayNode(delayTime: number) {
    const delay = this.context.createDelay();
    delay.delayTime.value = delayTime;
    return delay;
  },

  createBiQuadFilterNode(data: BiquadFilterNodeData) {
    const filter = this.context.createBiquadFilter();
    filter.type = data.type;
    filter.frequency.value = data.frequency;
    if (data.Q != undefined) {
      filter.Q.value = data.Q;
    }
    if (data.detune != undefined) {
      filter.detune.value = data.detune;
    }
    return filter;
  },

  createConvolver(buffer: AudioBuffer) {
    const convolver = this.context.createConvolver();
    convolver.buffer = buffer;
    return convolver;
  },

  createPannerNode(nodeData: Partial<PannerNodeData>) {
    const context = this.context;
    if (!nodeData.distanceModel) {
      nodeData.distanceModel = this.pannerNodeDefaults.distanceModel;
    }
    if (!nodeData.panningModel) {
      nodeData.panningModel = this.pannerNodeDefaults.panningModel;
    }

    return new PannerNode(context, nodeData);
  },

  async loadAudioBuffer(path: string): Promise<AudioBuffer> {
    const response = await fetch(path);
    const buffer = await response.arrayBuffer();
    const source = await APIManager.context.decodeAudioData(buffer);
    return source;
  },

  async creteAudioBuffer(data: Uint8Array): Promise<AudioBuffer> {
    const source = await APIManager.context.decodeAudioData(data.buffer);
    return source;
  },

  createAudioElementNode(path: string) {
    const audio = new Audio(path);
    const audioNode = APIManager.context.createMediaElementSource(audio);
    return {
      audio,
      audioNode,
    };
  },
};
