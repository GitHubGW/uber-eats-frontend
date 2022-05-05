import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Avatar from "../avatar";

describe("<Avatar /> (avatar.tsx)", () => {
  it("should render Avatar", () => {
    render(<Avatar size="w-16" avatarUrl="test url" />);
    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveClass("w-16");
    expect(img).toHaveAttribute("src", "test url");
  });
});
