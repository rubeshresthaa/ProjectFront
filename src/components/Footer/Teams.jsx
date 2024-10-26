import React from 'react';

// Sample team members data
const teamMembers = [
    {
        name: 'Rubesh Shrestha',
        role: 'Founder & CEO',
        image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        bio: 'With a passion for animal welfare, Rubesh established PawStore to provide quality services for pets and their owners.',
    },
    {
        name: 'Salim Shrestha',
        role: 'Head of Grooming',
        image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Salim has over 5 years of experience in pet grooming and is dedicated to ensuring every pet looks their best.',
    },
    {
        name: 'Aayush Nepal',
        role: 'Veterinarian',
        image: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Dr.Aayush  is a licensed veterinarian who provides exceptional care and medical services for our furry friends.',
    },
    {
        name: 'Joshi',
        role: 'Customer Service Manager',
        image: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        bio: 'Joshi leads our customer service team, ensuring all clients have a positive experience at PawStore.',
    },
];

const Team = () => {
    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
                <p className="text-lg text-center mb-12">
                    Our dedicated team is here to provide the best care and services for your pets.
                </p>

                {/* Team Members List */}
                <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <h3 className="text-md text-gray-600">{member.role}</h3>
                            <p className="mt-2 text-gray-700">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
