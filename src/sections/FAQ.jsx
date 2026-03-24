import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary depending on complexity, but most projects range from 2 to 6 weeks.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We work with clients worldwide and communicate through modern collaboration tools.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern stacks including React, Node.js, Tailwind CSS, and scalable backend solutions.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl mb-12 text-center">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-5 bg-white/5 hover:bg-white/10 transition"
                onClick={() =>
                  setActive(active === i ? null : i)
                }
              >
                {faq.question}
              </button>

              {active === i && (
                <div className="p-5 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}