import React from 'react'

const ProductImage = ({imageUrl,altName}) => {
  return (
    <div className='relative h-64 overflow-hidden bg-gray-100 rounded-t-xl'>
      <img src={imageUrl} alt={altName} className='object-contain w-full h-full transition-transform duration-300 hover:scale-105' />
    </div>
  )
}

export default ProductImage
