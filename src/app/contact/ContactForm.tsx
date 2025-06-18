"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitted, setSubmitted] = useState(false);

  // Validate form whenever formData or submitted changes
  useEffect(() => {
    if (!submitted) return;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
  }, [formData, submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Wait for errors to be set
    await new Promise((r) => setTimeout(r, 0));

    // Check if there are any validation errors
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      setSubmitStatus("idle");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setSubmitted(false);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Don't clear errors here; let useEffect handle it
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-6"
      role="form"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="mt-1 block w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {submitted && errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="mt-1 block w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {submitted && errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your message"
          className="mt-1 block w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {submitted && errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Send Message
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-sm text-green-400">
          Message sent successfully!
        </p>
      )}

      {submitStatus === "error" && (
        <p className="text-center text-sm text-red-400">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
