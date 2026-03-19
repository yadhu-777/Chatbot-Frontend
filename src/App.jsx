
import { GoogleOAuthProvider } from "@react-oauth/google";
import MycontextProvider from '../Contextprovider';
import './App.css'
import Hero from './frontChat/Hero'
import AuthPage from './frontChat/Auth';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import News from "./frontChat/News";
const client_Id = import.meta.env.VITE_CLIENT_ID;
import College from './frontChat/College';
import Userform from './frontChat/UserForm';
import ValidationForm from './frontChat/Admin';
import ValidationFormtudent from './frontChat/Student';
import ProtectedRoute from "../ProtectRoute";
import College2 from "./frontChat/College2";
function App() {




  return (
    <GoogleOAuthProvider  clientId={client_Id} >
    <MycontextProvider>
      <BrowserRouter>
    <Routes>
           <Route path="/fresher" element={<College2 />} />
      <Route path="/news" element={<News />} />
          <Route path="/home" element={<Userform />} />
              <Route path='/admin' element={<ValidationForm/>} />
               <Route path='/student' element={<ValidationFormtudent/>} />
           <Route path='/auth' element={<AuthPage/>} />
          
        <Route element={<ProtectedRoute />}>
        
           
            <Route path="/clg" element={<College />} />
          </Route>
         
         
          
         
           
               
   
  
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
