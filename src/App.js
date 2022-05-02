import React from 'react'
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Share File/Footer/Footer';
import Header from './components/Share File/Header/Header';
import NotFound from './components/Share File/NotFound/NotFound';
import Login from './components/LoginForm/Login';
import SignUp from './components/LoginForm/SignUp';
import Blogs from './components/Blogs/Blogs';
import Vaccine from './components/Vaccine/Vaccine';
import Inventory from './components/Vaccine/Inventory';
import ManageInventory from './components/Vaccine/ManageInventory'
import AddNewItem from './components/Vaccine/AddNewItem';
import ManageItem from './components/HeaderUserLogin/ManageItem';
import MyItem from './components/HeaderUserLogin/MyItem';






function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inventory' element={<Vaccine />} />
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>} />
        <Route path='/inventory/:id' element={<Inventory />} />
        <Route path='/manageitem' element={<ManageItem />} />
        <Route path='/myitem' element={<MyItem />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/addnewitem' element={<AddNewItem />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
