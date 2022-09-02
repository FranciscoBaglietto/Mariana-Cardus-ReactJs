import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const stock = 10;

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer greeting='Bienvenidos a Mariana Cardús' />
      </body>

    </div>
  );
}

export default App;
