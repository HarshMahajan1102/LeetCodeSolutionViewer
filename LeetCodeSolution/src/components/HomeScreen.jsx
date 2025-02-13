import { useState } from "react";
import PageTitle from "./PageTitle.jsx";
import SearchBar from "./SearchBar";
import Suggestions from "./Suggestions.jsx";

export default function HomeScreen({ questions }) {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="home h-screen flex flex-col justify-center items-center bg-[#78a1bb]">
        <PageTitle setShowSearch={setShowSearch} showSearch={showSearch} />

        {showSearch && <SearchBar query={query} setQuery={setQuery} />} 

        <div className="h-[35vh] w-[80vw] md:w-[35vw]">
          {query && <Suggestions query={query} questions={questions} />}
        </div>
        
        <div className="fixed flex items-center justify-center h-screen mt-[200px]">
          <div className="border-2 rounded-tl-[25px] rounded-tr-[10px] rounded-bl-[15px] rounded-br-[40px] p-4 m-4 w-[60%] animate-fadeInRight bg-[#e54f6d] text-sm -mt-[650px]">
            <p>This is your go-to place to analyze your mistakes,
              refine your coding approach, and gain deeper insights
              into problem-solving. Whether you're tackling complex algorithms,
              debugging tricky edge cases, or optimizing your solutions for
              efficiency, this platform helps you identify areas for improvement
              and sharpen your competitive programming skills. Every mistake is
              an opportunity to grow, and with the right guidance, you can
              transform challenges into stepping stones toward mastery.
              Keep pushing your limits and coding your way to success!</p>
          </div>
          <div className="border-2 rounded-tl-[10px] rounded-tr-[25px] rounded-bl-[40px] rounded-br-[15px] p-4 m-4 w-[33%] animate-fadeInLeft bg-[#e54f6d] text-sm -mt-[650px]">
            <p>It is advised to use it only when you are stuck on the same problem after giving your best. It is not
              advised to use it just for copying and pasting in order to improve your score and rank.
              Wishing you all the very best for your competitive programming journey and for your coding journey.</p>
          </div>
        </div>

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
    </>
  );
}
