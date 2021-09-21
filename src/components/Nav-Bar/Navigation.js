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
                    {props.data.features.support}
                </div>
                <div className="contact">
                    {props.data.features.contact}
                </div>
                <button className="login-btn">
                    {props.data.features.login}
                    <img className="log-arrow" src={logArrow} alt="logArrow"/>
                </button>
            </div>
            <div className="nav">
                <img className="nav-logo" src={logo} alt="logo"/>
                <button className="nav-g-btn">
                    {props.data.navigation.service}
                </button>
                <button className="nav-g-btn">
                    {props.data.navigation.resources}
                </button>
                <button className="nav-g-btn">
                    {props.data.navigation.news}
                </button>
                <button className="nav-g-btn">
                    {props.data.navigation.aboutus}
                </button>
                <button className="nav-btn">
                    {props.data.navigation.apply}
                </button>
            </div>
        </div>
    );
}