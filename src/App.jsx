
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Aboutus from './pages/Aboutus/Aboutus'
import Blog from './pages/Blog/Blog'
import Contactus from './pages/Contactus/Contactus'
import Auth from './pages/Auth/Auth'
import { BuytbtProvider } from './hooks/Buyprovider'
function App() {


  return (
    <>
    <BuytbtProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </BuytbtProvider>
    </>
  )
}

export default App
