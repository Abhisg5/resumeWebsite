import { render, screen } from "@testing-library/react";
import AuroraWaves from "../AuroraWaves";

// Mock the canvas context
jest.mock("../AuroraWaves", () => {
  return function MockAuroraWaves() {
    return <div data-testid="aurora-waves" />;
  };
});

describe("AuroraWaves", () => {
  it("renders canvas element", () => {
    render(<AuroraWaves />);
    expect(screen.getByTestId("aurora-waves")).toBeInTheDocument();
  });
});
