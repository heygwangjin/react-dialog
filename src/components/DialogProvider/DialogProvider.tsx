import * as React from "react";
import { DialogContextType, DialogProviderProps, DialogProps } from "./types";

export const DialogContext = React.createContext<DialogContextType | undefined>(
  undefined,
);

function DialogProvider({ children }: DialogProviderProps) {
  const [dialog, setDialog] = React.useState<DialogProps | null>(null);

  function openDialog(name: string, props: object = {}) {
    setDialog({ name, props });
  }

  function closeDialog() {
    setDialog(null);
  }

  return (
    <DialogContext.Provider value={{ dialog, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
