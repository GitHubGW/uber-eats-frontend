import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import HomeLayout from "../../layouts/homeLayout";

describe("<HomeLayout /> (homeLayout.tsx)", () => {
  it("should render HomeLayout with props", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <HomeLayout pageTitle="홈">
            <div>HomeLayout</div>
          </HomeLayout>
        </BrowserRouter>
      </HelmetProvider>
    );

    expect(screen.getByText("HomeLayout")).toBeDefined();
  });
});
