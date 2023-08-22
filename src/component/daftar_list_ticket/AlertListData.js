import React from "react";

function AlertListData({ type, message, onClose }) {
  const getColorClass = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "Invalid Register":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };


  return (
    <div
      className={`fixed top-5 left-0 m-4 rounded-lg p-4 text-white z-100 ${getColorClass()}`}
    >
      <div className="flex items-center justify-between z-40">
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
      <div className="z-40">
        <p className="text-sm mt-2">{message}</p>
      </div>
    </div>
  );
}

export default AlertListData;
