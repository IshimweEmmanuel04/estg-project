import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaAddressCard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-zinc-800 text-white p-16">
      <div>
        <h2 className="text-lg font-extrabold">Contact Us & Address</h2>
       
        <p className="flex text-sm"><FaEnvelope className="mt-1 mr-2 text-sky-700" /> estg@gmil.com</p>
        
        <p className="flex text-sm"><FaPhone className="mt-1  mr-2 text-sky-700" />(+250)08934563</p>
        
        <p className="flex text-sm"><FaAddressCard className="mt-1  mr-2 text-sky-700" /> P.Box 20243</p> <br />
      </div>
      <div>
        <h2 className="text-lg font-extrabold">Our Social Media Link</h2>
        <div className="flex ">
          <p className="m-2">
            <FaFacebook  className="text-sky-700 cursor-pointer"/>
          </p>
          <p className="m-2 ">
            <FaInstagram className="text-sky-700 cursor-pointer"/>
          </p>
          <p className="m-2">
            <FaTwitter className="text-sky-700 cursor-pointer"/>
          </p>
          <p className="m-2">
            <FaGithub className="text-sky-700 cursor-pointer"/>
          </p>
        </div>
      </div>
      <br />
      <p className="text-center text-xs translate-y-8 ">@2023-copyrightESTG </p>
    </div>
  );
}
