export interface ListDataItem {
  id: string;
}

export interface DragItem {
  index: number;
}

export interface ListProps {
  data?: ListDataItem[];
  className?: string;
  isItemsDraggable?: boolean;
  children?: (data?: unknown) => JSX.Element;
}
