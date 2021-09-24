import Home from "./pages/Home/Home";
import Navigation from "./components/Nav-Bar/Navigation";
import NavData from "./components/Nav-Bar/NavData.json";
import Cotizacion from "./pages/Cotizacion/Form";
import LangModal from "./components/LangModal/LangModal";
import LangModalJSON from './components/LangModal/LangModal.json';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import Cotizacion from "./pages/Cotizacion/Cotizacion";

function App() {
  const [openLangModal, setOpenLangModal] = useState(false);
  function OpenLangModal() {
    setOpenLangModal(!openLangModal);
  }
  return (
    <Router>
      <div >
        <Navigation data={NavData} openLangModal={OpenLangModal}/>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/form" exact>
          <Cotizacion />
        </Route>
        {openLangModal&& <LangModal modalAction={OpenLangModal} data={LangModalJSON}/>}
      </div>
    </Router>

  );
}

export default App;
