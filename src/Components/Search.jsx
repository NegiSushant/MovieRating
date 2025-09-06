import { useRef } from "react";
import { useKey } from "../CustomHooks/useKey";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="w-full max-w-[30rem] md:max-w-[40rem] border-none px-4 py-2 sm:py-2.5 text-base sm:text-lg rounded-lg transition-all duration-300 bg-purple-500 text-purple-100 placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:shadow-lg"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
