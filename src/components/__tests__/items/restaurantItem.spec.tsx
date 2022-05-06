import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantItem from "../../items/restaurantItem";

describe("<RestaurantItem /> (restaurantItem.tsx)", () => {
  it("should render RestaurantItem without promo image (isPromoted: false)", () => {
    render(
      <BrowserRouter>
        <RestaurantItem id={1} name="test name" address="test address" imageUrl="test imageUrl" isPromoted={false} promotedUntilDate="2022-05-06" categoryName="korean food" />
      </BrowserRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "test imageUrl");
    expect(screen.getByText("test name")).toBeDefined();
    expect(screen.getByText("test address")).toBeDefined();
    expect(screen.getByText("korean food")).toBeDefined();
  });

  it("should render RestaurantItem with promo image (isPromoted: true)", () => {
    render(
      <BrowserRouter>
        <RestaurantItem id={1} name="test name" address="test address" imageUrl="test imageUrl" isPromoted={true} promotedUntilDate="2022-05-06" categoryName="korean food" />
      </BrowserRouter>
    );

    const img = screen.getByTestId("promo-image");
    expect(img).toBeDefined();
    expect(img).toHaveAttribute("src", "/images/icon_promo.png");
    expect(screen.getByText("test name")).toBeDefined();
    expect(screen.getByText("test address")).toBeDefined();
    expect(screen.getByText("korean food")).toBeDefined();
  });
});
