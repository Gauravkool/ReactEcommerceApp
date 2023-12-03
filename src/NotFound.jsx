import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="h-full w-full mx-auto flex flex-col justify-center items-center my-10">
      <div className="bg-white flex flex-col gap-2 p-10 justify-center items-center">
        <h1 className="text-8xl text-primary-dark font-bold">404</h1>
        <h2 className="text-4xl">Opps! Page Not Found</h2>
        <p className="text-gray-700 text-lg font-serif">
          The page you requested was not found!
        </p>
        <Link to="/">
          <button className="px-4 py-2 text-white bg-primary-dark rounded-md">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
