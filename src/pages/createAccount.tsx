import { useForm } from "react-hook-form";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import Button from "../components/button";
import ErrorMessage from "../components/errorMessage";
import MainLayout from "../components/layouts/mainLayout";
import LightLogo from "../components/lightLogo";
import { CreateAccountMutation, Role, useCreateAccountMutation } from "../generated/graphql";

interface CreateAccountFormData {
  email: string;
  password: string;
  role: Role;
  error?: any;
}

const CreateAccount = () => {
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormData>({ mode: "onChange", defaultValues: { email: "", password: "", role: Role.Customer } });
  const [createAccountMutation, { data, loading }] = useCreateAccountMutation({
    onCompleted: (data: CreateAccountMutation) => {
      if (data.createAccount.ok === false) {
        return setError("error", { message: data.createAccount.message });
      }
      const { email, password } = getValues();
      navigate("/login", { state: { email, password } });
    },
  });

  const onValid = (): void => {
    if (loading === true) {
      return;
    }
    const { email, password, role } = getValues();
    createAccountMutation({ variables: { input: { email, password, role } } });
  };

  return (
    <MainLayout pageTitle="회원가입">
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
          <select {...register("role", { required: true })} className="input" required defaultValue={Role.Customer}>
            <option value={Role.Customer}>고객</option>
            <option value={Role.Owner}>음식점 주인</option>
            <option value={Role.Driver}>라이더</option>
          </select>
          <Button onClick={handleSubmit(onValid)} type={"submit"} loading={loading} isValid={isValid} text="회원가입" />
          {errors.error?.message && <ErrorMessage message={errors.error?.message} />}
        </form>
        <p className="text-center mt-5 text-base">
          계정이 있으신가요?
          <Link to="/login" className="ml-2 font-semibold text-green-600 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </MainLayout>
  );
};

export default CreateAccount;
