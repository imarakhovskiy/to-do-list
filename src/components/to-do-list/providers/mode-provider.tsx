import { createContext, useContext, useMemo } from "react";

import { ToDoListMode } from "../types";

interface ModeProviderProps {
  mode: ToDoListMode;
  changeMode: (newMode: ToDoListMode) => void;
  children: React.ReactNode;
}

const ModeContext = createContext<Omit<ModeProviderProps, "children">>({
  mode: ToDoListMode.Edit,
  changeMode: () => {},
});

export const ModeProvider = ({
  children,
  mode,
  changeMode,
}: ModeProviderProps) => {
  return (
    <ModeContext.Provider
      value={useMemo(() => ({ mode, changeMode }), [mode, changeMode])}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const modeContext = useContext(ModeContext);

  if (!modeContext) {
    throw new Error("Inject ModeProdiver upper in the tree!");
  }

  return modeContext;
};
