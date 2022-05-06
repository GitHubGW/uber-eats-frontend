import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantItems from "../../items/restaurantItems";

describe("<RestaurantItems /> (restaurantItems.tsx)", () => {
  const categoryObject = { id: 1, name: "korean food", imageUrl: "test imageUrl", totalRestaurants: 1 };
  const restaurantObject = {
    id: 1,
    name: "test restaurant",
    address: "test address",
    imageUrl: "test imageUrl",
    isPromoted: false,
    promotedUntilDate: "test date",
    category: categoryObject || null || undefined,
  };
  const restaurants = [restaurantObject] || null || undefined;

  it("should render RestaurantItems with Loading (loading: true)", () => {
    render(<RestaurantItems loading={true} restaurants={restaurants} />);

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/loading.gif");
  });

  it("should render RestaurantItems with RestaurantItem (loading: false)", () => {
    render(
      <BrowserRouter>
        <RestaurantItems loading={false} restaurants={restaurants} />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");
    const img = screen.getByTestId("restaurant-item-image");
    expect(link).toBeDefined();
    expect(link).toHaveAttribute("href", "/restaurants/1");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "test imageUrl");
    expect(screen.getByText("test restaurant")).toBeDefined();
    expect(screen.getByText("test address")).toBeDefined();
    expect(screen.getByText("korean food")).toBeDefined();
  });
});
