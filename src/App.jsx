import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage.jsx'
import ProductCard from './components/productCard.jsx'
import TrendingProducts from './components/trendingProducts.jsx'
import AdminPage from './pages/adminPage.jsx'
import Test from './pages/test.jsx'
import LoginPage from './pages/loginPage.jsx'
import ResetPasswordPage from './pages/resetPassowrdPage.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <div className='w-full h-screen border-[2px] flex justify-center items-center bg-primary text-secondary'>
        <Toaster position='top-center'/>
        <Routes>
           
          <Route path='/' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
