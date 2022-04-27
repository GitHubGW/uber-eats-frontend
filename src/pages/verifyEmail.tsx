import { ApolloCache } from "@apollo/client";
import { useEffect } from "react";
import { useLocation, Location, useNavigate, NavigateFunction } from "react-router";
import MainLayout from "../components/layouts/mainLayout";
import Loading from "../components/loading";
import { useVerifyEmailMutation } from "../generated/graphql";
import useMe from "../hooks/useMe";

const VerifyEmail = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const me = useMe();
  const [verifyEmailMutation] = useVerifyEmailMutation({
    update: (cache: ApolloCache<any>, { data }) => {
      if (data?.verifyEmail.ok === false) {
        return;
      }
      cache.modify({
        id: `User:${me?.id}`,
        fields: {
          emailVerified: () => true,
        },
      });
      navigate("/");
    },
  });

  useEffect(() => {
    const [_, code] = location.search.split("?code=");
    verifyEmailMutation({ variables: { input: { code } } });
  }, [location, verifyEmailMutation]);

  return (
    <MainLayout pageTitle="이메일 인증">
      <div className="flex flex-col justify-center items-center">
        <Loading size="w-10" />
        <h1 className="text-md font-semibold mt-3">이메일 인증 처리 중입니다.</h1>
        <p className="text-sm font-medium mt-1">잠시만 기다려주세요.</p>
      </div>
    </MainLayout>
  );
};

export default VerifyEmail;
