import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Login from "../login";
import { ApolloProvider } from "@apollo/client";
import { createMockClient, MockApolloClient } from "mock-apollo-client";
import { LOGIN_MUTATION } from "../../documents/mutations/login.mutation";

describe("<Login /> (login.tsx)", () => {
  const mockClient: MockApolloClient = createMockClient();

  const reactElement: React.ReactElement = (
    <ApolloProvider client={mockClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  );

  it("should render Login", () => {
    render(reactElement);

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/uber_eats_logo_light.png");
    expect(screen.getByText("로그인")).toBeDefined();
    expect(screen.getByText("계정이 없으신가요?")).toBeDefined();
    expect(screen.getByText("회원가입")).toBeDefined();
  });

  it("should render Login with email error", async () => {
    render(reactElement);

    const emailInput = screen.getByPlaceholderText("이메일");
    await act(() => {
      userEvent.type(emailInput, "test@@@gmail.com");
    });
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("유효하지 않은 이메일 형식입니다.");

    await act(() => {
      userEvent.clear(emailInput);
    });
    expect(alert).toHaveTextContent("이메일을 입력해주세요.");
  });

  it("should render Login with password error", async () => {
    render(reactElement);

    const emailInput = screen.getByPlaceholderText("이메일");
    await act(() => {
      userEvent.type(emailInput, "test@gmail.com");
    });

    const passwordInput = screen.getByPlaceholderText("비밀번호");
    await act(() => {
      userEvent.type(passwordInput, "1");
    });
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("비밀번호는 최소 2글자 이상을 입력해주세요.");
  });

  it("should submit form and call login mutation", async () => {
    render(reactElement);

    const email = "test@gmail.com";
    const password = "1234";
    const queryHandler = jest.fn().mockResolvedValue({
      data: {
        login: {
          ok: true,
          message: "로그인에 성공하였습니다.",
          token: "test token",
        },
      },
    });
    mockClient.setRequestHandler(LOGIN_MUTATION, queryHandler);
    jest.spyOn(Storage.prototype, "setItem");

    const emailInput = screen.getByPlaceholderText("이메일");
    await act(() => {
      userEvent.type(emailInput, email);
    });

    const passwordInput = screen.getByPlaceholderText("비밀번호");
    await act(() => {
      userEvent.type(passwordInput, password);
    });

    const button = screen.getByRole("button");
    await act(() => {
      userEvent.click(button);
    });

    expect(queryHandler).toHaveBeenCalledTimes(1);
    expect(queryHandler).toHaveBeenCalledWith({ input: { email, password } });
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith("TOKEN", "test token");
  });
});
