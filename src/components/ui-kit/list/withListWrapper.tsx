import { isMobile } from "react-device-detect";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

import { DraggableListProps } from "./types";

const DND_BACKEND = isMobile ? TouchBackend : HTML5Backend;

export function withListWrapper(
  Component: (props: DraggableListProps) => JSX.Element
) {
  const WrappedComponent = (props: DraggableListProps) => {
    return (
      <DndProvider backend={DND_BACKEND}>
        <Component {...props} />
      </DndProvider>
    );
  };

  return WrappedComponent;
}
