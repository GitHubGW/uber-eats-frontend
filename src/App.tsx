import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import LoggedInRouter from "./routers/loggedInRouter";
import LoggedOutRouter from "./routers/loggedOutRouter";

const App = () => {
  const isLoggedIn: boolean = useReactiveVar(isLoggedInVar);
  console.log("isLoggedIn", isLoggedIn);

  return <div>{isLoggedIn === true ? <LoggedInRouter /> : <LoggedOutRouter />}</div>;
};

export default App;
