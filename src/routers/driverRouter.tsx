import { Routes, Route } from "react-router-dom";
import Home from "../pages/driver/home";
import EditProfile from "../pages/editProfile";
import NotFound from "../pages/notFound";
import Profile from "../pages/profile";
import VerifyEmail from "../pages/verifyEmail";

const DriverRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirm" element={<VerifyEmail />} />
      <Route path="/users/profile" element={<Profile />} />
      <Route path="/users/edit" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DriverRouter;
