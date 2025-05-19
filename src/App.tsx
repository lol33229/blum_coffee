import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/shop'
import './style/index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
