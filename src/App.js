import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Umare Crianza"/>
        <Products/>
      </header>
    </div>
  );
}

export default App;