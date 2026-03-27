import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary depending on complexity, but most projects range from 1 to 3 weeks .",
    },
    {
      question: "Do you work with small and medium-sized businesses?",
      answer:
        "Yes. We work with buisnesses of any variant and communicate through modern collaboration tools. We are confident in delivering high-quality software solutions that meets the needs of any business",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern stacks including React, Node.js, Tailwind CSS, and scalable backend solutions.",
    },
    {
      question: "Do you charge a mobilization fee when starting a project?",
      answer:
        "Yes. We charge a 50% mobilization fee for singlar projects to cover initial project setup and resource allocation, While, for multiple projects, we offer a 60% mobilization fee to ensure we can dedicate the necessary resources and provide a seamless experience across all projects. The rest is paid upon project completion.",
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