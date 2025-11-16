import React from 'react';
import PromoBanner from '../common/PromoBanner';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow px-5">
        <section className="my-8 relative">
            <div className="relative w-full">
                <PromoBanner />
            </div>
        </section>

      {/* Danh mục sản phẩm */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Danh mục nổi bật</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">Điện thoại</div>
          <div className="bg-white p-4 rounded shadow text-center">Laptop</div>
          <div className="bg-white p-4 rounded shadow text-center">Tai nghe</div>
          <div className="bg-white p-4 rounded shadow text-center">Phụ kiện</div>
        </div>
      </section>

      {/* Sản phẩm */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Sản phẩm mới</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 mb-2 rounded" />
              <h3 className="font-medium">Sản phẩm {id}</h3>
              <p className="text-green-600 font-semibold">₫{id * 100000}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    );
};

export default MainContent;