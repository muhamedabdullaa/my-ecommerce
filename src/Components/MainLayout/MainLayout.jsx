import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../CartPRovider/CartProvider'; // تأكد إن المسار مظبوط

export default function MainLayout() {
  // بنجيب الـ cartItems الحقيقية من الـ Context مباشرة من غير useState محلي
  const { cartItems } = useCart();

  // حساب إجمالي عدد القطع جوه السلة بأمان تام
  const totalItemsCount = Array.isArray(cartItems) 
    ? cartItems.reduce((total, item) => total + item.quantity, 0) 
    : 0;

  return (
    <div className="min-h-screen bg-white">
      
      <header className="bg-white shadow-sm py-4 px-6 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
            SHOP.CO Store
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Home
            </Link>

            <Link 
              to="/cart" 
              className="relative flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors text-sm font-bold text-black"
            >
              <span>Cart</span>
              <span className="bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            </Link>
          </nav>

        </div>
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}