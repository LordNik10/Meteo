import './App.css';
import Ricerca from "./ricerca";
import Citta from "./citta";
import meteo from './meteo';




function App() {
  return (
    <div id='main'>
      <div id='maintit'>
        <h1>now meteo</h1>
      </div>
      <Ricerca/>
    </div>
  );
}

export default App;
