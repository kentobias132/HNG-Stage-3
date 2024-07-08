import React from "react";
import { XIcon, RssIcon } from "@heroicons/react/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importing from react-icons

const Footer = () => {
  return (
    <footer className="bg-[#2D16BB] text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div>
          <h4 className="font-bold">Contact Info</h4>
          <p>Anderson Smith street, Lekki Phase 1, Lagos, Nigeria</p>
          <p>+234 706 624 67198</p>
          <div className="flex space-x-2 mt-2">
            <a href="#" aria-label="Twitter">
              <XIcon className="h-6 w-6 text-white" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="h-6 w-6 text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 text-white" />
            </a>
            <a href="#" aria-label="RSS">
              <RssIcon className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Information</h4>
          <ul className="space-y-1">
            <li>Shipping and Returns</li>
            <li>Conditions of Use</li>
            <li>About Us</li>
            <li>Manufacturers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">My Account</h4>
          <ul className="space-y-1">
            <li>Customer Info</li>
            <li>Addresses</li>
            <li>Orders</li>
            <li>My Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Company</h4>
          <p>
            LAMMIE is a reputable fashion house brand with various items both
            for men and women alike. Customer’s satisfaction is our utmost goal.
            We strive for excellence and we continue to find new ways to serve
            you better.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
