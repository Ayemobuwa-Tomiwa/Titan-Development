import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

export default function Contact() {
  const form = useRef();
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  // Define the two template IDs
  const customerTemplate = "template_us44qw5"; // Auto-reply to user
  const adminTemplate = "template_tncploj"; // Notification to you (Change to your actual ID)

  // Trigger both emails simultaneously
  Promise.all([
    emailjs.sendForm("service_z61frhh", customerTemplate, form.current, "SIoYUnwAkP1RpW68a"),
    emailjs.sendForm("service_z61frhh", adminTemplate, form.current, "SIoYUnwAkP1RpW68a")
  ])
    .then(
      () => {
        showToast("Message sent successfully!", "success");
        form.current.reset();
        setIsSending(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        showToast("Failed to send message.", "error");
        setIsSending(false);
      }
    );
};

  return (
    <section id="contact" className="py-20 px-6 bg-transparent relative">
      {/* RESTORED HEADING */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl mb-4 font-bold">
          Send Us{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            An Email
          </span>
        </h2>
        <p className="text-gray-400">We'll get back to you within 3 business days.</p>
      </div>

      {/* TOAST NOTIFICATION (Fixes the ESLint Error) */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid gap-6 max-w-3xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-400 outline-none transition text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-400 outline-none transition text-white"
        />

        <textarea
          name="title"
          rows="5"
          placeholder="Your Message"
          required
          className="p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-400 outline-none transition text-white"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`px-8 py-3 border border-yellow-400 text-yellow-400 rounded transition font-medium ${
            isSending 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-yellow-400 hover:text-black shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          }`}
        >
          {isSending ? "Processing..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}