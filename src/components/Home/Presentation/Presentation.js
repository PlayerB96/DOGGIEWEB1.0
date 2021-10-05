import './Presentation.scss';
import woman from '../../../assets/imgs/woman.png';
import arrow from '../../../assets/imgs/arrow.svg';
import uparrow from '../../../assets/imgs/uparrow.svg';
import wssplogo from '../../../assets/imgs/wssplogo.svg';
import novitskaya from '../../../assets/imgs/novitskaya.jpg';
import koppens from '../../../assets/imgs/koppens.jpg';


export default function Content(props){

    return(
        <div className="content-block">
            <div className="block-info">
                <div className="info">
                    {props.data.ptn}
                </div>
                <button className="b-button">
                    {props.data.apply}
                </button>
                <div className="mult-info">
                    <div className="student-container">
                        <img className="student" src={koppens} alt="koppens"/>
                    </div>
                    <div className="redir-container">
                        <div className="msg">
                            {props.data.phrase}
                        </div>
                        <div className="video-redir">
                            {props.data.seeVid}
                            <img className="arrow" src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-image">
                <img className="woman" src={novitskaya} alt="novitskaya"/>
            </div>
        </div>
    );
}