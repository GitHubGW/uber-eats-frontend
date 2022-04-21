interface LoadingProps {
  size: string;
}

const Loading = ({ size }: LoadingProps) => {
  return <img src="/images/loading.gif" alt="" className={`${size}`} />;
};

export default Loading;
