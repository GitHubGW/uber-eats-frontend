import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import CreateAccount from "../pages/createAccount";
import Header from "../components/header";

const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedOutRouter;
