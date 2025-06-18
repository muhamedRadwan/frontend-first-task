// Responsive grid layout with dynamic year update
import React from "react";
import appStore from "../assets/images/app-store.png";
import googlePlay from "../assets/images/google-play.png";

function Footer() {
  return (
    <footer className=" text-white py-10 px-4">
      <div className="w-[90%] mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-2xl font-bold">Class Community</h2>
          <p className="text-white max-w-sm">
            Building amazing classroom communities with teachers, students, and
            parents.
          </p>
          <div className="flex items-center">
            <img
              src={appStore}
              alt="appStore"
              className="w-28 h-10 sm:w-36 sm:h-12 md:w-40 md:h-14 lg:w-44 lg:h-16 object-contain -mr-2"
            />
            <img
              src={googlePlay}
              alt="googlePlay"
              className="w-28 h-10 sm:w-36 sm:h-12 md:w-40 md:h-14 lg:w-44 lg:h-16 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap gap-8">
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h4 className="font-semibold">Company</h4>
            <a href="#" className="text-white text-sm">
              About Us
            </a>
            <a href="#" className="text-white text-sm">
              Press
            </a>
            <a href="#" className="text-white text-sm">
              Careers
            </a>
            <a href="#" className="text-white text-sm">
              Engineering
            </a>
            <a href="#" className="text-white text-sm">
              Accessibility
            </a>
          </div>
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h4 className="font-semibold">Resources</h4>
            <a href="#" className="text-white text-sm">
              Big Ideas
            </a>
            <a href="#" className="text-white text-sm">
              Resources
            </a>
            <a href="#" className="text-white text-sm">
              Training
            </a>
            <a href="#" className="text-white text-sm">
              Remote Learning
            </a>
            <a href="#" className="text-white text-sm">
              Class
            </a>
          </div>
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h4 className="font-semibold">Support</h4>
            <a href="#" className="text-white text-sm">
              Helpdesk
            </a>
            <a href="#" className="text-white text-sm">
              Contact
            </a>
            <a href="#" className="text-white text-sm">
              Privacy Center
            </a>
            <a href="#" className="text-white text-sm">
              Cookies Setting
            </a>
            <a href="#" className="text-white text-sm">
              Terms of Services{" "}
            </a>
          </div>
          <div className="flex flex-col gap-2 min-w-[120px]">
            <h4 className="font-semibold">Community</h4>
            <a href="#" className="text-white text-sm">
              Facebook
            </a>
            <a href="#" className="text-white text-sm">
              Twitter
            </a>
            <a href="#" className="text-white text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-white text-sm">
        © {new Date().getFullYear()} Class Community. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
