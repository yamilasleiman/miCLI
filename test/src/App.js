import './Styles/App.scss';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ContentBuy from './components/ContentBuy';


function App() {
  const miNombre = "Yamila";
  return (
    <div className='container'>
      <NavBar name={miNombre} />
      <CartWidget />
      <ContentBuy name={miNombre}/>
    </div>
  );
}

export default App;
