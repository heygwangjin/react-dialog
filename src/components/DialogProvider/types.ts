export interface DialogContextType {
  openDialog: (name: string, props?: object) => void;
  closeDialog: () => void;
  dialog: DialogProps | null;
}

export interface DialogProps {
  name: string;
  props: object;
}

export interface DialogProviderProps {
  children: React.ReactNode;
}
