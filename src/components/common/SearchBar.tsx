import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setLkeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLkeyword(e.target.value);
  };

  const handleButtonClick = () => {
    if (!isOpen && keyword.trim() === "") {
      setIsOpen(true);
      return;
    }
    if (keyword.trim() === "") {
      return;
    }
  }

  return (
    <div
      className={`flex items-center justify-center sm:justify-start bg-white rounded-full overflow-hidden transition-all duration-300 ${
        isOpen ? "w-full" : "w-10 sm:w-1/2"
      } h-10`}
    >
    <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      placeholder="Find product..."
      className={`flex-1 px-3 py-2 text-gray-800 outline-none text-sm ${
        isOpen ? "block" : "hidden sm:block"
      }`}
    />
    <button
      className="flex items-center justify-center px-3 py-2"
      onClick={handleButtonClick}
    >
      <Search size={20} className="text-black" />
    </button>
</div>

  );
};

export default SearchBar;
