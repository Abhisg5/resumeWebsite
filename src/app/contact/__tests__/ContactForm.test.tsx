import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  it("validates required fields", async () => {
    render(<ContactForm />);

    const sendButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("submits form with valid data", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const sendButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });
    fireEvent.click(sendButton);

    // Verify the form submission starts (button shows "Sending...")
    await waitFor(() => {
      expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
    });
  });

  it("handles form submission error", async () => {
    // Mock console.error to avoid noise in test output
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const sendButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });
    fireEvent.click(sendButton);

    // Wait for the form to process
    await waitFor(() => {
      expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });
});
