import { css } from "@emotion/react";
import * as React from "react";
import ReactFocusLock from "react-focus-lock";
import useDialog from "../../hooks/use-dialog";
import { DialogProps } from "./types";

const dialogCss = css({
  padding: 20,
  borderRadius: 6,
  "::backdrop": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

function Dialog({ children }: DialogProps) {
  const { dialog, closeDialog } = useDialog();

  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (dialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [dialog]);

  return (
    <dialog
      css={dialogCss}
      ref={dialogRef}
      onClick={(event) => {
        const dialogDimensions = dialogRef.current?.getBoundingClientRect();

        if (
          dialogDimensions &&
          (event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom)
        ) {
          closeDialog();
        }
      }}
    >
      <ReactFocusLock>{children}</ReactFocusLock>
    </dialog>
  );
}

export default Dialog;
