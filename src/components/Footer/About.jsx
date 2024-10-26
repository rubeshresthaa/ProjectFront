import React from 'react';
import pawLogo from '../../assets/images/german.jpg';
import teamMember1 from '../../assets/images/german.jpg';
import teamMember2 from '../../assets/images/german.jpg';
import teamMember3 from '../../assets/images/pitbull.jpg';

const About = () => {
    return (
        <div className="bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">About PawStore</h1>
                <img src={pawLogo} alt="PawStore Logo" className="mx-auto mb-6 w-24" />
                <p className="text-lg text-center mb-12">
                    At PawStore, we are passionate about pets. Our mission is to provide high-quality products and exceptional service to pet lovers everywhere.
                </p>

                {/* Our Mission */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-md max-w-2xl mx-auto">
                        Our mission is to ensure that every pet feels loved and cared for by offering a wide selection of premium pet products. We believe that pets are family, and we are here to support pet owners in giving their furry friends the best life possible.
                    </p>
                </div>

                {/* Team Section */}
                <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={teamMember1} alt="Team Member 1" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">John Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={teamMember2} alt="Team Member 2" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
                        <p className="text-gray-600">Product Manager</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={teamMember3} alt="Team Member 3" className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-4">Alice Johnson</h3>
                        <p className="text-gray-600">Customer Relations</p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-md">For any inquiries, please reach out to us at:</p>
                    <p className="text-lg font-medium">info@pawstore.com</p>
                    <p className="text-md">+977 9840437941</p>
                </div>
            </div>
        </div>
    );
};

export default About;
