import "@testing-library/jest-dom";
import Button from "../button";
import { render, screen } from "@testing-library/react";

describe("<Button /> (button.tsx)", () => {
  it("should render Button with text", () => {
    render(<Button onClick={() => {}} type="button" loading={false} isValid={false} text="test button" />);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button).toHaveTextContent("test button");
    expect(button).toHaveClass("button h-12 bg-gray-300");
  });

  it("should render Button with loading", () => {
    render(<Button onClick={() => {}} type="button" loading={true} isValid={true} text="test button" />);
    const button = screen.getByRole("button");
    const img = screen.getByRole("img");
    expect(button).toBeDefined();
    expect(button).toHaveClass("button h-12 bg-green-600 hover:bg-green-500");
    expect(img).toBeDefined();
  });
});
