import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import AddCategory from './components/pages/Admin/AddCategory'
import AddProduct from './components/pages/Admin/AddProduct'
import AdminCategory from './components/pages/Admin/AdminCategory'
import AdminDashboard from './components/pages/Admin/AdminDashboard'
import AdminProducts from './components/pages/Admin/AdminProducts'
import AdminUsers from './components/pages/Admin/AdminUsers'
import UpdateCategory from './components/pages/Admin/UpdateCategory'
import UpdateProduct from './components/pages/Admin/UpdateProduct'
import Cart from './components/pages/Cart'
import Contact from './components/pages/Contact'
import EmailConfirmation from './components/pages/EmailConfirmation'
import FAQ from './components/pages/FAQ'
import ForgetPassword from './components/pages/ForgetPassword'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import ResetPassword from './components/pages/ResetPassword'
import Shipping from './components/pages/Shipping'
import ProductDetails from './components/ProductDetails'
import First from './First'
import Counter from './hooks/Counter'
import Data from './hooks/Data'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/redux/Main'
// import Chart2 from './practice/Chart'
import Second from './Second'
import AdminRoutes from './selectiveRoutes/AdminRoutes'
import PublicRoutes from './selectiveRoutes/PublicRoutes'

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/first' element={<First />} />
        <Route path='/second' element={<Second />} />

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />

        <Route path='/verifyEmail/:token' element={<EmailConfirmation />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/' element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/category' element={<AdminCategory />} />
          <Route path='/admin/category/add' element={<AddCategory />} />
          <Route path='/admin/category/update/:id' element={<UpdateCategory />} />

          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/product/add' element={<AddProduct />} />
          <Route path='/admin/product/update/:id' element={<UpdateProduct />} />

          <Route path='/admin/users' element={<AdminUsers />} />
        </Route>

        <Route path='/' element={<PublicRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/shipping' element = {<Shipping/>}/>

        </Route>

        {/* hooks */}
        <Route path='/counter' element={<Counter />} />
        <Route path='/info' element={<Data />} />
        <Route path='/data' element={<DataFetch />} />

        <Route path='/main' element={<Main />} />


        {/* practice */}
        {/* <Route path='/practice' element = {<Chart2/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Myroutes