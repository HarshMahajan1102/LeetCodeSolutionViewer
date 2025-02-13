import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import searchIcon from "../assets/search.png";

export default function SearchBar({ query, setQuery }) {
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
    }
  };

  return (
    <div className="w-[90vw] mt-5">
      <div className="relative flex items-center">
        <div
          className="relative w-1/2 mt-20 ml-[250px]"
          style={{ zIndex: 10, pointerEvents: "auto" }}
        >
          
          <img
            src={searchIcon}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            style={{ pointerEvents: "none" }} 
          />
          {/* Input Field */}
          <input
            className={`w-full placeholder:text-slate-400 text-slate-700 text-sm ${styles["text-sm-modified"]} border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-10 mt-[0px]`}
            placeholder="Enter the question name or question number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            style={{ pointerEvents: "auto", zIndex: 10 }} 
          />
        </div>

        <button
          className={styles["searchBtn"]}
          onClick={() => navigate("/search")}
          style={{ zIndex: 10 }}
        ></button>
      </div>
    </div>
  );
}
