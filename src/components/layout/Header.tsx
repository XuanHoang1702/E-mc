import React from 'react'
import { ShoppingCart, User, Search } from 'lucide-react'
import SearchBar from '../common/SearchBar'
import dataMenus from '../../mocks/Menus'

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 
      bg-black/30 backdrop-blur-xl border-b border-white/10 text-white">

      <div className="flex items-center px-4 sm:px-6 py-3 w-full">

        {/* Logo */}
        <div className="text-2xl font-bold text-green-400 cursor-pointer flex-shrink-0 mr-8">
          MyApp
        </div>

        <div className="flex-1 flex justify-center ml-20">
          <ul className="
            flex items-center 
            space-x-6 md:space-x-12 
            text-base md:text-lg font-medium 
            whitespace-nowrap
          ">
            {dataMenus.map((item, index) => (
              <li
                key={index}
                className="hover:text-green-400 transition cursor-pointer select-none my-2"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Search + User + Cart */}
        <div className="flex items-center space-x-5 flex-shrink-0 ml-8">

          {/* Icon search riêng */}
          <button className="hover:text-green-400 transition">
            <Search size={22} />
          </button>

          {/* SearchBar */}
          <div className="min-w-[180px] hidden md:block">
            <SearchBar />
          </div>

          {/* User */}
          <button className="hover:text-green-400 transition flex items-center">
            <User size={22} />
            <span className="hidden sm:inline ml-1 text-sm">Login</span>
          </button>

          {/* Cart */}
          <button className="relative hover:text-green-400 transition">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
