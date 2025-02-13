import { useNavigate } from "react-router-dom";

export default function SearchedItem({ qno, qTitle, lang, difficulty, i }) {
  const color = {
    Easy: "text-[#04dc45]",
    Medium: "text-[#f7db50]",
    Hard: "text-[#f72c25]",
  };
  
  const navigate = useNavigate();
  const nav = () => navigate('/solution', { state: { qno, qTitle, lang, difficulty } });

  return (
    <div
      onClick={nav}
      className={`shadow-lg flex flex-col sm:flex-row w-full items-center 
        ${difficulty === "Easy" ? "bg-[#88fcab]" : difficulty === "Medium" ? "bg-[#fcf3c5]" : "bg-[#fcb3b0]"}
        justify-between p-4 cursor-pointer transition hover:scale-105`}      
    >
      <span className="text-black">{qno}</span>
      <span>.&nbsp;</span>
      <span className="flex-1 text-center sm:text-left">{qTitle}</span>
      <span className={`${color[difficulty]} bg-[#c0fdfb] rounded-md text-sm text-center justify-center font-medium w-[3.75rem] mr-2 transition hover:scale-110`}>{difficulty}</span>
      <div className="flex justify-center gap-2 flex-wrap sm:flex-nowrap">
        {lang.map((e, i) => (
          <span key={i} className="text-sm text-[#1c1c1c] bg-[#c0fdfb] px-2 py-1 rounded-md transition hover:scale-110 ">{e}</span>
        ))}
      </div>
    </div>
  );
}
