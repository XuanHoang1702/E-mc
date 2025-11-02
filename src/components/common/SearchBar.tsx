import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
  className={`flex items-center justify-center sm:justify-start bg-white rounded-full overflow-hidden transition-all duration-300 ${
    isOpen ? "w-full" : "w-10 sm:w-1/2"
  } h-10`}
>
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm..."
    className={`flex-1 px-3 py-2 text-gray-800 outline-none text-sm ${
      isOpen ? "block" : "hidden sm:block"
    }`}
  />
  <button
    className="flex items-center justify-center px-3 py-2"
    onClick={() => setIsOpen(!isOpen)}
  >
    <Search size={20} className="text-black" />
  </button>
</div>

  );
};

export default SearchBar;
