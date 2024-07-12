import { cn } from "../utils/cn";
interface ButtonProps {
  style?: string;
  onclick?: () => void;
  children?: React.ReactNode;
}

function Button({ style,children, onclick }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-4 font-semibold rounded",
        style
      )}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
