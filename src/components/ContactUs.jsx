import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const ContactUs = () => {
  const text = useLanguage().text.ContactSection;

  return (
    <div className="flex flex-col md:flex-row gap-5 w-11/12 mb-10 md:h-80">
      {/* Contact Details */}
      <div className="bg-white shrink-0 p-6 rounded-lg flex flex-col gap-4 items-start">
        <h1 className="font-bold text-3xl mb-4 self-center">{text.heading}</h1>

        <a
          href="tel:+1234567890"
          className="flex items-center justify-center gap-4 hover:opacity-80"
        >
          <FaPhoneAlt size={24} className="text-black" />
          <p className="text-lg">+91 1234567890</p>
        </a>

        <a
          href="mailto:example@example.com"
          className="flex items-center justify-center gap-4 hover:opacity-80"
        >
          <FaEnvelope size={24} className="text-black" />
          <p className="text-lg">example@example.com</p>
        </a>

        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <FaMapMarkerAlt size={24} className="text-black" />
          <p className="text-lg">
            Priyadarshini English Medium School, Bettampady, Puttur D.K
          </p>
        </div>
      </div>

      {/* Google Maps Container */}
      <div className="rounded-lg overflow-hidden h-60 md:h-auto w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.7744628912587!2d75.19463677516313!3d12.662787587624946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4972b3be6379b%3A0x3d5860feab2f1da8!2sPriyadarshini%20English%20Medium%20Higher%20Primary%20School%20P.E.M.H.P.S!5e0!3m2!1sen!2sin!4v1739371128053!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
