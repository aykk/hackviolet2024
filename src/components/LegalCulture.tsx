import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 mx-4 p-8 rounded-xl bg-blue-500 text-white text-center">
        <h2>Legal</h2>
      </div>
      <div className="w-1/4 mx-4 p-8 rounded-xl bg-green-500 text-white text-center">
        <h2>Cultural</h2>
      </div>
    </div>
  );
};

export default MyComponent;