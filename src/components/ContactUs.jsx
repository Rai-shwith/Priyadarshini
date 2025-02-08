import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="flex flex-col w-full items-center my-10">
      <h1 className="font-bold text-4xl mb-5">CONTACT US</h1>
      <div className="w-11/12 md:w-3/4 md:text-2xl self-center bg-white shadow-lg drop-shadow-lg p-5 rounded-lg flex flex-col gap-5">
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer" className="flex justify-start gap-5">
          <div >
            <FaPhoneAlt size={30} />
          </div>
          <p>+91 1234567890</p>
        </a>
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer" className="flex justify-start gap-5">
          <div >
            <FaPhoneAlt size={30} />
          </div>
          <p>+91 1234567890</p>
        </a>
        <a
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
         className="flex justify-start gap-5">
          <div >
            <FaEnvelope size={30} />
          </div>
          <p>example@example.com</p>
        </a>
        <a
          href="https://maps.app.goo.gl/PfqUQh73xbt3phtd7"
          target="_blank"
          rel="noopener noreferrer"
         className="flex justify-start gap-5">
          <div >
            <FaMapMarkerAlt size={30} />
          </div>
          <div className="">
            {" "}
            Priyadarshini English Medium School Bettampady, Puttur D.K
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
