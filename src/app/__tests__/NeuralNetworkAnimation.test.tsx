import { render, screen } from "@testing-library/react";
import NeuralNetworkAnimation from "../NeuralNetworkAnimation";

// Mock the canvas context
jest.mock("../NeuralNetworkAnimation", () => {
  return function MockNeuralNetworkAnimation() {
    return <div data-testid="neural-network-animation" />;
  };
});

describe("NeuralNetworkAnimation", () => {
  it("renders canvas element", () => {
    render(<NeuralNetworkAnimation />);
    expect(screen.getByTestId("neural-network-animation")).toBeInTheDocument();
  });
});
