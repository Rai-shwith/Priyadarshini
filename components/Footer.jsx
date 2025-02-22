import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // TODO:improve this
  return (
    <footer className="bg-slate-900 text-white py-8 mt-10 w-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h2 className="text-xl font-bold">
              Priyadarshini English Medium School
            </h2>
            <p className="text-gray-400 mt-2">
              Shaping young minds with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-400 hover:text-white"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-white" /> Bettampady, Puttur D.K
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt className="text-white" /> +91 1234567890
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-white" /> example@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Priyadarshini English Medium School.
          All Rights Reserved.
          <p className="mt-2 mx-5 text-gray-400">
              Website built by
              <a
                href="https://ashwithrai.me"
                className="underline hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Ashwith Rai 2021 batch
              </a>
              , an alumnus of this school.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
