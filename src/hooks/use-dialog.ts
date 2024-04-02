import React from "react";
import { DialogContext } from "../components/DialogProvider";
import { DialogContextType } from "../components/DialogProvider/types";

function useDialog(): DialogContextType {
  const context = React.useContext(DialogContext);

  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
}

export default useDialog;
