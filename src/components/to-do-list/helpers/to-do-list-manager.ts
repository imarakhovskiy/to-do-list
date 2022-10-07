import { makeAutoObservable } from "mobx";
import { SELECTED_FIELD_NAME } from "../constants";

import {
  SelectableToDoItem,
  ToDoListInputItem,
  ToDoListItemId,
} from "../types";
import { ToDoItem } from "./to-do-item";

export class ToDoListManager {
  private _toDoItems: SelectableToDoItem[];
  private _selectedItemsIds: Set<ToDoListItemId>;

  constructor(dataList?: ToDoListInputItem[]) {
    this._selectedItemsIds = new Set<ToDoListItemId>();
    this._toDoItems = dataList ? this.formatNewData(dataList) : [];

    this.addItem = this.addItem.bind(this);
    this.undoItems = this.undoItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.selectItems = this.selectItems.bind(this);
    this.unselectItems = this.unselectItems.bind(this);
    this.markItemsAsDone = this.markItemsAsDone.bind(this);

    makeAutoObservable(this);
  }

  private formatNewData(dataList: ToDoListInputItem[]) {
    return dataList.map((el) => this.selectable(new ToDoItem(el.name)));
  }

  private selectable(target: ToDoItem) {
    (target as SelectableToDoItem)[SELECTED_FIELD_NAME] = false;

    return target as SelectableToDoItem;
  }

  reinit(dataList: ToDoListInputItem[]) {
    this._toDoItems = this.formatNewData(dataList);
  }

  addItem(name: string) {
    this._toDoItems.unshift(this.selectable(new ToDoItem(name)));
  }

  removeItems(idsList: ToDoListItemId[]) {
    const toDelete = new Set(idsList);

    this._toDoItems = this._toDoItems.filter((el) => {
      const shoudBeRemoved = toDelete.has(el.id);

      if (shoudBeRemoved) {
        this._selectedItemsIds.delete(el.id);
      }

      return !shoudBeRemoved;
    });
  }

  selectItems(idsList: string[]) {
    const toSelect = new Set(idsList);

    this._toDoItems = this._toDoItems.map((el) => {
      const shouldBeSelected = toSelect.has(el.id);

      if (shouldBeSelected) {
        el[SELECTED_FIELD_NAME] = true;
        this._selectedItemsIds.add(el.id);
      }

      return el;
    });
  }

  unselectItems(idsList: string[]) {
    const toUnselect = new Set(idsList);

    this._toDoItems = this._toDoItems.map((el) => {
      const shouldBeUnselected = toUnselect.has(el.id);

      if (shouldBeUnselected) {
        el[SELECTED_FIELD_NAME] = false;
        this._selectedItemsIds.delete(el.id);
      }

      return el;
    });
  }

  markItemsAsDone = (idsList: string[]) => {
    const toMarkAsDone = new Set(idsList);

    this._toDoItems = this._toDoItems.map((el) => {
      const shouldBeMarkedAsDone = toMarkAsDone.has(el.id);

      if (shouldBeMarkedAsDone) {
        el.done = true;
      }

      return el;
    });
  };

  undoItems(idsList: string[]) {
    const toUndo = new Set(idsList);

    this._toDoItems = this._toDoItems.map((el) => {
      const shouldBeUndone = toUndo.has(el.id);

      if (shouldBeUndone) {
        el.done = false;
      }

      return el;
    });
  }

  get selectedItemsIds() {
    return Array.from(this._selectedItemsIds);
  }

  get toDoItems() {
    return this._toDoItems;
  }
}
