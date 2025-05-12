import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import pool from '../assets/pool.jpg';
import spa from '../assets/spa.jpg';
import dining from '../assets/dining.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4 z-10">Welcome to Ethiopian Skylight Hotel</h1>
        <p className="text-xl text-white mb-6 z-10">Experience luxury and comfort at its finest.</p>
        <Link to="/rooms" className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-all z-10">
          Explore Rooms
        </Link>
        <div className="absolute bottom-6 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-6">Ethiopian Skylight Hotel offers world-class hospitality with luxurious rooms, exquisite dining, and top-notch amenities. Located in the heart of Addis Ababa, we ensure an unforgettable stay for our guests.</p>
          <img src={hero1} alt="About Us" className="mx-auto rounded-lg shadow-lg w-3/4" />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={pool} alt="Pool" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Swimming Pool</h3>
              <p>Relax and unwind in our luxurious pool.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={spa} alt="Spa" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Spa & Wellness</h3>
              <p>Rejuvenate with our world-class spa services.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={dining} alt="Dining" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Fine Dining</h3>
              <p>Enjoy exquisite cuisines from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">"The best hotel experience I've ever had! The staff was incredibly friendly and the amenities were top-notch."</p>
              <h3 className="text-xl font-semibold">- Jane Doe</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">"A truly luxurious stay. The rooms were spacious and the food was amazing. Highly recommend!"</p>
              <h3 className="text-xl font-semibold">- John Smith</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-purple-100 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">Have questions or need assistance? Reach out to us!</p>
          <a href="mailto:info@ethiopianskylighthotel.com" className="text-purple-600 underline">info@ethiopianskylighthotel.com</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
