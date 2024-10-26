import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const nav=useNavigate();
    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                <p className="text-lg text-center mb-12">
                    We’d love to hear from you! Reach out to us for any inquiries, feedback, or suggestions.
                </p>

                {/* Contact Information */}
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaPhone className="text-4xl text-[#ff6363] mb-4" />
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-600">+977 9840437941</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaEnvelope className="text-4xl text-[#ff6363] mb-4" />
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-600">info@pawstore.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaMapMarkerAlt className="text-4xl text-[#ff6363] mb-4" />
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-gray-600">Sukedhara, Kathmandu, Nepal</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <button className='bg-purple-900 p-3 text-white rounded-2xl' onClick={()=>nav('/contact')}>Get in Touch</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
