import './App.css'
import ProductCard from './components/productCard.jsx'

function App() {

  return (
    <>
      <ProductCard name="Apple iPhone" image="https://picsum.photos/id/3/200/300" price="Rs.150, 000/-"/>
      <ProductCard name="Samsung Galaxy" image="https://picsum.photos/id/4/200/300" price="Rs.120, 000/-"/>
      <ProductCard name="OnePlus" image="https://picsum.photos/id/5/200/300" price="Rs.100, 000/-"/>
      <ProductCard name="Macbook Air" image="https://picsum.photos/id/6/200/300" price="Rs.200, 000/-"/>
    </>
  )
}

export default App
