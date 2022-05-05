import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFoundImage from "../notFoundImage";

describe("<NotFoundImage /> (notFoundImage.tsx)", () => {
  it("should render NotFoundImage with props", () => {
    render(<NotFoundImage />);
    expect(<NotFoundImage />).toBeDefined();
  });
});
