 
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from "./pages/Home"
import Product from './pages/Product'
import Recipe from './pages/Recipe'
import Store from './pages/Store'
import  {Routes,Route} from "react-router-dom"
function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/store" element={<Store  />} />
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
