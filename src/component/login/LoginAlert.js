import React from "react";

function LoginAlert({ type, message, onClose }) {
  const getColorClass = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "Invalid Login":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };


  return (
    <div
      className={`fixed top-16 right-0 m-4 rounded-lg p-4 text-white ${getColorClass()}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-bold">{type.toUpperCase()}</span>
        <br />
        <button onClick={onClose} className="text-white relative bottom-4">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M15.293 5.293a1 1 0 011.414 1.414L11.414 12l5.293 5.293a1 1 0 11-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 12 3.293 6.707a1 1 0 011.414-1.414L10 10.586l5.293-5.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div>
        <p className="text-sm mt-2">{message}</p>
      </div>
    </div>
  );
}

export default LoginAlert;
