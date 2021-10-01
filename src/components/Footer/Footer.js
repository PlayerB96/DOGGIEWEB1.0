import './Footer.scss';

import monkey from '../../assets/imgs/Footer/monkey_dr_tesis.png';
import phone from '../../assets/imgs/Footer/phone.svg';
import mail from '../../assets/imgs/Footer/mail.svg';
import house from '../../assets/imgs/Footer/house.svg';
import fb from '../../assets/imgs/Footer/fb.svg';
import insta from '../../assets/imgs/Footer/Instagram.svg';
import pinterest from '../../assets/imgs/Footer/pinterest.svg';
import spotify from '../../assets/imgs/Footer/spotify.svg';
import twitter from '../../assets/imgs/Footer/Twitter.svg';
import youtube from '../../assets/imgs/Footer/Youtube.svg';
import linkedin from '../../assets/imgs/Footer/linkedIn.svg';
import map from '../../assets/imgs/Footer/map.png';

export default function Footer(props) {

    const socImgs = [fb, insta, linkedin, pinterest, spotify, twitter, youtube];

    const socMenu = props.data.socials.map((soc, index) =>
        <div className="f-soc">
            <img className="soc-img" src={socImgs[index]} alt="" />
            <div className="soc-txt">
                {soc}
            </div>
        </div>
    );

    const navMenu = props.data.nav.map(opt =>
        <div className="f-nav-box">
            {opt}
        </div>);

    return (
        <div className="footer-container">
            <div className="f-nav-container">
                {navMenu}
            </div>
            <div className="f-info-container">
                <img className="f-monkey-img" src={monkey} alt="" />
                <div className="f-info">
                    <div className="f-soc-map">
                        {socMenu}
                        <img className="f-map" src={map} alt="" />
                    </div>
                    <div className="f-cont">
                        <div className="f-cont-box">
                            <img className="cont-img-mail" src={mail} alt="" />
                            <div className="cont-txt">
                                {props.data.contact.mail}
                            </div>

                        </div>
                        <div className="f-cont-box">
                            <img className="cont-img-phone" src={phone} alt="" />
                            <div className="cont-txt">
                                {props.data.contact.phone}
                            </div>
                        </div>
                        <div className="f-cont-box">
                            <img className="cont-img-house" src={house} alt="" />
                            <div className="cont-txt">
                                {props.data.contact.adress}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-copyright-container">
                {props.data.copyright}
            </div>
        </div>
    );
}