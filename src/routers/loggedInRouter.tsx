import Loading from "../components/loading";
import { Role, useSeeMeQuery } from "../generated/graphql";
import OwnerRouter from "./ownerRouter";
import CustomerRouter from "./customerRouter";
import DriverRouter from "./driverRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";

const LoggedInRouter = () => {
  const { data, loading } = useSeeMeQuery();

  return (
    <BrowserRouter>
      <Header />
      {loading === true ? (
        <div className="wrapper">
          <Loading size="w-8" />
        </div>
      ) : (
        <div className="mt-28">
          {data?.seeMe.role === Role.Owner ? <OwnerRouter /> : null}
          {data?.seeMe.role === Role.Customer ? <CustomerRouter /> : null}
          {data?.seeMe.role === Role.Driver ? <DriverRouter /> : null}
        </div>
      )}
    </BrowserRouter>
  );
};

export default LoggedInRouter;

// return (
//   <div>
//     {loading === true ? (
//       <div className="wrapper">
//         <Loading size="w-8" />
//       </div>
//     ) : (
//       <BrowserRouter>
//         <Header />
//         {data?.seeMe.role === Role.Owner ? <OwnerRouter /> : null}
//         {data?.seeMe.role === Role.Customer ? <CustomerRouter /> : null}
//         {data?.seeMe.role === Role.Driver ? <DriverRouter /> : null}
//       </BrowserRouter>
//     )}
//   </div>
// );
