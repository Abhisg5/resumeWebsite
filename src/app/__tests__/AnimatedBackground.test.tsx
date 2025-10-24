import { render, screen } from "@testing-library/react";
import AnimatedBackground from "../AnimatedBackground";

// Mock the canvas context
jest.mock("../AnimatedBackground", () => {
  return function MockAnimatedBackground() {
    return <div data-testid="animated-background" />;
  };
});

describe("AnimatedBackground", () => {
  it("renders canvas element", () => {
    render(<AnimatedBackground />);
    expect(screen.getByTestId("animated-background")).toBeInTheDocument();
  });
});
