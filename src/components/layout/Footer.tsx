import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Cột 1: Logo + mô tả */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">E-Shop</h2>
          <p className="text-sm leading-relaxed">
            E-Shop mang đến trải nghiệm mua sắm trực tuyến tiện lợi, nhanh chóng và an toàn.  
            Chúng tôi luôn cam kết chất lượng và dịch vụ tốt nhất cho khách hàng.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Trang chủ</li>
            <li className="hover:text-green-400 cursor-pointer">Sản phẩm</li>
            <li className="hover:text-green-400 cursor-pointer">Khuyến mãi</li>
            <li className="hover:text-green-400 cursor-pointer">Liên hệ</li>
            <li className="hover:text-green-400 cursor-pointer">Hỗ trợ</li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Hỗ trợ khách hàng</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Chính sách bảo hành</li>
            <li className="hover:text-green-400 cursor-pointer">Chính sách đổi trả</li>
            <li className="hover:text-green-400 cursor-pointer">Phương thức thanh toán</li>
            <li className="hover:text-green-400 cursor-pointer">Vận chuyển & giao hàng</li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@eshop.com
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <Facebook className="hover:text-green-400 cursor-pointer" size={20} />
            <Instagram className="hover:text-green-400 cursor-pointer" size={20} />
            <Youtube className="hover:text-green-400 cursor-pointer" size={20} />
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-700 mt-10 pt-4">
        © {new Date().getFullYear()} E-Shop. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
