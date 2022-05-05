import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LightLogo from "../lightLogo";

describe("<LightLogo /> (lightLogo.tsx)", () => {
  it("should render LightLogo", () => {
    render(<LightLogo />);
    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/uber_eats_logo_light.png");
  });
});
