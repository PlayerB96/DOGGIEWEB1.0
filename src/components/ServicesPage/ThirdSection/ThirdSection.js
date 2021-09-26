import react from 'react';
import Study from '../../../assets/imgs/ThirdSection/Study.png';
import Point from '../../../assets/imgs/ThirdSection/Point.png';
import './ThirdSection.scss';
export default function ThirdSection(props){
    return(
        <div className="Container">
            <div className="All">
                <div className="Container-Description">
                        <h1 id="Black">{props.data.t1}</h1>
                        <h2 id="Orange">{props.data.t2}</h2>
                        <p id="Description">{props.data.description}</p>
                    <div className="Box-Text">
                        <div className="Text">
                            <img className="Point" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point1}</p>
                        </div>
                        <div className="Text">
                            <img className="Point" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point2}</p>
                        </div>
                        <div className="Text">
                            <img className="Point" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Image">
                <img id="grafico" src={Study} alt="Study"></img>
            </div>
        </div>
    )
}