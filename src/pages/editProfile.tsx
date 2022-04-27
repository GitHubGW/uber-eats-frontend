import { ApolloCache } from "@apollo/client";
import { useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router";
import Button from "../components/button";
import ErrorMessage from "../components/errorMessage";
import MainLayout from "../components/layouts/mainLayout";
import LightLogo from "../components/lightLogo";
import { useEditProfileMutation } from "../generated/graphql";
import useMe from "../hooks/useMe";

interface EditProfileFormData {
  email?: string;
  username?: string;
  password?: string;
  error?: string;
}

const EditProfile = () => {
  const me = useMe();
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<EditProfileFormData>({ mode: "onSubmit", defaultValues: { email: me?.email, username: me?.username, password: "" } });
  const [editProfileMutation, { loading }] = useEditProfileMutation({
    update: (cache: ApolloCache<any>, { data }) => {
      if (data?.editProfile.ok === false) {
        return;
      }

      const { email, username } = getValues();
      cache.modify({
        id: `User:${me?.id}`,
        fields: {
          email: (prev) => (email ? email : prev),
          username: (prev) => (username ? username : prev),
          emailVerified: () => (me?.email !== email ? false : true),
        },
      });
      navigate("/users/profile");
    },
  });

  const onValid = (): void => {
    const { email, username, password } = getValues();
    editProfileMutation({
      variables: {
        input: {
          ...(me?.email !== email && { email }),
          ...(me?.username !== username && { username }),
          password,
        },
      },
    });
  };

  return (
    <MainLayout pageTitle="프로필 수정">
      <div className="max-w-2xl w-full py-24 px-16 justify-center border rounded-lg shadow-sm bg-gray-50">
        <LightLogo />
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-full gap-1.5">
          <input
            {...register("email", {
              maxLength: { value: 30, message: "최대 30자까지 입력 가능합니다." },
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
            placeholder="이메일"
            maxLength={30}
            className="input"
          />
          {errors.email?.message && <ErrorMessage message={errors.email?.message} />}
          <input
            {...register("username", {
              maxLength: { value: 20, message: "최대 20자까지 입력 가능합니다." },
            })}
            type="text"
            placeholder="유저 이름"
            maxLength={20}
            className="input"
          />
          {errors.username?.message && <ErrorMessage message={errors.username?.message} />}
          <input
            {...register("password", {
              minLength: { value: 2, message: "비밀번호는 최소 2글자 이상을 입력해주세요." },
              maxLength: { value: 30, message: "최대 30자까지 입력 가능합니다." },
            })}
            type="password"
            placeholder="비밀번호"
            maxLength={30}
            className="input"
          />
          {errors.password?.message && <ErrorMessage message={errors.password?.message} />}
          <Button onClick={handleSubmit(onValid)} type={"submit"} loading={loading} isValid={isValid} text="프로필 업데이트" />
          {errors.error?.message && <ErrorMessage message={errors.error?.message} />}
        </form>
      </div>
    </MainLayout>
  );
};

export default EditProfile;
