import './App.css';
import { Switch, Route } from 'react-router-dom';
import OrderName from './components/OrderName/OrderName';
import SearchBar from './components/SearchBar/SearchBar';
import Videogames from './components/Videogames/Videogames';
import OrderRating from './components/OrderRating/OrderRating';
import LandingPage from './components/LandingPage/LandingPage';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';


function App() {
  return (
    <div className="App">
      {/* <VideogameDetail/>
      <LandingPage/>
      <SearchBar/>
      <OrderName/>
      <OrderRating/>
      <Videogames/> */}
      <Switch>
        <Route exact path='/' component={LandingPage}/> 
        <Route exact path='/home' component={Videogames}/>
        <Route exact path='/create' component={CreateVideogame}/>
        <Route exact path='/videogames/:id' component={VideogameDetail}/>
        <Route exact path='*/*' />     
      </Switch>
    </div>
  );
}

export default App;
