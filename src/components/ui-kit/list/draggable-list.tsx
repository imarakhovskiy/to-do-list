import React, { useCallback, useEffect, useState } from "react";
import { DragLayerMonitor, useDragLayer } from "react-dnd";

import { DataListItem } from "types/list-types";
import { DragItem, DraggableListProps } from "./types";
import { DraggableListItem } from "./list-item";
import { withListWrapper } from "./withListWrapper";
import { rearrangeDnDList } from "./helpers";
import { StyledList } from "./styled";

const DraggableList = ({
  data,
  className,
  children,
  onListItemsOrderChange,
}: DraggableListProps) => {
  const [listItemsData, setListItemsData] = useState(data);

  useEffect(() => {
    setListItemsData(data);
  }, [data]);

  const { draggedItem } = useDragLayer((monitor: DragLayerMonitor) => ({
    draggedItem: monitor.getItem<DragItem>(),
  }));

  const moveListItem = useCallback(
    (hoverIndex: number) => {
      setListItemsData((prevDataList) => {
        if (!prevDataList) {
          return;
        }

        const newDataList = rearrangeDnDList({
          dragIndex: draggedItem.index,
          hoverIndex,
          dataList: prevDataList,
        });

        if (onListItemsOrderChange) {
          onListItemsOrderChange(newDataList); // Pass new data items list to parent after reorder
        }

        return newDataList;
      });
    },
    [draggedItem, onListItemsOrderChange]
  );

  const renderListItem = useCallback(
    (data: DataListItem, index: number) => {
      return (
        <DraggableListItem
          key={data.id}
          id={data.id}
          index={index}
          moveListItem={moveListItem}
        >
          {children?.(data)}
        </DraggableListItem>
      );
    },
    [children, moveListItem]
  );

  return (
    <StyledList className={className}>
      {listItemsData?.map(renderListItem)}
    </StyledList>
  );
};

const WrappedDraggableList = withListWrapper(DraggableList);

export { WrappedDraggableList as DraggableList };
