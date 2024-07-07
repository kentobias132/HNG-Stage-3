import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold">Contact Info</h4>
          <p>Address: 1234 Street Name, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <h4 className="font-bold">Information</h4>
          <ul>
            <li>Shipping and Returns</li>
            <li>Conditions of Use</li>
            <li>About Us</li>
            <li>Manufacturers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">My Account</h4>
          <ul>
            <li>Customer Info</li>
            <li>Addresses</li>
            <li>Orders</li>
            <li>My Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Company</h4>
          <p>LAMMIE is a reputable fashion house brand with various items...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
