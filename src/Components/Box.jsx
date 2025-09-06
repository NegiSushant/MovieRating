import { useState } from "react";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className="w-full md:w-[42rem] bg-gray-800 rounded-lg overflow-hidden relative shadow-lg flex flex-col 
                    h-fit md:h-full"
    >
      <button
        className="absolute top-2 right-2 h-6 w-6 rounded-full border-none bg-gray-700 text-white text-xs font-bold cursor-pointer z-50 hover:bg-gray-600 transition-colors"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "−" : "+"}
      </button>
      {isOpen && <div className="flex-1 overflow-y-auto p-4">{children}</div>}
    </div>
  );
}