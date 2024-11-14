import './App.css'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Checkout from './components/checkout/Checkout'
import AllPlants from './components/plants/AllPlants'
import CartContextProvider from './context/CartContext'
import CareGuides from './components/guides/CareGuides'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import ErrorComponent from './components/error/ErrorComponent'

import PlantDetailContainer from './components/plants/PlantDetailContainer'
import Cancel from './components/payments/Cancel'
import Success from './components/payments/Success'

function App () {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/cancel' element={<Cancel/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />          
          <Route path='/All' element={<AllPlants />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/error' element={<ErrorComponent />} />
          <Route path='/care-guides' element={<CareGuides />} />
          <Route path='/:plantId' element={<PlantDetailContainer />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App
