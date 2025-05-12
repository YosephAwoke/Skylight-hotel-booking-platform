import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Ethiopian Skylight Hotel offers world-class hospitality with luxurious rooms, exquisite dining, and top-notch amenities. Located in the heart of Addis Ababa, we ensure an unforgettable stay for our guests.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/rooms" className="hover:underline">Rooms</a></li>
            <li><a href="/signin" className="hover:underline">Sign In</a></li>
            <li><a href="/signup" className="hover:underline">Sign Up</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ethiopianskylighthotel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/etskylight" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/ethskylight/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/ethiopianskylighthotel/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UCord7J1oV9gmx-vQ4r1NdMg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-sm">
        © 2025 Ethiopian Skylight Hotel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
