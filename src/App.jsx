
import { GoogleOAuthProvider } from "@react-oauth/google";
import MycontextProvider from '../Contextprovider';
import './App.css'
import Hero from './frontChat/Hero'
import AuthPage from './frontChat/Auth';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const client_Id = import.meta.env.VITE_CLIENT_ID;
import College from './frontChat/College';
import Userform from './frontChat/UserForm';
import ValidationForm from './frontChat/Admin';
import ValidationFormtudent from './frontChat/Student';
function App() {




  return (
    <GoogleOAuthProvider  clientId={client_Id} >
    <MycontextProvider>
      <BrowserRouter>
    <Routes>
       
           <Route path='/home' element={<Userform/>} />
        <Route path='/clg' element={<College/>} />
      <Route path='/' element={<Hero/>} />
              <Route path='/admin' element={<ValidationForm/>} />
               <Route path='/student' element={<ValidationFormtudent/>} />
          <Route path='/auth' element={<AuthPage/>} />
          
         
           
               
   
        <Route path='/ai/:data' element={<Hero/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
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
