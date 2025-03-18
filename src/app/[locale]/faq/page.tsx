'use client';

import { useState } from 'react';

const faqs = [
{
    question: 'Why do students prefer online learning?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore'
},
{
    question: 'Where should I study abroad?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore',
},
{
    question: 'How can I contact a school directly?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore',
},
{
    question: 'How do I find a school where I want to study?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore',
},
{
    question: 'How do I find a school where I want to study?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore',
},
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat bg-slate-100 dark:bg-neutral-900"
    // style={{ backgroundImage: "url('/SectionBackground.png')" }}
    >
      <div className="w-full max-w-2xl shadow-xl rounded-lg p-6">
        <h1 className='text-center mb-5 text-neutral-800 dark:text-white'>FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 bg-[gray-200] hover:bg-[#7768E5] cursor-pointer flex justify-between group duration-150"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-neutral-800 dark:text-white group-hover:text-white">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-slate-100 dark:bg-neutral-900 text-neutral-800 dark:text-slate-300 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;