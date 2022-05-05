import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "../loading";

describe("<Loading /> (loading.tsx)", () => {
  it("should render Loading with props", () => {
    render(<Loading size="w-16" />);
    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/loading.gif");
    expect(img).toHaveClass("w-16");
  });
});
