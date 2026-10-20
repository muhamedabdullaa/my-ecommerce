import React from 'react'

const ProductPrice = ({price , originalPrice}) => {
  return (
    <div className='flex items-center gap-2 mt-2'>
      <span className='text-lg font-bold text-black'>{price}</span>

      {originalPrice && (
        <span className="text-sm text-gray-400 line-through">
          {originalPrice}
        </span>
      )}

    </div>
  )
}

export default ProductPrice
