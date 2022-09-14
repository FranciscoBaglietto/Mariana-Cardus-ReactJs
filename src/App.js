import './App.css';
import NavBar from './components/NavBar/NavBar';
//ItemListCotainer contiene todos los productos en el Home '/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<div>Contacto</div>} />
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        

      </Routes>

    </BrowserRouter>


  );
}

export default App;
