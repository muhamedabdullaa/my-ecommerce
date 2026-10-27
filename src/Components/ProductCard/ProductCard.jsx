import React from 'react'
import ProductBadge from '../ProductBadge/ProductBadge'
import ProductImage from './../ProductImage/ProductImage';
import ProductPrice from '../ProductPrice/ProductPrice';
import { Link } from 'react-router-dom';
import { useCart } from '../CartPRovider/CartProvider';

const ProductCard = ({product}) => {
 
  const {AddToCart} = useCart()
  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    AddToCart(product); 
    alert("Added To Cart Successfully 🛒"); 
  };
  return (
   <Link to={`/product/${product.id}`}> 

    <div className="relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden">
      {product.discount && (
        <ProductBadge text={product.discount} type="sale" />
      )}
      <ProductImage imageUrl={product.thumbnail} altName={product.title} />
      <div className='p-4 flex flex-col justify-between'>
        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-1">
            {product.title}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
        
          <ProductPrice price={product.price} originalPrice={product.originalPrice} />
          
          <button onClick={handleAddToCart} className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg  cursor-pointer transition-transform duration-300 hover:scale-103">
            Add to Cart         
          </button>
        </div>
      </div>

    </div>
    </Link>
  )
}

export default ProductCard
