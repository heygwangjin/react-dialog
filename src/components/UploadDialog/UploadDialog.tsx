import useDialog from "../../hooks/use-dialog";
import Button from "../Button";
import Dialog from "../Dialog";
import { UploadDialogProps } from "./types";

function UploadDialog({ uploadFile, title }: UploadDialogProps) {
  const { closeDialog } = useDialog();

  return (
    <Dialog>
      <h1
        css={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        Upload {title}
      </h1>
      <p
        css={{
          border: "2px dashed #ccc",
          padding: "6rem",
          marginBottom: "2rem",
        }}
      >
        Drag and drop a file to upload.
      </p>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Button
          onClick={uploadFile}
          css={{
            width: "100%",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Upload
        </Button>
        <Button onClick={closeDialog}>Cancel</Button>
      </div>
    </Dialog>
  );
}

export default UploadDialog;
