import Home from "./pages/Home/Home";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ResourcePage from "./pages/ResourcePage/ResourcePage";
import NoticeAndEvents from "./pages/NoticeAndEvents/NoticeAndEvents";
import AboutUs from "./pages/AboutUs/AboutUs";

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
        <Route path="/" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <Home />
        </Route>
        <Route path="/services" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <ServicesPage />
        </Route>
        <Route path="/resources" exact>
          <ResourcePage />
        </Route>
        <Route path="/news" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <NoticeAndEvents />
        </Route>
        <Route path="/aboutus" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <AboutUs />
        </Route>

        <Route path="/form" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <Cotizacion />
        </Route>

        {openLangModal && <LangModal modalAction={OpenLangModal} data={LangModalJSON} />}
      </div>
    </Router>

  );
}

export default App;
