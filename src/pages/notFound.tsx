import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout";
import NotFoundImage from "../components/notFoundImage";

const NotFound = () => {
  return (
    <MainLayout pageTitle="잘못된 페이지">
      <div className="flex flex-col justify-center items-center">
        <NotFoundImage />
        <h1 className="text-2xl font-semibold mt-5">잘못된 페이지입니다.</h1>
        <p className="text-sm font-medium mt-2">맛있는 것을 찾으러 가요.</p>
        <Link to="/">
          <h3 className="mt-5 bg-black hover:bg-gray-900 px-36 py-4 text-white">홈으로</h3>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
