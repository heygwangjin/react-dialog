export interface DragNDropProps {
  onFileSelected: (files: File[]) => void;
  width: string;
  height: string;
  supportedFileTypes?: string[];
}
