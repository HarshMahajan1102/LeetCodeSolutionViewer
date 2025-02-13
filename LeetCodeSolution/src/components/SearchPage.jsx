import HomeButton from "./HomeButton";
import SearchResults from "./SearchResults";

export default function SearchPage({query,setQuery,questions}){
  return(<div className="flex flex-col items-center gap-10 bg-[#edf6f9]">
 <div className="w-full flex justify-center items-center align-middle bg-[#c0fdfb] h-8 pb-6">
                <HomeButton className=""/>
            </div>
  <SearchResults query={query} questions={questions}/>
  </div>)
};