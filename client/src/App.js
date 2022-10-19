import './App.css';
import { Switch, Route } from 'react-router-dom';
import OrderName from './components/OrderName/OrderName';
import SearchBar from './components/SearchBar/SearchBar';
import Videogames from './components/Videogames/Videogames';
import OrderRating from './components/OrderRating/OrderRating';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <LandingPage/>
      <SearchBar/>
      <OrderName/>
      <OrderRating/>
      <Videogames/>
    </div>
  );
}

export default App;
