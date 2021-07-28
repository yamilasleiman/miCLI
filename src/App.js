import './Styles/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import Item from './components/ItemProduct';

function App() {
  const miNombre = "Yamila";
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar name={miNombre}/>
        <Switch>
          <Route path='/' exact component={ItemList}/>
          <Route path={'/ItemId/:ItemId'} exact component={Item}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
