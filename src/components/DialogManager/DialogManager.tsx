import useDialog from "../../hooks/use-dialog";
import UploadDialog from "../UploadDialog";
import { DialogComponents } from "./types";

const DialogLookup: DialogComponents = {
  UploadDialog: UploadDialog,
};

function DialogManager() {
  const { dialog } = useDialog();

  if (!dialog) return null;

  const Dialog = DialogLookup[dialog.name];

  if (!Dialog) throw new Error(`Dialog not found: ${dialog.name}`);

  return <Dialog {...dialog.props} />;
}

export default DialogManager;
