import { useState } from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import MycontextProvider from '../Contextprovider';
import './App.css'
import Hero from './frontChat/Hero'
import AuthPage from './frontChat/Auth';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
const client_Id = import.meta.env.VITE_CLIENT_ID;
function App() {




  return (
    <GoogleOAuthProvider  clientId={client_Id} >
    <MycontextProvider>
      <BrowserRouter>
    <Routes>
          <Route path='/auth' element={<AuthPage/>} />
      <Route path='/' element={<Hero/>} />
        <Route path='/:data' element={<Hero/>} />
    </Routes>
     </BrowserRouter>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
/>
    </MycontextProvider>
  </GoogleOAuthProvider>
  )
}

export default App
