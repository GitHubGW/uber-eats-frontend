import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout";

describe("<MainLayout /> (mainLayout.tsx)", () => {
  it("should render MainLayout with props", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <MainLayout pageTitle="메인">
            <div>MainLayout</div>
          </MainLayout>
        </BrowserRouter>
      </HelmetProvider>
    );

    expect(screen.getByText("MainLayout")).toBeDefined();
  });
});
