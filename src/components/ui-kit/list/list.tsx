import React, { useCallback, useState } from "react";
import { DragLayerMonitor, useDragLayer } from "react-dnd";

import { DragItem, ListDataItem, ListProps } from "./types";
import { ListItem } from "./list-item";
import { withListWrapper } from "./withListWrapper";
import { rearrangeDnDList } from "./helpers";
import { StyledList } from "./styled";

export const List = withListWrapper(
  ({ data, isItemsDraggable = false, children }: ListProps) => {
    const [listItemsData, setListItemsData] = useState(data);

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

          return newDataList;
        });
      },
      [draggedItem]
    );

    const renderListItem = useCallback(
      (data: ListDataItem, index: number) => {
        return (
          <ListItem
            key={data.id}
            id={data.id}
            index={index}
            isDraggable={isItemsDraggable}
            moveListItem={moveListItem}
          >
            {children?.(data)}
          </ListItem>
        );
      },
      [isItemsDraggable, children, moveListItem]
    );

    return <StyledList>{listItemsData?.map(renderListItem)}</StyledList>;
  }
);
