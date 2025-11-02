import React from 'react'
import { ShoppingCart, User } from 'lucide-react'
import SearchBar from '../common/SearchBar'

const Header : React.FC = () => {
  return (
    <header className='w-full bg-gray-900 text-white shadow-md'>
      {/* Top bar */}
      <div className='flex items-center justify-between px-6 py-3'>
        {/* Logo */}
        <div className='text-2xl font-bold text-green-400 cursor-pointer'>MyApp</div>
        {/* Search bar */}
        <SearchBar />
        {/* User + Cart */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center hover:text-green-400">
            <User className="mr-2" /> <span className="hidden sm:inline">Tài khoản</span>
          </button>
          <button className="relative hover:text-green-400">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              3
            </span>
          </button>
        </div>
      </div>
      {/* Category bar */}
      <nav className="bg-gray-900 text-sm overflow-x-auto">
        <ul className="flex items-center justify-center space-x-6 sm:space-x-8 py-2 whitespace-nowrap px-4">
          <li className="hover:text-green-400 cursor-pointer">Trang chủ</li>
          <li className="hover:text-green-400 cursor-pointer">Sản phẩm</li>
          <li className="hover:text-green-400 cursor-pointer">Khuyến mãi</li>
          <li className="hover:text-green-400 cursor-pointer">Liên hệ</li>
          <li className="hover:text-green-400 cursor-pointer">Hỗ trợ</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
