"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FaqItem[] = [
    {
      question: "How does MindDocs process my PDFs?",
      answer:
        "MindDocs uses advanced AI to analyze your PDF documents, identify key concepts, and generate summaries and highlights. Your documents are processed securely in the cloud, and all data is encrypted both in transit and at rest.",
    },
    {
      question: "Can I use MindDocs offline?",
      answer:
        "MindDocs requires an internet connection to process PDFs and generate AI insights. However, once your notes are created, you can export them for offline use in various formats including PDF, Markdown, and plain text.",
    },
    {
      question: "Is there a limit to the size of PDFs I can upload?",
      answer:
        "Free accounts can upload PDFs up to 10MB in size. Pro and Team accounts can upload PDFs up to 50MB. If you need to process larger documents, please contact our support team for assistance.",
    },
    {
      question: "How secure is my data with MindDocs?",
      answer:
        "We take security seriously. All documents are encrypted both in transit and at rest. We do not share your data with third parties, and you can delete your documents at any time. For more details, please see our Privacy Policy.",
    },
    {
      question: "Can I collaborate with others on my notes?",
      answer:
        "Yes! Pro users can share individual documents, while Team accounts have full collaboration features including shared workspaces, commenting, and permission controls.",
    },
    {
      question: "What types of documents work best with MindDocs?",
      answer:
        "MindDocs works with any PDF document, but it excels with text-heavy content like research papers, textbooks, reports, and articles. It can also process scanned documents with OCR, though the quality of insights depends on the clarity of the scan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about MindDocs? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-xl bg-white overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  </div>
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            <span>Contact our support team</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
