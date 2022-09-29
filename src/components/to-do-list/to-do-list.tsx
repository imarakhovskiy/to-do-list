import { useCallback } from "react";

import { ToDoListItem } from "./types";
import { useToDoList } from "./hooks";
import { AddToDoItem, ToDoItem } from "./components";
import {
  AddToDoItemWrapper,
  NoItemsMessage,
  StyledCard,
  StyledHeader,
  StyledToDoList,
} from "./styled";
import { strings } from "./strings";

interface ToDoListProps {
  className?: string;
  data?: Omit<ToDoListItem, "id">[];
}

export const ToDoList = ({ className, data }: ToDoListProps) => {
  const {
    toDoItems,
    itemsToDisplay,
    doneItemsCount,
    addNewItem,
    removeItems,
    searchItems,
    synchronizeLists,
    updateItemsStatus,
    updateStatusFilter,
  } = useToDoList(data);

  const renderToDoListItems = useCallback(
    (data: unknown) => (
      <ToDoItem
        itemData={data as ToDoListItem}
        removeItems={removeItems}
        updateItemsStatus={updateItemsStatus}
      />
    ),
    [removeItems, updateItemsStatus]
  );

  return (
    <StyledCard className={className}>
      {!!toDoItems.length && (
        <StyledHeader
          doneItemsCount={doneItemsCount}
          allItemsCount={toDoItems.length}
          onSearch={searchItems}
          updateStatusFilter={updateStatusFilter}
        />
      )}
      {itemsToDisplay.length ? (
        <StyledToDoList
          isItemsDraggable
          data={itemsToDisplay}
          onListItemsOrderChange={synchronizeLists}
        >
          {renderToDoListItems}
        </StyledToDoList>
      ) : (
        <NoItemsMessage>
          {toDoItems.length
            ? strings.noItems.satisfyFilters
            : strings.noItems.inTheList}
        </NoItemsMessage>
      )}
      <AddToDoItemWrapper>
        <AddToDoItem onValueSubmit={addNewItem} />
      </AddToDoItemWrapper>
    </StyledCard>
  );
};
