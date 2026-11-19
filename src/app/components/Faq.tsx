'use client'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react'

export default function Faq() {
    const [answerOpen, setAnswerOpen] = useState<number | null>(0);

    const questions = [
        {
            question: 'How can i subscribe to your internet service',
            answer: 'You can easily subscribe by visiting our website, filling out the registration form, and selecting the service plan that best suits your needs. Our team will contact you to complete the setup.'
        },
        {
            question: 'What service does Hindukush Bridge provide',
            answer: 'Hindukush Bridge provides high-speed internet services, secure networking solutions, and 24/7 support for residential and business customers.'
        },
        {
            question: 'Do you offer customer support',
            answer: 'Yes, we offer 24/7 customer support via phone, email, and live chat to help you with any technical or service-related inquiries.'
        },
    ]

    return (
        <section id='faq' className='flex flex-col items-center px-5 gap-15 py-15 sm:py-15'>
            <div className="space-y-2 text-center">
                <h2 className='text-2xl md:text-4xl capitalize font-bold'>ask questions</h2>
                <p className="text-gray-600 text-base sm:text-lg capitalize">frequently asked questions</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-3xl mx-auto">
                {questions.map((question, index) => (
                    <article key={index} className={`space-y-2 py-4 ${index !== questions.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div
                            onClick={() => setAnswerOpen(answerOpen === index ? null : index)}
                            className="flex justify-between gap-5"
                        >
                            <span className='text-sm sm:text-lg font-medium'>{index + 1}. {question.question}?</span>
                            <button
                                type='button'
                                className={`transition-transform duration-300 ${answerOpen === index ? 'rotate-180' : ''}`}
                            >
                                <ChevronDown size={18} />
                            </button>
                        </div>
                        {answerOpen === index && (
                            <p className='text-black/80 text-sm leading-relaxed tracking-wide'>{question.answer}</p>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}
