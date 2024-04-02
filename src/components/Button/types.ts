export interface ButtonProps extends React.ComponentProps<"button"> {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}
