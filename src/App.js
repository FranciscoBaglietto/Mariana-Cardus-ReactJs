import './App.css';
import NavBar from './components/NavBar/NavBar';
//ItemListCotainer contiene todos los productos en el Home '/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartProvider';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/contacto' element={<div>Contacto</div>} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/cart' element={<div>Cart</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>


  );
}

export default App;
