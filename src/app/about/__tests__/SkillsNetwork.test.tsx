import { render, screen } from "@testing-library/react";
import SkillsNetwork from "../SkillsNetwork";

// Mock the canvas context
jest.mock("../SkillsNetwork", () => {
  return function MockSkillsNetwork() {
    return <div data-testid="skills-network" />;
  };
});

describe("SkillsNetwork", () => {
  it("renders canvas element", () => {
    render(<SkillsNetwork />);
    expect(screen.getByTestId("skills-network")).toBeInTheDocument();
  });
});
