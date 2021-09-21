import './Navigation.scss'
import search from '../../assets/imgs/search.svg'
import logArrow from '../../assets/imgs/logArrow.svg'
import logo from '../../assets/imgs/logo.svg'

export default function Navigation(props){
    return(
        <div className="nav-container">
            <div className="features">
                <img className="search" src={search} alt="serch"/>
                <div className="support">
                    Soporte
                </div>
                <div className="contact">
                    Contactanos
                </div>
                <button className="login-btn">
                    Login
                    <img className="log-arrow" src={logArrow} alt="logArrow"/>
                </button>
            </div>
            <div className="nav">
                <img className="nav-logo" src={logo} alt="logo"/>
                <button className="nav-g-btn">
                    Servicio
                </button>
                <button className="nav-g-btn">
                    Recursos
                </button>
                <button className="nav-g-btn">
                    Noticias & Eventos
                </button>
                <button className="nav-g-btn">
                    Sobre nosotros
                </button>
                <button className="nav-btn">
                    Solicita tu cotización
                </button>
            </div>
        </div>
    );
}