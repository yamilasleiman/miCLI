import './Styles/App.scss';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

import ItemList from './components/ItemListContainer/ItemList';


function App() {
  const miNombre = "Yamila";
  return (
    <div className='container'>
      <NavBar name={miNombre} />
      <CartWidget />
      
      <ItemList />
    </div>
  );
}

export default App;
