
const Categogy: React.FC = () => {
    return (
        <section className="mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow text-center">Điện thoại</div>
                <div className="bg-white p-4 rounded shadow text-center">Laptop</div>
                <div className="bg-white p-4 rounded shadow text-center">Tai nghe</div>
                <div className="bg-white p-4 rounded shadow text-center">Phụ kiện</div>
            </div>
      </section>
    );
}

export default Categogy;