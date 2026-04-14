import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <span className="loading loading-spinner text-green-600 w-16"></span>

        {/* Text */}
        <p className="text-gray-600 text-lg font-medium">
          Loading, please wait...
        </p>

      </div>

    </div>
  );
};

export default Loading;