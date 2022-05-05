import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DarkLogo from "../darkLogo";

describe("<DarkLogo /> (darkLogo.tsx)", () => {
  it("should render DarkLogo", () => {
    render(<DarkLogo />);
    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/uber_eats_logo_dark.jpeg");
  });
});
