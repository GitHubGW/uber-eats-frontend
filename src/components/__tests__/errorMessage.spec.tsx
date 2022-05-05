import "@testing-library/jest-dom";
import ErrorMessage from "../errorMessage";
import { render, screen } from "@testing-library/react";

describe("<ErrorMessage /> (errorMessage.tsx)", () => {
  it("should render ErrorMessage with text", () => {
    render(<ErrorMessage message="test error" />);
    expect(screen.getByText("test error")).toHaveTextContent("test error");
  });
});
