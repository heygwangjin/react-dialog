import useDialog from "../../hooks/use-dialog";
import Button from "../Button";

function DialogDemo() {
  const { openDialog } = useDialog();

  return (
    <div>
      <h1>Dialog Demo</h1>
      <p>Select a dialog you want to open.</p>
      <Button
        onClick={() =>
          openDialog("UploadDialog", {
            title: "Files",
          })
        }
      >
        UploadDialog
      </Button>
    </div>
  );
}

export default DialogDemo;
