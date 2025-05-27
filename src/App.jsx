import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import ScrollToTop from './Components/ScrollToTop'
function App() {

  return (
    <>
      <Router>

        <ScrollToTop>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        </ScrollToTop>

      </Router>
    </>
  )
}

export default App
