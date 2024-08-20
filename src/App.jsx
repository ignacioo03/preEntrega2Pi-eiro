import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>

      <Navbar />

      <Routes>

      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/productos' element ={<ItemListContainer/>} />
      <Route path='/productos/:categoria' element={<ItemListContainer/>} />

      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
