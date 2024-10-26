import React, { useState } from 'react';

const faqs = [
    {
        question: 'What services does PawStore offer?',
        answer: 'PawStore offers a variety of services including pet grooming, boarding, training classes, veterinary services, pet supplies, and adoption services.',
    },
    {
        question: 'What are the store hours?',
        answer: 'We are open Monday to Saturday from 9 AM to 6 PM and closed on Sundays.',
    },
    {
        question: 'Do I need to make an appointment for grooming?',
        answer: 'Yes, we recommend scheduling an appointment for grooming services to ensure availability.',
    },
    {
        question: 'What should I bring for my pet during a boarding stay?',
        answer: 'Please bring your pet’s food, any medications, and a favorite toy or blanket to help them feel comfortable during their stay.',
    },
    {
        question: 'Is there an age limit for training classes?',
        answer: 'No, we offer training classes for pets of all ages, from puppies to senior pets.',
    },
    {
        question: 'Can I adopt a pet from PawStore?',
        answer: 'Yes, PawStore facilitates adoptions and helps match families with pets that fit their lifestyle.',
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                <p className="text-lg text-center mb-12">
                    Here are some common questions we receive from our customers.
                </p>

                {/* FAQs List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2
                                className="text-lg font-semibold cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                            </h2>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
