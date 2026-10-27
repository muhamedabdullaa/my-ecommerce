import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../CartPRovider/CartProvider'

const ProductDetails = () => {
    const {id} = useParams()
    const [product , setProduct] = useState(null)
    const [loading , setLoading] = useState(true)

    const {cartItems,AddToCart} = useCart()
useEffect(()=>{
    async function FetchProduct() {
        try{
            setLoading(true)
            const respnse = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(respnse.data)
            setLoading(false)
        }
        catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    }
    FetchProduct()
},[id])
if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600 underline">Return Home</Link>
      </div>
    );
  }
  return (
    
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <Link to="/" className="text-sm font-medium text-gray-500 hover:text-black mb-6 inline-block">Back To Products</Link>
     
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm '>
            <div className='bg-gray-50 rounded-xl p-6 flex items-center justify-center h-96'>
                <img src={product.thumbnail} alt={product.title} className='max-h-full object-contain' />
            </div>
            
            <div className='flex flex-col justify-between'>
                <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">{product.description}</p>
            
            <div className="mt-6 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-black">${product.price}</span>
              {product.discountPercentage && (
                <span className="px-2.5 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>
          </div>

          <button onClick={()=>{
            AddToCart(product); alert("Added To Cart Successfully")
          }} className="mt-8 w-full py-4 bg-black text-white text-sm font-bold rounded-xl hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
            Add to Cart 
          </button>
        </div>
            </div>

        </div>
      
  )
}

export default ProductDetails
