import { useSeeMeQuery } from "../generated/graphql";

const useMe = () => {
  const { data } = useSeeMeQuery();
  return data?.seeMe;
};

export default useMe;
