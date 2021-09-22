
import aboutImg from "../../../assets/imgs/About/about_frame.png"
import "./AboutUsFrame.scss"
export default function about_us_frame(props) {
    return (
        <div className="aboutUsContainer">
            <div className="left">

                <h1 className="titulo">
                    {props.data.leftT1}
                    <br /> <span className="naranja">
                        {props.data.leftT2}
                    </span>

                </h1>

                <p className="text">
                    {props.data.leftText1}
                    <span className="naranja"> {props.data.univ1}</span>
                    {props.data.leftText2}
                    <span className="naranja">{props.data.univ2}</span>
                    {props.data.leftText3}
                    <span className="naranja">{props.data.univ3}</span>
                    {props.data.leftText4}
                </p>
            </div>

            <div className="right">

                <img className="imagen" src={aboutImg} alt="" />
                <p className="textRight">
                    {props.data.rightText1}
                    <span className="naranja"> {props.data.rightTextOrange}</span>
                    {props.data.rightText2}
                </p>
            </div>
        </div>
    );
}