import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SocialLinks = () => {
  // TODO: Add the correct links to the social media icons
  return (
      <div className="flex w-full justify-center gap-5 md:gap-10 md:mt-5 mt-2 my-10">
        <a
          className="hover:scale-105 transition-transform ease-in"
          href="tel:+1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhoneAlt size={30} />
        </a>
        <a
          className="hover:scale-105 transition-transform ease-in"
          href="https://maps.app.goo.gl/PfqUQh73xbt3phtd7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt size={30} />
        </a>
        <a
          className="hover:scale-105 transition-transform ease-in"
          href="https://www.facebook.com/pems"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        {/* <a className='hover:scale-105 transition-transform ease-in' href="https://twitter.com/pems" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a> */}
        {/* <a className='hover:scale-105 transition-transform ease-in' href="https://www.linkedin.com/in/pems" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a> */}
        <a
          className="hover:scale-105 transition-transform ease-in"
          href="https://www.instagram.com/pems"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          className="hover:scale-105 transition-transform ease-in"
          href="https://www.youtube.com/channel/pems"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} />
        </a>
      </div>
  );
};

export default SocialLinks;
