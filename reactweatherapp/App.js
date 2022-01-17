import './App.css';
import Header from "./components/Header.js";
import Location from './components/Location';
import WeatherCards from "./components/weather-cards.js";
import CardDetails from "./components/card-details.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Location/>
      <WeatherCards/>
    </div>
  );
}

export default App;
