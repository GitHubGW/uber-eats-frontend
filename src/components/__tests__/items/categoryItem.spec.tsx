import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoryItem from "../../items/categoryItem";

describe("<CategoryItem /> (categoryItem.tsx)", () => {
  it("should render CategoryItem with props", () => {
    render(
      <BrowserRouter>
        <CategoryItem name="korean food" imageUrl="test imageUrl" />
      </BrowserRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "test imageUrl");
    expect(screen.getByText("korean food")).toBeDefined();
  });
});
