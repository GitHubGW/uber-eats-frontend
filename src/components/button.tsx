import Loading from "./loading";

interface ButtonProps {
  onClick: () => any;
  type: "button" | "submit" | "reset" | undefined;
  loading: boolean;
  isValid: boolean;
  text: string;
}

const Button = ({ type, loading, isValid, text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} disabled={!isValid} className={`button h-12 ${isValid === false ? "bg-gray-300" : "bg-green-600 hover:bg-green-500"}`}>
      {loading === true ? <Loading size="w-4" /> : text}
    </button>
  );
};

export default Button;
