import { useLayoutEffect, useRef, useState } from "react";
import { DragSourceMonitor, useDrag, useDrop, XYCoord } from "react-dnd";

import { DropEffect } from "types/drop-types";
import { DragItem } from "../types";
import { DraggableItems } from "../constants";

import { StyledListItem } from "./styled";

interface ListItemProps {
  children: React.ReactNode;
  index?: number;
  id?: string;
  isDraggable?: boolean;
  moveListItem?: (hoverIndex: number) => void;
}

export const ListItem = ({
  children,
  index,
  id,
  isDraggable = false,
  moveListItem,
}: ListItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    setIsHovered(false);
  }, [index]);

  const [{ handlerId }, drop] = useDrop({
    accept: DraggableItems.ListItem,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!(ref.current && moveListItem) || index === undefined) {
        return;
      }

      if (isHovered) {
        return;
      }

      const dragItem = item as DragItem;
      const dragIndex = dragItem.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (
        hoverClientY > hoverMiddleY / 2 &&
        hoverClientY < hoverMiddleY * 1.5
      ) {
        setIsHovered(true);
        moveListItem(hoverIndex);

        dragItem.index = hoverIndex;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: DraggableItems.ListItem,
    item: () => ({
      index,
      id,
    }),
    canDrag: isDraggable,
    options: {
      dropEffect: DropEffect.Move,
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <StyledListItem
      ref={ref}
      isDragging={isDragging}
      data-handler-id={handlerId}
    >
      {children}
    </StyledListItem>
  );
};
