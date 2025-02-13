import React from "react";
import laptopImage from "../assets/laptop-right.png";

const PageTitle = ({ showSearch, setShowSearch }) => {
  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full flex items-center h-16 bg-[#283044] px-6 shadow-lg">

        <img
          src={laptopImage}
          alt="Laptop"
          className="h-10 w-10 mr-2 animate-fadeInLeft"
        />
        <h2 className="text-2xl font-semibold flex items-center">
          <span className="text-white opacity-0 inline-block animate-fadeInLeft text-3xl">Leet&lt;</span>
          <span className="text-white">/</span>
          <span className="text-white opacity-0 inline-block animate-fadeInRight text-3xl">&gt;Code</span>
        </h2>
        
        {!showSearch ? (
          <button 
            className="ml-auto bg-[#78a1bb] text-black px-4 py-1 rounded-md shadow-md hover:bg-gray-200"
            onClick={() => setShowSearch(true)} 
          >
            Search
          </button>
        ) : (
          <button 
            className="ml-auto bg-[#78a1bb] text-black px-3 py-1 rounded-full shadow-md hover:bg-gray-200"
            onClick={() => setShowSearch(false)} 
          >
            X
          </button>
        )}
      </header>
      <style>
        {`
          @keyframes fadeInRight {
            from {
              transform: translateX(-50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeInLeft {
            from {
              transform: translateX(50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease-out forwards;
          }

          .animate-fadeInRight {
            animation: fadeInRight 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default PageTitle;

