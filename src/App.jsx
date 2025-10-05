
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

let router = createBrowserRouter(createRoutesFromChildren(
<>
 <Route  element ={<Layout/>}>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/product" element={<Shop/>}></Route>
  <Route path="/product/:id" element={<ProductDetails/>}></Route>
  <Route path="/about" element={<About/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route> 
    <Route path="/checkout" element={<Checkout/>}></Route>
     <Route path="/registration" element={<Registration/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
      

 </Route>
  <Route path="*" element={<Error/>}></Route>
</>

))


function App() {
 

  return (
    <>
     
    <RouterProvider router={router}></RouterProvider>
     
      
    </>
  )

}

export default App
