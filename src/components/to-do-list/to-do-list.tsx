import React, { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { SelectableToDoItem, ToDoListInputItem, ToDoListMode } from "./types";
import { useToDoList } from "./hooks";
import { ToDoListManager } from "./helpers";
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
  data?: ToDoListInputItem[];
}

const ToDoList = ({ className, data }: ToDoListProps) => {
  const toDoListManager = useRef<ToDoListManager>(new ToDoListManager(data));

  useEffect(() => {
    data && toDoListManager.current.reinit(data);
  }, [toDoListManager, data]);

  const {
    mode,
    itemsToDisplay,
    doneItemsCount,
    changeMode,
    searchItems,
    updateStatusFilter,
  } = useToDoList(toDoListManager.current.toDoItems);

  const renderToDoListItems: {
    (data: unknown): JSX.Element;
    cache: WeakMap<SelectableToDoItem, Record<ToDoListMode, React.ReactNode>>;
  } = useCallback(
    (() => {
      function render(data: unknown) {
        const cachedValue = render.cache.get(data as SelectableToDoItem);

        if (!cachedValue) {
          render.cache.set(data as SelectableToDoItem, {
            [ToDoListMode.Edit]: (
              <ToDoItemEditMode
                itemData={data as SelectableToDoItem}
                removeItems={toDoListManager.current.removeItems}
                selectItems={toDoListManager.current.selectItems}
                markItemsAsDone={toDoListManager.current.markItemsAsDone}
                undoItems={toDoListManager.current.undoItems}
              />
            ),
            [ToDoListMode.GroupEdit]: (
              <ToDoItemGroupEditMode
                itemData={data as SelectableToDoItem}
                selectItems={toDoListManager.current.selectItems}
                unselectItems={toDoListManager.current.unselectItems}
              />
            ),
          });
        }

        return render.cache.get(data as SelectableToDoItem)?.[
          mode
        ] as JSX.Element;
      }

      render.cache = new WeakMap<
        SelectableToDoItem,
        Record<ToDoListMode, React.ReactNode>
      >();

      return render;
    })(),
    [mode]
  );

  return (
    <ModeProvider mode={mode} changeMode={changeMode}>
      <StyledCard className={className}>
        {!!toDoListManager.current.toDoItems.length && (
          <StyledHeader
            doneItemsCount={doneItemsCount}
            allItemsCount={toDoListManager.current.toDoItems.length}
            onSearch={searchItems}
            updateStatusFilter={updateStatusFilter}
          />
        )}
        {itemsToDisplay.length ? (
          <StyledToDoList data={itemsToDisplay}>
            {renderToDoListItems}
          </StyledToDoList>
        ) : (
          <NoItemsMessage>
            {toDoListManager.current.toDoItems.length
              ? strings.noItems.satisfyFilters
              : strings.noItems.inTheList}
          </NoItemsMessage>
        )}
        <BottomWrapper>
          {mode === ToDoListMode.Edit && (
            <AddToDoItem onValueSubmit={toDoListManager.current.addItem} />
          )}
          {mode === ToDoListMode.GroupEdit && (
            <GroupEditButtons
              selectedItemsIds={toDoListManager.current.selectedItemsIds}
              unselectItems={toDoListManager.current.unselectItems}
              markItemsAsDone={toDoListManager.current.markItemsAsDone}
              undoItems={toDoListManager.current.undoItems}
              removeItems={toDoListManager.current.removeItems}
            />
          )}
        </BottomWrapper>
      </StyledCard>
    </ModeProvider>
  );
};

const ObserverableToDoList = observer(ToDoList);

export { ObserverableToDoList as ToDoList };
