import './Styles/App.scss';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ContentBuy from './components/ItemListContainer';
import ItemCountHooks from './components/ItemCount/ItemCountHooks';


function App() {
  const miNombre = "Yamila";
  return (
    <div className='container'>
      <NavBar name={miNombre} />
      <CartWidget />
      <ContentBuy name={miNombre}/>
      <ItemCountHooks/>
    </div>
  );
}

export default App;
