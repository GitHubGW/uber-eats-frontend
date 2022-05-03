import { Routes, Route } from "react-router-dom";
import Home from "../pages/customer/home";
import SeeRestaurant from "../pages/customer/seeRestaurant";
import EditProfile from "../pages/editProfile";
import NotFound from "../pages/notFound";
import Profile from "../pages/profile";
import VerifyEmail from "../pages/verifyEmail";

const CustomerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Home />} />
      <Route path="/category/:name" element={<Home />} />
      <Route path="/restaurants/:id" element={<SeeRestaurant />} />
      <Route path="/confirm" element={<VerifyEmail />} />
      <Route path="/users/profile" element={<Profile />} />
      <Route path="/users/edit" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomerRouter;
