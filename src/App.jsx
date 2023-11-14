import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { ShopProvider } from './context/ShopContext'
import Container from './layouts/Container'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <ShopProvider>
        <div className="flex flex-col justify-between min-h-screen">
          <Container>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </ShopProvider>
    </BrowserRouter>
  )
}

export default App
