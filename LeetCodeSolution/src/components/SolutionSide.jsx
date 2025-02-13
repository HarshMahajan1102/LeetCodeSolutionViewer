import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";

export default function SolutionSide({ solutions }) {
  const languages = Object.keys(solutions);
  let [selectedLang, setSelectedLang] = useState("plaintext");

  useEffect(() => {
    if (languages.length > 0) {
      setSelectedLang(languages[0]);
    }
  }, [solutions]);

  const lang = {
    "C++": "cpp",
    Java: "java",
    Python: "python",
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedLang, solutions]);

  return (
    <div
      className="w-full md:w-[65vw] h-auto md:h-[95vh] overflow-y-auto overflow-x-auto px-2 relative flex flex-col"
    >
      <div className="flex justify-end w-full p-2 absolute top-3 right-8">
        {languages.length > 0 && (
          <select
            className="bg-[#df2a4e] text-white px-2 py-1 text-xs rounded cursor-pointer"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        )}
      </div>

      <style>
        {`
          .token.keyword {
            color: #ff1493; 
            font-weight: bold;
          }
          .token.function {
            color: #ff6347;
          }
          .token.string {
            color: #7fff00; 
          }
          .token.comment {
            color: #808080; 
          }
          .token.number {
            color: #00ffff; 
          }
          .token.operator {
            color: #ffffff; 
          }
          .token.boolean {
            color: #ff1493; 
          }
        `}
      </style>

      <pre
  style={{
    backgroundColor: "#000",  
    color: "#e1e1e1",  
    fontFamily: "Fira Code, monospace", 
    fontSize: "14px",  
    padding: "16px",  
    borderRadius: "8px",  
    overflowX: "auto",  
    whiteSpace: "pre-wrap", 
  }}
  className="w-full md:w-[65vw] m-0 text-start break-words flex-1 border-2 border-[#e6fafc] rounded-lg"
>
  <code className={`language-${lang[selectedLang] || "plaintext"} block`}>
    {solutions[selectedLang] || "No solution available"}
  </code>
</pre>
    </div>
  );
}
