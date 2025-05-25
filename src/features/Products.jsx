import { useNavigate } from "react-router-dom";
import products from "../items/Treasure";

const Products = () => {
  const navigate = useNavigate();

  const handleProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="flex flex-grow flex-col items-center space-y-8 py-8 px-4 text-black bg-gray-300 ">
      <h1 className="text-black font-bold mb-6 mt-6 text-4xl">OUR PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col px-4 py-4 gap-2 bg-white rounded shadow"
          >
            <div className="flex-1">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover object-center w-full "
              />
            </div>
            <p className="font-bold">
              {item.name} <span className=" ml-4 italic">${item.price}</span>
            </p>
            <button
              onClick={() => handleProduct(item.id)}
              className="py-2 px-4 bg-black text-white rounded-full hover:scale-105 transition duration-200"
            >
              Show More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
