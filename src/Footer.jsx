import React from "react";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="py-4 bg-gray-700 mt-4">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <div>
          <p className="text-sm text-white">
            &copy; Copyright 2023. All Rights Reserved by DevUI.
          </p>
        </div>
        <div className="text-white">
          <ul className="flex gap-2">
            <li>
              <Link to="/" className="text-md">
                <SlSocialFacebook />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-md">
                <SlSocialInstagram />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-md">
                <SlSocialTwitter />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-md">
                <SlSocialLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
