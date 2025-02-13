import HomeButton from "./HomeButton";

export default function QSide({ qTitle, qno, question, difficulty }) {
  const color = {
    Easy: "text-green-500 [text-shadow:_0px_0px_2px_black]",
    Medium: "text-[#f4d35e] [text-shadow:_0px_0px_2px_black]",
    Hard: "text-red-500 [text-shadow:_0px_0px_2px_black]",
  };
  if (question === "") question = "Question not available";

  question = question.replace(/^\/\/ /, "");
  question = question.replace(/\n\/\/ /g, "\n");
  question = question.replace(/\/\*+/g, "");
  question = question.replace(/\n *\* /g, "\n");

  return (
    <div
      className="w-full md:w-[30vw] h-auto md:h-[95vh] overflow-y-auto relative overflow-x-hidden p-4 
      bg-[#bee7e8] border border-gray-300 rounded-lg shadow-md"
    >
      <pre className="whitespace-pre-wrap break-words text-gray-800 text-lg leading-relaxed">
      
      <div className="flex gap-3">
      <div className="bg-transparent z-20">
                <HomeButton />
       </div>
        <p className="font-bold text-2xl flex-1 text-[#1c1c1c] pb-2 font-gillSans text-xl1  [text-shadow:_0px_0px_6px_gray]">
          {qno}. {qTitle}
        </p>
      </div>
        <p className={`${color[difficulty]} font-bold font-gillSans`}>{difficulty}</p>
        <p className="mt-2 text-start text-base leading-tight font-sans">{question}</p>
      </pre>
    </div>
  );
}
