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
                <div className="nav-service">
                    Servicio
                </div>
                <div className="nav-resources">
                    Recursos
                </div>
                <div className="nav-news">
                    Noticias & Eventos
                </div>
                <div className="nav-about">
                    Sobre nosotros
                </div>
                <button className="nav-btn">
                    Solicita tu cotización
                </button>
            </div>
        </div>
    );
}