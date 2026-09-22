import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Checkout from "./component/Checkout"
import { useEffect, useState } from 'react'
import NotFound from "./component/NotFound"
import Layout from "./component/Layout"
import ProductDetails from "./component/ProductDetails"

function App() {

  
   const [cart,setCart] = useState(
      JSON.parse(localStorage.getItem("cart"))||[]
  )
    
  
    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
  
  return (

   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home cart={cart} setCart={setCart} />} />
     <Route path="checkout" element={<Checkout cart={cart} setCart={setCart} />} />
     <Route path="products/:id" element={<ProductDetails />} />
     </Route>
     <Route path="*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
    
   </>
  )
}

export default App 