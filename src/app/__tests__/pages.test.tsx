import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import AboutPage from "../about/page";
import ContactPage from "../contact/page";
import ProjectsPage from "../projects/page";
import WorkPage from "../work/page";

describe("Page Components", () => {
  it("renders home page", () => {
    render(<HomePage />);
    expect(
      screen.getByText("Data Engineering & ML Solutions"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Senior Data Engineer | AWS Certified | 4+ Years Experience",
      ),
    ).toBeInTheDocument();
  });

  it("renders about page", () => {
    render(<AboutPage />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders contact page", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders projects page", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders work page", () => {
    render(<WorkPage />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });
});
