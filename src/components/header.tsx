import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useMe from "../hooks/useMe";
import DarkLogo from "./darkLogo";

const Header = () => {
  const me = useMe();

  return (
    <div className="border-red fixed top-0 left-0 w-full bg-black h-28">
      {me?.emailVerified === false && <h1 className="text-white">이메일을 인증해주세요.</h1>}
      <div className="content m-auto text-white flex justify-between items-center">
        <Link to="/">
          <DarkLogo />
        </Link>
        <Link to={`/users/profile`}>
          <FontAwesomeIcon icon={faUserLarge} className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
