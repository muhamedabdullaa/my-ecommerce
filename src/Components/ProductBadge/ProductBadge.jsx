import React from 'react'

const ProductBadge = ({ text, type }) => {
  const bgColor = type === "sale" ? 'bg-red-500' : 'bg-emerald-500'
  
  return (
    <>
      <div>
        <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-white rounded-full ${bgColor}`}> 
          {text} 
        </span>
      </div>
    </>
  )
}

export default ProductBadge