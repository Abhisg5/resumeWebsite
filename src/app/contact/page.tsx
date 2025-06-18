import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-white">
        Contact
      </h1>
      <div className="mx-auto max-w-2xl">
        <p className="mb-8 text-center text-lg text-white/70">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
