import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductGrid from "./Components/ProductGrid/ProductGrid.jsx";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import CartProvider from "./Components/CartPRovider/CartProvider.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

const route = createBrowserRouter([{
  path:"/",
  element:<MainLayout/>,
  children:[{
    index:true,
    element:<ProductGrid/>
  },
  {
    path:"products",
    element:<ProductGrid/>
  },
  { path: 'product/:id',
     element: <ProductDetails /> },
  { path: 'cart', element: <Cart /> },
  {
  path: "/checkout",
  element: <Checkout />
},
  {
    path:"*",
    element:<NotFound/>
  }
]
}])
function App() {
  return (
    <CartProvider>
      <RouterProvider router={route} />
   </CartProvider >
  );
}

export default App;