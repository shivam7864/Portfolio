import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMailchimp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiLinktreeLogoBold } from "react-icons/pi";
const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Shivam Tiwari</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/ShivamTiwari325" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shivam-tiwari-2475a2226",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/itsme_shivamtiwari/",
            },
            {
              icon: <MdEmail />,
              link:"mailto:shivamtiwari7864@gmail.com",
            },
            {
              icon: <PiLinktreeLogoBold />,
              link: "https://linktr.ee/shivamtiwari7864",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Shivam Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
