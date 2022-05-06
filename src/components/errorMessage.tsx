interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <span role="alert" className="text-red-600 text-[12px] font-semibold">
      {message}
    </span>
  );
};

export default ErrorMessage;
