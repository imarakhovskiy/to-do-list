import { useCallback } from "react";

import { ToDoListItem, ToDoListMode } from "./types";
import { useToDoList } from "./hooks";
import { ModeProvider } from "./providers/mode-provider";
import {
  AddToDoItem,
  GroupEditButtons,
  ToDoItemEditMode,
  ToDoItemGroupEditMode,
} from "./components";
import {
  BottomWrapper,
  NoItemsMessage,
  StyledCard,
  StyledHeader,
  StyledToDoList,
} from "./styled";
import { strings } from "./strings";

interface ToDoListProps {
  className?: string;
  data?: Omit<ToDoListItem, "id" | "selected">[];
}

export const ToDoList = ({ className, data }: ToDoListProps) => {
  const {
    mode,
    toDoItems,
    itemsToDisplay,
    doneItemsCount,
    selectedItemsIds,
    changeMode,
    addNewItem,
    removeItems,
    searchItems,
    synchronizeLists,
    updateItemsStatus,
    updateStatusFilter,
  } = useToDoList(data);

  const renderToDoListItems = useCallback(
    (data: unknown) => (
      <>
        {mode === ToDoListMode.Edit && (
          <ToDoItemEditMode
            itemData={data as ToDoListItem}
            removeItems={removeItems}
            updateItemsStatus={updateItemsStatus}
          />
        )}
        {mode === ToDoListMode.GroupEdit && (
          <ToDoItemGroupEditMode
            itemData={data as ToDoListItem}
            updateItemsStatus={updateItemsStatus}
          />
        )}
      </>
    ),
    [mode, removeItems, updateItemsStatus]
  );

  return (
    <ModeProvider mode={mode} changeMode={changeMode}>
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
        <BottomWrapper>
          {mode === ToDoListMode.Edit && (
            <AddToDoItem onValueSubmit={addNewItem} />
          )}
          {mode === ToDoListMode.GroupEdit && (
            <GroupEditButtons
              selectedItemsIds={selectedItemsIds as string[]}
              updateItemsStatus={updateItemsStatus}
              removeItems={removeItems}
            />
          )}
        </BottomWrapper>
      </StyledCard>
    </ModeProvider>
  );
};
