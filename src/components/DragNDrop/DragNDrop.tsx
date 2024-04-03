import * as React from "react";

import { AiFillDelete } from "react-icons/ai";
import { DragNDropProps } from "./types";

function DragNDrop({
  onFileSelected,
  width,
  height,
  supportedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"],
}: DragNDropProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [dragging, setDragging] = React.useState(false);

  function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles.length < 1) {
      throw new Error("No files were dropped.");
    }

    const newFiles = Array.from(droppedFiles);

    if (newFiles.some((file) => !supportedFileTypes.includes(file.type))) {
      alert("Unsupported file type.");
      throw new Error("Unsupported file type.");
    }

    // Prevent adding the same file multiple times
    const uniqueFiles = newFiles.filter((newFile) =>
      files.every((file) => file.name !== newFile.name),
    );

    const nextFiles = [...files, ...uniqueFiles];
    setFiles(nextFiles);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const selectedFiles = event.target.files;

    if (!selectedFiles) {
      throw new Error("No files were selected.");
    }

    const newFiles = Array.from(selectedFiles);

    // Prevent adding the same file multiple times
    const uniqueFiles = newFiles.filter((newFile) =>
      files.every((file) => file.name !== newFile.name),
    );

    const nextFiles = [...files, ...uniqueFiles];

    setFiles(nextFiles);
    event.target.value = ""; // 같은 파일을 다시 선택할 수 있도록 input value 초기화
  }

  function handleRemoveFile(index: number): void {
    const nextFiles = files.filter((_, i) => i !== index);
    setFiles(nextFiles);
  }

  React.useEffect(() => {
    onFileSelected(files);
  }, [files, onFileSelected]);

  return (
    <section
      css={{
        padding: "1rem",
        border: `2px dashed ${dragging ? "#646cff" : "#ccc"}`,
        borderRadius: "8px",
      }}
    >
      <div
        css={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onDrop={handleDrop}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
      >
        <p>
          Drag and drop your files here, or{" "}
          <label
            htmlFor="file-input"
            css={{
              color: "#646cff",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            browse
            <input
              id="file-input"
              type="file"
              css={{
                display: "none",
              }}
              onChange={handleFileChange}
              accept={supportedFileTypes.join(",")}
              multiple
            />
          </label>
        </p>

        <p
          css={{
            fontSize: "0.9rem",
            color: "#6b7280",
            marginBottom: "1rem",
          }}
        >
          Supports:{" "}
          {supportedFileTypes
            .map((type) => type.replace("image/", ""))
            .join(", ")
            .toUpperCase()}
        </p>

        <ul
          css={{
            overflow: "auto",
            maxHeight: "15rem",
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          {files.map((file, index) => (
            <li
              key={file.name}
              css={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0.6rem",
                backgroundColor: "#f6f6f6",
                borderRadius: "8px",
              }}
            >
              <span
                css={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Tab" ||
                    event.key === "Shift" ||
                    event.key === "ArrowUp" ||
                    event.key === "ArrowDown"
                  ) {
                    return;
                  }

                  event.preventDefault();

                  if (event.key === "Enter" || event.code === "Space") {
                    handleRemoveFile(index);
                  }
                }}
                css={{
                  paddingTop: "0.3rem",
                  marginLeft: "0.2rem",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#6b7280",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#ef4444",
                  },
                  "&:focus": {
                    color: "#ef4444",
                  },
                }}
              >
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DragNDrop;
