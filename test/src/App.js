import './Styles/App.scss';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import L from './components/ItemCount/ItemCountHooks';
import ItemList from './components/ItemListContainer/ItemList';


function App() {
  const miNombre = "Yamila";
  return (
    <div className='container'>
      <NavBar name={miNombre} />
      <CartWidget />
      <L/>
      <ItemList />
    </div>
  );
}

export default App;
