import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "./not-found.jpg";
function NotFound() {
  return (
    <div className="h-full w-full mx-auto flex flex-col justify-center items-center my-10">
      <div className="bg-white flex flex-col gap-2 p-10 justify-center items-center">
        <img src={NotFoundImage} alt="" />

        <Link to="/">
          <button className="px-4 py-2 mt-4 text-white bg-primary-dark rounded-md">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
