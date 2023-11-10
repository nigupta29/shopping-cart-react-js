import { ShopProvider } from './context/ShopContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'
import Container from './components/Container'

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <ShopProvider>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </ShopProvider>
      </BrowserRouter>
    </Container>
  )
}

export default App
