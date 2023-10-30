import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import TestList from './components/TestList/TestList';
import Maca from "../src/images/maca.jpg";
import Pera from "../src/images/pera.webp";
import Uva from "../src/images/uva.webp";
import ExercicioList from './components/ExercicioLista/ExercicioLista';
import Equipe from './components/Equipe/Equipe';
import Eventos from './components/Eventos/Eventos';
import InputUsestate from './components/InputUsestate/Inputusestate';
import Consumindoapi from './components/ConsumindoApi/Consumindoapi';

function App() {
  return (
    <div className="App">
      {/*<Header/>
      <Main/>
      <Footer/> */}
      {/* <Eventos/> */}
      {/* <InputUsestate/> */}
      <Consumindoapi/>
      {/* <InputUsestate/> */}
    </div>
  );
}

export default App;
