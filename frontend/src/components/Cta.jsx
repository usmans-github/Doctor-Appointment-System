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
                Sehat X
              </h3>
            </Link>
            <p className="space-y-1 text-base font-medium ">
              Providing quality healthcare services and medical solutions for a
              better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  text-white mb-2">Quick Links</h3>
            <ul className="space-y-1 text-base font-medium ">
              <li>
                <Link
                  to="/all-doctors"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Public Education
                </a>
              </li>
              <li>
                <a
                  href="/medical/education"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Medical Education
                </a>
              </li>
              <li>
                <Link
                  to="/admin-login"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  text-white mb-2">Contact</h3>
            <ul className="space-y-1 text-base font-medium ">
              {/* <li>123 Medical Center Drive</li> */}
              <li>Pak Arab Society, Lahore</li>
              <li>Phone: 03334903766</li>
              <li>Email: info@sehatx.com</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  text-white mb-2">About Us</h3>
            <p className="space-y-1 text-base font-medium ">
              SehatX Provides Holistic Approach to health and Wellbeing of
              public. <br />
              Your health companion.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 py-6">
          <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0">
            <p className="text-base ">
              © {new Date().getFullYear()} Sehat X . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Cta;
