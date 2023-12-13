import React from "react";
function Input({ label, id, name, className, touched, error, ...rest }) {
  let borderClass = "border-gray-300 focus:border-indigo-500";
  if (touched && error) {
    borderClass = "border-primary-default";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={`relative block w-full appearance-none rounded-md border px-2 py-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${className} ${borderClass}`}
        {...rest}
      />
      {touched && error && <div className="text-primary-dark">{error}</div>}
    </div>
  );
}

export default Input;
