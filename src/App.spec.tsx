import "@testing-library/jest-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { isLoggedInVar } from "./apollo";

jest.mock("./routers/loggedOutRouter.tsx", () => () => {
  return <div>LoggedOutRouter</div>;
});

jest.mock("./routers/loggedInRouter.tsx", () => () => {
  return <div>LoggedInRouter</div>;
});

describe("<App /> (App.tsx)", () => {
  it("should render LoggedOutRouter", () => {
    render(<App />);
    expect(screen.getByText("LoggedOutRouter")).toHaveTextContent("LoggedOutRouter");
  });

  it("should render LoggedInRouter", async () => {
    isLoggedInVar(true);
    render(<App />);
    expect(screen.getByText("LoggedInRouter")).toHaveTextContent("LoggedInRouter");
  });
});
