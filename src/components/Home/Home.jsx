// 
import React, { useState } from "react";
import image1 from "../../assets/images/pngwing.com.png"; // Replace with your images
import image2 from "../../assets/images/image1.png"; // Another image for the carousel
import image3 from "../../assets/images/image2.png"; // Yet another image for the carousel

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: image1,
      title: "Everybody Needs A Friend in Life.",
      description:
        "A puppy is a young dog, full of energy, curiosity, and playfulness. They are known for their adorable, small size, soft fur, and wide, innocent eyes.",
    },
    {
      image: image2,
      title: "Puppies are Joyful.",
      description:
        "Puppies bring joy and happiness to families. They love to play, cuddle, and explore new things every day.",
    },
    {
      image: image3,
      title: "Training Your Puppy.",
      description:
        "Proper training is essential to ensure a well-behaved dog. Start early to teach your puppy commands and good behavior.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="grid grid-cols-2 bg-[#fff5cc] p-4 ">
      <div className="w-96 h-96 rounded-full mx-auto shadow-2xl">
        <div
          className="relative right-20 top-12 w-10 h-10 rounded-full shadow-2xl bg-[#ffe680]"
          style={{
            background: "linear-gradient(to top, #ffe680, transparent)",
          }}
        ></div>
        <div className="relative  right-6 bottom-14">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-96 h-96"
          />
        </div>
      </div>

      <div className="mx-auto p-10">
        <h1 className="text-4xl mx-auto p-5">{slides[currentIndex].title}</h1>
        <p className="p-5">{slides[currentIndex].description}</p>
        <div className="ml-4">
          <button className="p-3 w-28 bg-[#ff9900] rounded-2xl text-white hover:bg-[#ffe0b3] hover:text-black outline-none">
            Buy Me
          </button>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-between mt-5">
          <button
            onClick={handlePrev}
            className="bg-gray-800 text-white p-2 rounded-lg"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white p-2 rounded-lg"
          >
            Next
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
