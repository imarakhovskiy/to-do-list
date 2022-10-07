import { DataItem } from "./data-item";

export class ToDoItem extends DataItem {
  private _done: boolean;

  constructor(name: string, done = false) {
    super(name);

    this._done = done;
  }

  get done() {
    return this._done;
  }

  set done(isDone: boolean) {
    this._done = isDone;
  }
}
