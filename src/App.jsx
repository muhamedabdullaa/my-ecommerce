import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductGrid from "./Components/ProductGrid/ProductGrid.jsx";
import MainLayout from "./Components/MainLayout/MAinLayout.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";

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
  {
    path:"*",
    element:<NotFound/>
  }
]
}])
function App() {
  return (
   <RouterProvider router={route} />
  );
}

export default App;