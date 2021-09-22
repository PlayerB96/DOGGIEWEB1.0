import Home from "./pages/Home/Home";
import Navigation from "./components/Nav-Bar/Navigation";
import NavData from "./components/Nav-Bar/NavData.json";
import Cotizacion from "./pages/Cotizacion/Form"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import Cotizacion from "./pages/Cotizacion/Cotizacion";

function App() {
  return (
    <Router>
      <div >
        <Navigation data={NavData} />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/form" exact>
          <Cotizacion />
        </Route>
      </div>
    </Router>

  );
}

export default App;
