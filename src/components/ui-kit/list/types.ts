import { DataListItem } from "types/list-types";

export interface DragItem {
  index: number;
}

export interface ListProps {
  data?: DataListItem[];
  className?: string;
  children?: (data?: unknown) => JSX.Element;
}

export interface DraggableListProps extends ListProps {
  onListItemsOrderChange?: (listItems: DataListItem[]) => void;
}

export interface ListItemProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface DraggableListItemProps extends ListItemProps {
  index?: number;
  moveListItem?: (hoverIndex: number) => void;
}
