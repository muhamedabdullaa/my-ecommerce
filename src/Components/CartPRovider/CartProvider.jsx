import React, { createContext, useContext, useState } from 'react'
const CartContext = createContext();
const CartProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([])
  const clearCart = () => {
  setCartItems([]);
};
  const AddToCart = (product)=>{
    setCartItems((prevItems)=>{
      const existingItem = prevItems.find((item) => item.id === product.id );
      if(existingItem){
        return prevItems.map((item)=>
          item.id === product.id ?{...item , quantity:item.quantity + 1} : item
        )
      }
      else {
        return [...prevItems ,{...product , quantity : 1}]
      }
    })
  }
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
        
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
  <CartContext.Provider value={{cartItems,AddToCart,removeFromCart ,updateQuantity , clearCart}}>
    {children}
  </CartContext.Provider>
  )
}
export function useCart() {
  return useContext(CartContext);
}
export default CartProvider
