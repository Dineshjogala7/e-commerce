import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart, decreaseCart, increaseCart } from "../store/CartSlice";

const Cart = () => {
  const CartData = useSelector((state) => state.cart.CartData); // Fixed: lowercase 'cart'
  const money = CartData.reduce((prev, curr) => prev + curr.item.total, 0); // Fixed: Access curr.item.total
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col flex-grow min-h-screen w-full p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">YOUR CART</h1>
        
        {CartData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {CartData.map((cartItem) => (
                <div key={cartItem.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-32 h-32 flex-shrink-0">
                      <img 
                        src={cartItem.item.image} 
                        alt="item" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div>
                          <p className="text-lg font-semibold text-gray-800">{cartItem.item.name}</p>
                          <p className="text-xl font-bold text-green-600">${cartItem.item.total}</p>
                        </div>
                        
                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                          <div className="flex items-center border rounded-lg">
                            <button 
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              onClick={() => dispatch(decreaseCart({id: cartItem.id}))} // Fixed: Use decreaseCart
                            >
                              -
                            </button>
                            <span className="px-4 py-1 border-x">{cartItem.item.quantity}</span> {/* Fixed: Use item.quantity */}
                            <button 
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              onClick={() => dispatch(increaseCart({id: cartItem.id}))} // Fixed: Use increaseCart
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                            onClick={() => dispatch(delCart({id: cartItem.id}))} // Fixed: Arrow function syntax
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-2xl font-bold text-gray-800">
                  Total: ${money.toFixed(2)} {/* Fixed: Format money display */}
                </div>
                <button 
                  disabled={!money}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  PROCEED TO PAY {money ? `$${money.toFixed(2)}` : ""} {/* Fixed: Better conditional rendering */}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;