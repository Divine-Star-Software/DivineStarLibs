export type NodeData = {
  id: string;
  children: NodeData[];
  components: ComponentData[];
};
export type ComponentData<Properties extends object = any> = {
  id: string;
  type: string;
  properties: Properties;
  traits: TraitData[];
};
export type TraitData<Properties extends object = any> = {
  id: string;
  type: string;
  properties: Properties;
  traits: TraitData[];
};
