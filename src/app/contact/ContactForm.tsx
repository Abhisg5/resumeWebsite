"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/**
 * Interface representing the form data structure
 * @interface FormData
 */
interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Interface representing the form errors structure
 * @interface FormErrors
 */
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * ContactForm Component
 *
 * A form component that handles user contact submissions. It includes:
 * - Form validation
 * - Error handling
 * - Success/error state management
 * - API integration
 *
 * @component
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 */
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
      // Initialize EmailJS with your service ID
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      // For now, we'll use a fallback method that logs the data
      // Replace this with actual EmailJS sending when you set up your account
      console.log("Contact Form Data:", formData);

      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitted(false);

      // Uncomment this when you have EmailJS set up:

      // Only try to send email if we have valid EmailJS credentials
      if (
        serviceId !== "your_service_id" &&
        templateId !== "your_template_id" &&
        publicKey !== "your_public_key"
      ) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          publicKey,
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
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
    <div className="professional-card p-8">
      <form onSubmit={handleSubmit} className="w-full space-y-6" role="form">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-white mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          />
          {submitted && errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          />
          {submitted && errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
          />
          {submitted && errors.message && (
            <p className="mt-2 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 font-medium">
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 font-medium">
              ❌ Failed to send message. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
