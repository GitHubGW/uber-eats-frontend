import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Header from "../header";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import { SEE_ME_QUERY } from "../../documents/queries/seeMe.query";

const seeMeQueryMockFirst = [
  {
    request: {
      query: SEE_ME_QUERY,
    },
    result: {
      data: {
        seeMe: {
          id: 1,
          email: "test@gmail.com",
          username: "test_username",
          emailVerified: false,
          role: "Customer",
          createdAt: "2022-05-05",
          updatedAt: "2022-05-05",
        },
      },
    },
  },
];

const seeMeQueryMockSecond = [
  {
    request: {
      query: SEE_ME_QUERY,
    },
    result: {
      data: {
        seeMe: {
          id: 1,
          email: "test@gmail.com",
          username: "test_username",
          emailVerified: true,
          role: "Customer",
          createdAt: "2022-05-05",
          updatedAt: "2022-05-05",
        },
      },
    },
  },
];

describe("<Header /> (header.tsx)", () => {
  it("should render Header with verify warning (emailVerified: false)", async () => {
    render(
      <MockedProvider mocks={seeMeQueryMockFirst}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getByText("이메일을 인증해주세요.")).toBeDefined();
  });

  it("should render Header without verify warning (emailVerified: true)", async () => {
    render(
      <MockedProvider mocks={seeMeQueryMockSecond}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.queryByText("이메일을 인증해주세요.")).toBeNull();
  });
});
