import useDialog from "../../hooks/use-dialog";
import Button from "../Button";
import Dialog from "../Dialog";
import { UploadDialogProps } from "./types";

function UploadDialog({ uploadFile, title }: UploadDialogProps) {
  const { closeDialog } = useDialog();

  return (
    <Dialog>
      <h1>Upload {title}</h1>
      <Button onClick={uploadFile}>Upload</Button>
      <Button onClick={closeDialog}>
        Cancel
      </Button>
    </Dialog>
  );
}

export default UploadDialog;
