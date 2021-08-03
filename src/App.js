import './Styles/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemProduct from './components/ItemProduct';
import Carrito from './components/Carrito/Carrito';

function App() {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={ItemListContainer}/>
            <Route path='/Productos' exact component={ItemListContainer}/>
            <Route path={'/ItemId/:ItemId'} exact component={ItemProduct}/>
            <Route path={'/Carrito'} exact component={Carrito}/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
