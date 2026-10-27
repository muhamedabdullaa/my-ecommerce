import react from 'react'
import { useCart } from '../CartPRovider/CartProvider'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartItems , removeFromCart} = useCart()

    const totalPrice = Array.isArray(cartItems)?cartItems.reduce((total , item)=> total + item.price * item.quantity,0):0
    if(!cartItems || cartItems.length===0){
        return (
            <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty 🛒</h2>
        <p className="text-gray-500 mb-8">You haven't added any products to your cart yet.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-indigo-600 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
        )
    }
    return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart 🛒</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* قائمة المنتجات المضافة */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain bg-gray-50 rounded-xl p-2" />
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-indigo-600 font-semibold mt-1">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-gray-600">Qty: {item.quantity}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ملخص الطلب (Total Summary) */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4 text-gray-600">
            <span>Total Price:</span>
            <span className="text-xl font-extrabold text-black">${totalPrice.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => alert("Order placed successfully! 🎉")}
            className="w-full py-4 bg-black text-white text-sm font-bold rounded-xl hover:bg-indigo-600 transition-colors cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );

}

export default Cart
