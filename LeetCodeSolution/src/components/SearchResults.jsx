import SearchedItem from "./SearchedItem";

export default function SearchResults({ query, questions }) {
  console.log(questions)
  let filtered = query === "" ? questions : questions.filter(
    (question) =>
      question.questionNumber.includes(query) ||
      question.questionTitle.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <div className="text-lg font-bold text-red-600 pt-5 text-center justify-center h-full bg-[1c1c1c]">
        No such question exists
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-0 md:w-[80vw]">
      {filtered.map((e, i) => (
        <SearchedItem
          key={e.questionNumber}
          qno={e.questionNumber}
          qTitle={e.questionTitle}
          lang={e.solutionLanguages}
          difficulty={e.difficulty}
          i={i}
        />
      ))}
    </div>
  );
};
