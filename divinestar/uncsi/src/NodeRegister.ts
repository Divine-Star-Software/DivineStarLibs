import { ComponentBaseConstructor } from "./ComponentBase";
import { TraitBaseConstructor } from "./TraitBase";

export class NodeRegister {
  static _components = new Map<string, ComponentBaseConstructor>();
  static _traits = new Map<string, TraitBaseConstructor>();

  static registerComponents(...nodes: ComponentBaseConstructor[]) {
    nodes.forEach((_) => this._components.set(_.Meta.id, _));
  }
  static getComponent(id: string) {
    const found = this._components.get(id);
    if (!found) {
      throw new Error(`Did not find a classs component with id ${id}`);
    }
    return found;
  }
  static registerTraits(...nodes: TraitBaseConstructor[]) {
    nodes.forEach((_) => this._traits.set(_.Meta.id, _));
  }
  static getTrait(id: string) {
    const found = this._traits.get(id);
    if (!found) {
      throw new Error(`Did not find a trait class with id ${id}`);
    }
    return found;
  }
}
