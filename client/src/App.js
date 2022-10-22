import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/> 
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={CreateVideogame}/>
        <Route exact path='/videogames/:id' component={VideogameDetail}/>
        <Route exact path='*/*' />     
      </Switch>
    </div>
  );
}

export default App;
