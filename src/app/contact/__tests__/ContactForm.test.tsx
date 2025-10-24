import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it("renders form elements", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("allows typing in form fields", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello world");
  });
});
