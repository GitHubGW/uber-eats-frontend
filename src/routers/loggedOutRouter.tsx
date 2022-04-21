import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import CreateAccount from "../pages/createAccount";

const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedOutRouter;
