import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout";
import useMe from "../hooks/useMe";

const Profile = () => {
  const me = useMe();

  return (
    <MainLayout pageTitle="프로필">
      <div className="max-w-xl w-full py-16 px-16 justify-center border rounded-lg shadow-sm bg-gray-50">
        <div className="flex items-center mb-5">
          <div className="border rounded-full p-10 bg-white">
            {me?.role === "Owner" && <img src="/images/owner_icon.png" alt="" className="w-24" />}
            {me?.role === "Customer" && <img src="/images/customer_icon.png" alt="" className="w-28" />}
            {me?.role === "Driver" && <img src="/images/driver_icon.png" alt="" />}
          </div>
          <div className="flex flex-col ml-8 gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-base">이메일</p>
              <p className="text-base text-gray-500 flex items-center">
                - {me?.email} {me?.emailVerified === true && <img src="/images/email_verified_icon.png" alt="" title="이메일 인증 완료" className="ml-1 w-4 h-4" />}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-base">유저 이름</p>
              <p className="text-base text-gray-500">- {me?.username}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-base">계정 생성일</p>
              <p className="text-[15px] text-gray-500">- {new Date(me?.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <Link to="/users/edit" className="button h-12 bg-blue-600 hover:bg-blue-500">
          프로필 수정
        </Link>
      </div>
    </MainLayout>
  );
};

export default Profile;
