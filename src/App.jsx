import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage.jsx'
import AdminPage from './pages/adminPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import { Toaster } from 'react-hot-toast'
import TestPage from './pages/test.jsx'
import RegisterPage from './pages/registerPage.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPasswordPage from './pages/forgetPasswordPage.jsx'

function App() {

  return (
    <GoogleOAuthProvider clientId='839902771098-u340dn2c6s3enjk5bjknldkilf55ggu0.apps.googleusercontent.com'>
      <div className='w-full h-screen border-[2px] flex justify-center items-center bg-primary text-secondary'>
        <Toaster position='top-left'/>
        <Routes>
           
          <Route path='/*' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forget-password' element={<ForgetPasswordPage/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
      </GoogleOAuthProvider>
  )
}

export default App