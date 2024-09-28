import image from '../assets/images/Map.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className="bg-[#f6f6f6] mt-5 pb-5">
       <div className=" mx-40 grid grid-cols-col-third py-5 ">
      <div className="mx-auto text-lg font-medium">
        <ul className="space-y-5">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Team</li>
          <li>FAQs</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        </div>
      <div className="mx-auto space-y-5">
        <h1 className="text-2xl font-medium">Contact</h1>
        <div>
          <ul className="text-md font-medium">
            <li>Sukedhara</li>
            <li>Kathmandu,Nepal</li>
            <li>+977 9840437941</li>
          </ul>
        </div>
        </div>
      <div className="mx-auto">
        <img src={image} className='relative left-28 top-10 w-[75%] rounded-xl shadow-md' alt="" />
        </div>
    </div>
    <div className='grid grid-cols-3 mx-40'>
      <div className='mx-auto'>
      <h1>Copyright <span className='inline-flex items-center'><FaRegCopyright /></span> 2024 Rubesh Shrestha
      </h1>
      </div>
      <div className='flex justify-start items-center gap-5 mx-auto'>
      <FaFacebookSquare className='text-blue-700' size={25} />
      <FaYoutube className='text-red-900' size={25}/>
      <FaInstagram size={25}/>
      </div>
      <div className='mx-auto'>
<h1 className='text-lg font-medium'>Created By Rubesh Shrestha</h1>
      </div>
    </div>
      </div>

   
  );
};
export default Footer;
