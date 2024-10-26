import React from 'react';
import groomingImage from '../../assets/images/image1.png'; 
import petSittingImage from '../../assets/images/image1.png';
import trainingImage from '../../assets/images/image1.png';

const Services = () => {
    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
                <p className="text-lg text-center mb-12">
                    At PawStore, we offer a variety of services to cater to all your pet's needs. From grooming to training, our team is dedicated to providing the best for your furry friends.
                </p>

                {/* Services Section */}
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
                    {/* Grooming Service */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={groomingImage} alt="Grooming Service" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">Grooming</h3>
                        <p className="text-gray-600">
                            Our grooming services ensure that your pets look and feel their best. We offer baths, haircuts, nail trims, and more, tailored to your pet's specific needs.
                        </p>
                    </div>

                    {/* Pet Sitting Service */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={petSittingImage} alt="Pet Sitting Service" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">Pet Sitting</h3>
                        <p className="text-gray-600">
                            Going away? Our reliable pet sitting service ensures that your pets receive love and care while you're away. We provide feeding, playtime, and companionship.
                        </p>
                    </div>

                    {/* Training Service */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={trainingImage} alt="Training Service" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">Training</h3>
                        <p className="text-gray-600">
                            Our professional trainers offer a range of training programs designed to improve your pet's behavior and obedience. Join us to help your furry friend become the best version of themselves.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Pamper Your Pet?</h2>
                    <p className="text-md mb-4">Contact us today to schedule a service or learn more about what we offer!</p>
                    <a href="/contact" className="bg-[#3d1e61] text-white py-2 px-4 rounded-lg hover:bg-[#2d1e4a]">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
