import { DataListItem } from "types/list-types";

export interface DragItem {
  index: number;
}

export interface ListProps {
  data?: DataListItem[];
  className?: string;
  isItemsDraggable?: boolean;
  onListItemsOrderChange?: (listItems: DataListItem[]) => void;
  children?: (data?: unknown) => JSX.Element;
}
