import about_img from "../../assets/imgs/about_frame.png"
import "./about_us_frame.scss"
export default function about_us_frame(props) {
    return (
        <div className="about_us_container">
            <div className="left">

                <h1 className="titulo">
                    {props.data.left_t1}
                    <br /> <span className="naranja">
                        {props.data.left_t2}
                    </span>

                </h1>

                <p className="text">
                    {props.data.left_text_1}
                    <span className="naranja"> {props.data.univ_1}</span>
                    {props.data.left_text_2}
                    <span className="naranja">{props.data.univ_2}</span>
                    {props.data.left_text_3}
                    <span className="naranja">{props.data.univ_3}</span>
                    {props.data.left_text_4}
                </p>
            </div>

            <div className="right">

                <img className="imagen" src={about_img} alt="" />
                <p className="text_right">
                    {props.data.right_text_1}
                    <span className="naranja"> {props.data.right_text_orange}</span>
                    {props.data.right_text_2}
                </p>
            </div>
        </div>
    );
}