import { getUniqueId } from "utils/getUniqueId";

export class DataItem {
  private _name: string;
  readonly id: string;

  constructor(name: string) {
    this._name = name;
    this.id = getUniqueId();
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this.name = newName;
  }
}
