const Products: React.FC = () => {
  return (
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
  )
};
export default Products;