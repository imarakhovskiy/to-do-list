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
    itemsToDisplay,
    toDoItems,
    doneItemsCount,
    synchronizeLists,
    addNewItem,
    removeItems,
    updateItemsState,
    searchItems,
  } = useToDoList(data);

  const renderToDoListItems = useCallback(
    (data: unknown) => (
      <ToDoItem
        itemData={data as ToDoListItem}
        removeItems={removeItems}
        updateItemsState={updateItemsState}
      />
    ),
    [removeItems, updateItemsState]
  );

  return (
    <StyledCard className={className}>
      {!!toDoItems.length && (
        <StyledHeader
          onSearch={searchItems}
          doneItemsCount={doneItemsCount}
          allItemsCount={toDoItems.length}
        />
      )}
      {itemsToDisplay.length ? (
        <StyledToDoList
          data={itemsToDisplay}
          onListItemsOrderChange={synchronizeLists}
          isItemsDraggable
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
