import { TraitData } from "./NodeData.types";
import { ComponentBase } from "./ComponentBase";
import { Observable } from "@divinestar/utils/Observers";
import { Pipeline } from "@divinestar/utils/Pipelines";
import { NodeRegister } from "./NodeRegister";
import { NodeGraph } from "./NodeGraph";
import { Node } from "./Node";
export interface TraitBaseConstructor<Properties extends object = any> {
  Meta: {
    id: string;
    name: string;
  };
  CreateNew(overrides: Partial<TraitData<Properties>>): TraitData<Properties>;
  new (
    parent: TraitBase<any> | ComponentBase<any>,
    data: TraitData<Properties>
  ): TraitBase<Properties>;
}

class TraitBaseObservers {
  disposed = new Observable();
  active = new Observable<boolean>();
  visible = new Observable<boolean>();
  traitAdded = new Observable<TraitBase>();
  traitRemoved = new Observable<TraitBase>();
}

class TraitBasePipelines<Properties extends object = any> {
  disposed = new Pipeline<TraitBase<Properties>>();
  toJSON = new Pipeline<TraitData<Properties>>();
  copy = new Pipeline<TraitData<Properties>>();
}

export abstract class TraitBase<Properties extends object = any> {
  static CreateBase(): TraitData {
    return {
      id: NodeGraph.GenerateId(),
      type: "",
      properties: "",
      traits: [],
    };
  }
  isNode: false = false;
  isComponent: false = false;
  isTrait: true = true;

  baseObservers = new TraitBaseObservers();
  basePipelines = new TraitBasePipelines<Properties>();
  traits: TraitBase<any>[] = [];
  constructor(
    public parent: TraitBase<any> | ComponentBase<any>,
    public data: TraitData<Properties>
  ) {
    for (const component of data.traits) {
      this.addTraits(component);
    }
  }

  abstract init(): Promise<void>;
  abstract getClass(): TraitBaseConstructor<Properties>;
  async initAllTraits() {
    for (const trait of this.traits) {
      await trait.init();
    }
  }

  *traverseTraits(): Generator<TraitBase> {
    const children = [...this.traits];
    while (children.length) {
      const child = children.shift()!;
      yield child;
      if (child.traits.length) children.push(...child.traits);
    }
  }

  private _active = false;
  isActive() {
    return this._active;
  }
  setActive(active: boolean) {
    this._active = active;
    this.baseObservers.active.notify(active);
  }

  private _visible = false;
  isVisible() {
    return this._visible;
  }
  setVisible(visible: boolean) {
    this._visible = visible;
    this.baseObservers.visible.notify(visible);
  }

  private _disposed = false;
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed = true;
    for (const child of this.traits) {
      child.dispose();
    }
    this.basePipelines.disposed.pipe(this);
    this.baseObservers.disposed.notify();
  }
  addTraits(...traits: TraitData[]) {
    for (const trait of traits) {
      const traitType = NodeRegister.getTrait(trait.type);
      const newTrait = new traitType(this, trait);
      this.traits.push(newTrait);
      this.baseObservers.traitAdded.notify(newTrait);
    }
  }
  getTraitById(id: string) {
    return this.traits.find((_) => _.data.id == id);
  }
  removeTraitById(id: string) {
    const index = this.traits.findIndex((_) => _.data.id == id);
    if (index !== -1) {
      const child = this.traits.splice(index, 1)![0];
      this.baseObservers.traitRemoved.notify(child);
    }
  }
  removeTraitsByType(type: string) {
    const components = this.traits.filter((_) => _.data.type == type);
    components.forEach((_) => this.removeTraitById(_.data.id));
  }
  getTraitByType(type: string) {
    return this.traits.find((_) => _.data.type == type);
  }
  getTraitsByType(type: string) {
    return this.traits.filter((_) => _.data.type == type);
  }

  getNode(): Node {
    if (this.parent.isComponent) return this.parent.node;
    let parent: TraitBase | ComponentBase = this.parent;
    while (parent) {
      if (parent.isComponent) return parent.node;
      parent = parent.parent;
    }
    throw new Error(`Node not found for trait.`);
  }

  copy(): TraitData {
    return this.basePipelines.copy.pipe({
      id: NodeGraph.GenerateId(),
      properties: { ...this.data.properties },
      type: this.data.type,
      traits: this.traits.map((_) => _.copy()),
    });
  }

  toJSON(): TraitData {
    return this.basePipelines.toJSON.pipe({
      id: this.data.id,
      properties: { ...this.data.properties },
      type: this.data.type,
      traits: this.traits.map((_) => _.toJSON()),
    });
  }
}
