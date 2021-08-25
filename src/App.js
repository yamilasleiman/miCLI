import './Styles/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
// import CartProvider, { CartContext } from './components/Contex';
// import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={ItemListContainer}/>
            <Route path='/Productos' exact component={ItemListContainer}/>
            
           {/*} <Route path={"/category/:id"} component={ItemListContainer} /> */}

            <Route path={'/ItemId/:ItemId'} exact component={ItemDetailContainer}/>
            {/*<Route path={'/Carrito'} exact component={Carrito}/>*/}
          </Switch>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
