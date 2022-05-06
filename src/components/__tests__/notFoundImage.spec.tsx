import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFoundImage from "../notFoundImage";

describe("<NotFoundImage /> (notFoundImage.tsx)", () => {
  it("should render NotFoundImage with props", () => {
    render(<NotFoundImage />);

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/not_found.svg");
  });
});
