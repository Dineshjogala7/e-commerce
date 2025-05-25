// Fixed ProductData Component
import { Navigate, useNavigate, useParams } from "react-router-dom";
import products from "./Treasure";
import { Heart, Star, Truck, Shield, RotateCcw, Award } from "lucide-react";
import { addCart, delCart } from "../store/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const ProductData = () => {
  const { id } = useParams();
  const cartArray = useSelector((state) => state.cart.CartData); // Fixed: Added .CartData
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const data = products.find((dt) => String(dt.id) === id);
  const [found, setFound] = useState(false);
  const Navigate=useNavigate()
  useEffect(() => {
    // Fixed: Check if item exists in cart
    const index = cartArray.find((dt) => String(dt.id) === String(id));
    if (index) { // Fixed: Changed from index != -1 to if(index)
      setFound(true);
    } else {
      setFound(false);
    }
  }, [cartArray, id]); // Fixed: Added proper dependencies

  if (!data) {
    return <p className="text-center text-red-500 font-bold">Product not found!</p>;
  }

  const handleCart = () => {
    if (found) {
      dispatch(delCart({ id }));
      setFound(false);
    } else {
      dispatch(addCart({ 
        id: id, 
        image: data.image, 
        price: data.price, 
        quantity: qty, // Fixed: Use actual quantity
        total: data.price * qty // Fixed: Calculate total properly
      }));
      setFound(true);
    }
  };

  const handleCartDecrease = (e) => {
    e.preventDefault();
    setQty((prev) => Math.max(prev - 1, 1)); // Fixed: Minimum should be 1, not 0
  };

  const handleCartIncrease = (e) => { // Fixed: Added missing parameter
    e.preventDefault();
    setQty((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col w-full flex-grow py-8 px-4 bg-gray-50">
      {/* Product image and data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="relative h-[300px] sm:h-[400px] md:h-[60vh] w-full group overflow-hidden"> {/* Fixed: overflow typo */}
          <img
            src={data.image}
            alt={data.name}
            className="object-cover object-center w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-300" // Fixed: Added transition
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          <p className="absolute top-4 left-4 bg-red-500 rounded-full px-3 py-1 text-white text-sm font-bold">
            12% OFF
          </p>
          <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(245 reviews)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-green-600">{data.price}</span>
                <span className="text-lg text-gray-500 line-through">$299.99</span>
              </div>
              <p className="text-sm text-green-600 font-medium">Save $30 today!</p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <p className="text-gray-700 leading-relaxed">
                Premium quality product with exceptional durability and modern design. 
                Perfect for everyday use with advanced features that meet all your needs. 
                Backed by our satisfaction guarantee and excellent customer service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600">Color</p>
                <p className="font-bold">Black</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600">Size</p>
                <p className="font-bold">Medium</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button className="px-3 py-1 hover:bg-gray-100" onClick={handleCartDecrease}>-</button>
                  <span className="px-4 py-1 border-x">{qty}</span>
                  <button className="px-3 py-1 hover:bg-gray-100" onClick={handleCartIncrease}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex gap-3">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium flex-1 hover:bg-gray-800 transition-colors" onClick={handleCart}>
                {found ? "REMOVE FROM CART" : "ADD TO CART"}
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
            </div>
            
            <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-colors">
              BUY NOW - EXPRESS CHECKOUT
            </button>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-1 text-green-600" />
                <p className="text-xs text-gray-600">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-1 text-purple-600" />
                <p className="text-xs text-gray-600">2-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-500" />
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Premium materials with superior craftsmanship</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Advanced technology integration for modern users</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Ergonomic design for comfort and usability</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Eco-friendly and sustainable manufacturing</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Tested for durability and long-lasting performance</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Compatible with various accessories and add-ons</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-8 text-4xl md:text-6xl font-bold text-gray-800 mb-8">
        SIMILAR PRODUCTS
      </h1>
      
      {/* Related products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden group">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover object-center w-full h-48 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 flex flex-col gap-3 flex-grow">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="font-bold text-gray-800">{item.name}</p>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
              <button className="mt-auto py-2 px-4 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-200" onClick={()=>Navigate(`/products/${item.id}`)}>
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;