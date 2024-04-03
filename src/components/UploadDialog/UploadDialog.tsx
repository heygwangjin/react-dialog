import React from "react";

import useDialog from "../../hooks/use-dialog";
import Button from "../Button";
import Dialog from "../Dialog";
import { UploadDialogProps } from "./types";
import DragNDrop from "../DragNDrop";

function UploadDialog({ uploadFile, title }: UploadDialogProps) {
  const { closeDialog } = useDialog();
  const [files, setFiles] = React.useState<File[]>([]);

  const cancelBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (cancelBtnRef.current) {
      cancelBtnRef.current.focus();
    }
  }, []);

  return (
    <Dialog>
      <h1
        css={{
          display: "flex",
          justifyContent: "left",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        Upload {title}
      </h1>
      <DragNDrop onFileSelected={setFiles} width="40rem" height="20rem" />
      <div
        css={{
          marginTop: "2rem",
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
            "&:hover": {
              backgroundColor: "darkgreen",
            },
            "&:focus": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Upload
        </Button>
        <Button ref={cancelBtnRef} onClick={closeDialog}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}

export default UploadDialog;
