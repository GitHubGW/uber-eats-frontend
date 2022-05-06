import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoryItems from "../../items/categoryItems";

describe("<CategoryItems /> (categoryItems.tsx)", () => {
  const category = [{ id: 1, name: "korean food", imageUrl: "test imageUrl", totalRestaurants: 1 }];

  it("should render CategoryItems with Loading (loading: true)", () => {
    render(<CategoryItems loading={true} category={category} />);

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/loading.gif");
  });

  it("should render CategoryItems with CategoryItem (loading: false)", () => {
    render(
      <BrowserRouter>
        <CategoryItems loading={false} category={category} />
      </BrowserRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "test imageUrl");
    expect(screen.getByText("korean food")).toBeDefined();
  });
});
