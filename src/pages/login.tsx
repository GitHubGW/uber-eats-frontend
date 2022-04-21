import { useForm } from "react-hook-form";
import { Link, useNavigate, NavigateFunction, useLocation, Location } from "react-router-dom";
import { isLoggedInVar, TOKEN, tokenVar } from "../apollo";
import Button from "../components/button";
import ErrorMessage from "../components/errorMessage";
import LightLogo from "../components/lightLogo";
import PageTitle from "../components/pageTitle";
import { LoginMutation, useLoginMutation } from "../generated/graphql";

interface LoginFormData {
  email: string;
  password: string;
  error?: any;
}

interface LocationState {
  email: string;
  password: string;
}

const Login = () => {
  const location: Location = useLocation();
  const state = location.state as LocationState;
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({ mode: "onChange", defaultValues: { email: state?.email, password: state?.password } });
  const [loginMutation, { loading }] = useLoginMutation({
    onCompleted: (data: LoginMutation) => {
      if (data.login.ok === false) {
        return setError("error", { message: data.login.message });
      }
      if (data.login.token) {
        localStorage.setItem(TOKEN, data.login.token);
        isLoggedInVar(true);
        tokenVar(data.login.token);
        navigate("/");
      }
    },
  });

  const onValid = (): void => {
    if (loading === true) {
      return;
    }
    const { email, password } = getValues();
    loginMutation({ variables: { input: { email, password } } });
  };

  return (
    <div className="wrapper">
      <PageTitle title="로그인" />
      <div className="max-w-2xl w-full py-24 px-16 justify-center border rounded-lg shadow-sm bg-gray-50">
        <LightLogo />
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-full gap-1.5">
          <input
            {...register("email", {
              required: "이메일을 입력해주세요.",
              maxLength: { value: 30, message: "최대 30자까지 입력 가능합니다." },
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
            placeholder="이메일"
            required
            maxLength={30}
            className="input"
          />
          {errors.email?.message && <ErrorMessage message={errors.email?.message} />}
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: { value: 2, message: "비밀번호는 최소 2글자 이상을 입력해주세요." },
              maxLength: { value: 30, message: "최대 30자까지 입력 가능합니다." },
            })}
            type="password"
            placeholder="비밀번호"
            required
            maxLength={30}
            className="input"
          />
          {errors.password?.message && <ErrorMessage message={errors.password?.message} />}
          <Button onClick={handleSubmit(onValid)} type={"submit"} loading={loading} isValid={isValid} text="로그인" />
          {errors.error?.message && <ErrorMessage message={errors.error?.message} />}
        </form>
        <p className="text-center mt-5 text-base">
          계정이 없으신가요?
          <Link to="/signup" className="ml-2 text-green-600 hover:underline">
            계정 생성
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
