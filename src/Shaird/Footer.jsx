import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-20">
        <div className="block md:flex h-60">
          {/* Footer first section */}
          <div className="bg-[#1F2937] space-y-1 text-white w-full md:w-1/2 flex flex-col justify-center px-10">
            <h2 className="text-xl font-semibold">CONTACT US</h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Footer second section */}
          <div className="bg-[#111827] space-y-2 text-white w-full md:w-1/2 flex flex-col justify-center px-10">
            <h2 className="text-xl font-semibold">Follow US</h2>
            <p>Join us on social media</p>
            <div className="flex gap-6 text-xl">
              <FaFacebook />
              <FaInstagramSquare />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>

{/* CopyRight section */}
        <div className="bg-[#151515] text-white text-center py-2">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
