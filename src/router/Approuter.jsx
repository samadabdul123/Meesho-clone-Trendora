import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Seller from '../pages/Seller'
import SellerRegister from "../pages/SellerRegister";
import Login from '../pages/Login'
import Register from '../pages/Register'
import OrderSuccess from '../pages/OrderSuccess'

const Approuter = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='products' element={<Products/>}/>
         <Route path='product/:id' element={<ProductDetails/>}/>
         <Route path='cart' element={<Cart/>}/>
         <Route path='seller' element={<Seller/>}/>
         <Route path="seller-register" element={<SellerRegister />} />
         <Route path='login' element={<Login/>}/>
         <Route path="register" element={<Register />} />
         <Route path="order-success" element={<OrderSuccess />} />

         <Route path='contact' element={<Contact/>}/>
         <Route path='*' element={<NotFound/>}/>
        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default Approuter
