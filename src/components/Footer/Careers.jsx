import React from 'react';

const jobListings = [
    {
        title: 'Pet Groomer',
        location: 'Kathmandu, Nepal',
        description: 'Join our grooming team and help keep pets looking and feeling their best. Experience preferred but not required.',
    },
    {
        title: 'Veterinary Technician',
        location: 'Kathmandu, Nepal',
        description: 'Provide veterinary care for our furry friends, assisting our veterinarians in routine procedures and emergency care.',
    },
    {
        title: 'Customer Service Representative',
        location: 'Remote',
        description: 'Provide exceptional customer service and support to our clients, answering inquiries and resolving issues.',
    },
    {
        title: 'Pet Trainer',
        location: 'Kathmandu, Nepal',
        description: 'Teach pets essential commands and behaviors in a positive and engaging environment. Experience required.',
    },
];

const Careers = () => {
    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">Careers at PawStore</h1>
                <p className="text-lg text-center mb-12">
                    Join our team of passionate animal lovers and make a difference in the lives of pets and their families.
                </p>

                {/* Job Listings */}
                <div className="space-y-8">
                    {jobListings.map((job, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold">{job.title}</h2>
                            <p className="text-gray-600">{job.location}</p>
                            <p className="mt-2">{job.description}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Instructions */}
                <div className="mt-10 text-center">
                    <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
                    <p>
                        Interested candidates can send their resume and cover letter to <strong>careers@pawstore.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Careers;
