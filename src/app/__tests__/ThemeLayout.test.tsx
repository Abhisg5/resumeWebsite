import { render, screen } from "@testing-library/react";
import ThemeLayout from "../ThemeLayout";

describe("ThemeLayout", () => {
  it("renders children correctly", () => {
    render(
      <ThemeLayout>
        <div data-testid="test-child">Test Child</div>
      </ThemeLayout>,
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByTestId("test-child")).toHaveTextContent("Test Child");
  });
});
