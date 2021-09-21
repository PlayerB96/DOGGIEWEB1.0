import Home from "./pages/Home/Home";
import Navigation from "./components/Nav-Bar/Navigation";
import NavData from "./components/Nav-Bar/NavData.json"
// import Cotizacion from "./pages/Cotizacion/Cotizacion";

function App() {
  return (
    <div >
      <Navigation data={NavData}/>
      <Home/>
    </div>
  );
}

export default App;
