import { render, screen } from "@testing-library/react";
import { isLoggedInVar } from "./apollo";
import App from "./App";

jest.mock("./routers/loggedOutRouter.tsx", () => () => {
  return <div>LoggedOutRouter</div>;
});

jest.mock("./routers/loggedInRouter.tsx", () => () => {
  return <div>LoggedInRouter</div>;
});

describe("App.tsx", () => {
  it("should render LoggedOutRouter", () => {
    render(<App />);
    expect(screen.getByText("LoggedOutRouter")).toBeDefined();
  });

  it("should render LoggedInRouter", async () => {
    isLoggedInVar(true);
    render(<App />);
    expect(screen.getByText("LoggedInRouter")).toBeDefined();
  });
});
