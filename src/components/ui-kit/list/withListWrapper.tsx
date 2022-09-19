import { Fragment, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

import { ListProps } from "./types";

const DND_BACKEND = isMobile ? TouchBackend : HTML5Backend;

export function withListWrapper(Component: (props: ListProps) => JSX.Element) {
  const WrappedComponent = (props: ListProps) => {
    const Wrapper = useMemo(
      () => (props.isItemsDraggable ? DndProviderWrapper : Fragment),
      [props.isItemsDraggable]
    );

    return (
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    );
  };

  return WrappedComponent;
}

function DndProviderWrapper({ children }: { children: React.ReactNode }) {
  return <DndProvider backend={DND_BACKEND}>{children}</DndProvider>;
}
