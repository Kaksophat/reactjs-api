import './App.css'
import Cart from './components/Carts/Cart'
import Displayproduct from './components/Displayproduct/Displayproduct'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Product from './components/product/Product'
import Home from './page/Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productid' element={<Displayproduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
