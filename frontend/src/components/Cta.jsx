import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <footer className="bg-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to={"/"}>
              <h3 className="text-xl md:text-3xl font-bold  hover:text-black mb-2">
                Healthcare
              </h3>
            </Link>
            <p className="text-base">
              Providing quality healthcare services and medical solutions for a
              better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold  text-white mb-2" >
              Quick Links
            </h3>
            <ul className="space-y-1 text-base font-medium ">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Health Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  text-white mb-2" >
              Contact
            </h3>
            <ul className="space-y-1 text-base font ">
              <li>123 Medical Center Drive</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@healthcare.com</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold  text-white mb-2"  >
              Working Hours
            </h3>
            <ul className="space-y-1 text-base font ">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Emergency Only</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-base ">
              © {new Date().getFullYear()} Healthcare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-base  hover:text-black transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-base  hover:text-black transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Cta;
