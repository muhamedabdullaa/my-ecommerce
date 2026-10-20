import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. الـ Navbar الأساسية الثابتة في كل الصفحات */}
      <header className="bg-white shadow-sm py-4 px-6 text-center border-b border-gray-100">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">SHOP.CO Store</h1>
      </header>

      <main>
        <Outlet />
      </main>

     
    </div>
  );
}