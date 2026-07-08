import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage.jsx'
import ProductCard from './components/productCard.jsx'
import TrendingProducts from './components/trendingProducts.jsx'
import AdminPage from './pages/adminPage.jsx'

function App() {

  return (
    <>
      <div className='w-full h-screen border-[2px] felx justify-center items-center'>
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />

        </Routes>
      </div>
    </>
  )
}

export default App
