
import { useEffect, useState } from 'react';
import ProductCard from './../ProductCard/ProductCard';
import axios from 'axios';

export default function ProductGrid() {
  const [products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  const [limit, setLimit] = useState(12);

useEffect(()=>{
    async function fetchProducts() {
    try {
          const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`)
          setProducts(response.data.products)
          setLoading(false)

    } catch (error) {
        console.log("Error Fetching Data :" ,error)
        setLoading(false)

    }  
    }

   fetchProducts()
},[limit])

if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide transition-transform duration-300 hover:scale-105 origin-left">
        NEW ARRIVALS
      </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {products.map((product)=>{
               return <ProductCard key={product.id} product={product}/>
            })}
            
        </div>
        <div className="mt-10 flex justify-center">
            <button
              onClick={() => setLimit((prev) => prev + 8)} // بيزود 8 منتجات في كل ضغطة
              className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              View All 
            </button>
          </div>
    </div>
  );
}