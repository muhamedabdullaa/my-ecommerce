import ProductBadge from "./Components/ProductBadge/ProductBadge.jsx";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold text-gray-800">تجربة مكونات المتجر (Shop.co)</h1>
      
      {/* هنا بنعمل ريندر للـ Sub-component بتاعنا ونبعتله الـ props */}
      <div className="relative w-64 h-32 bg-white rounded-xl shadow-md p-4">
        <ProductBadge text="20% OFF" type="sale" />
        <p className="mt-8 text-gray-600">هنا مكان كارت المنتج...</p>
      </div>
    </div>
  );
}

export default App;