import './App.css'
import ProductCard from './components/productCard.jsx'
import TrendingProducts from './components/trendingProducts.jsx'

function App() {

  return (
    <>
      <div className='w-[900px] h-[600px] border-[2px]'>

        <div className='w-[700px] h-[500px] bg-blue-400 flex flex-col items-center justify-center relative'>

          <div className='w-[50px] h-[50px] bg-red-600'></div>
          <div className='w-[50px] h-[50px] bg-yellow-600 fixed top-[4px]'></div>
          <div className='w-[50px] h-[50px] bg-green-600 absolute bottom-[5px]'></div>
          <div className='w-[50px] h-[50px] bg-purple-500'></div>
          <div className='w-[50px] h-[50px] bg-white'></div>

        </div>

      </div>
    </>
  )
}

export default App
