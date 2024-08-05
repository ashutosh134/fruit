import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Navbar from './componenets/Navbar'
import Home from './pages/Home'
import FooterOne from './pages/FooterOne'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Fruit from './pages/Fruit'
import Vegetables from './pages/Vegetables'
import Dairy from './pages/Dairy'
import AddCart from './pages/AddCart'
import Privacy from './pages/Privacy';
import TermsAnd from './pages/TermsAnd';
import WishList from './pages/WishList';
import Buy from './pages/Buy';
import Cooking from './pages/Cooking';
import { Toaster , ToastBar } from 'react-hot-toast';


const App = () => {
  return (

   
    <Router>
      {/* <ToastContainer/> */}
      <Toaster/>
  
   <Navbar/>
   
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/product' element={<Product/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
  
   <Route path='/fruit' element={<Fruit/>}/>
   <Route path='/vegetables' element={<Vegetables/>}/>
   <Route path='/dairy' element={<Dairy/>}/>
   <Route path='/cart' element={<AddCart/>}/>
   <Route path='/privacy' element={<Privacy/>}/>
   <Route path='/terms' element={<TermsAnd/>}/>
   <Route path='/wish' element={<WishList/>}/>
   <Route path='/buy' element={<Buy/>}/>
   <Route path='/cooking' element={<Cooking/>}/>

   

   </Routes>

   <FooterOne/>
  
  
     

    </Router>
  )
}

export default App
