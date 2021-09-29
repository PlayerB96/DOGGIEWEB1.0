// import Navigation from "../../Nav-Bar/Navigation"
import BaseImg from "../../assets/imgs/Pdf/Recurso3.svg"
import WaterMark from "../../assets/imgs/Pdf/marcaAgua.svg"
import Logo from "../../assets/imgs/Pdf/Logo.svg"
import Fb from "../../assets/imgs/Pdf/fb.svg"
import Location from "../../assets/imgs/Pdf/location.svg"
import Web from "../../assets/imgs/Pdf/web.svg"
import Wssp from "../../assets/imgs/Pdf/wssp.svg"
import './Pdf.scss'

export default function Pdf(props) {
   
    return (

        <div className="docBody">
            <div className="border">
                <div className="bluebar titleColor2"></div>
                <img src={BaseImg} alt="" />
                <img className="logo" src={Logo} alt="" />
                <img className="waterMark" src={WaterMark} alt="" />
                <div className="cellsParent">
                    <div className="topCells">
                        <div className="topInputLeft">
                            <div className="cell">FECHA:</div>
                            <div className="cell"> </div>
                        </div>
                        <div className="topInputLeft">
                            <div className="cell">CLIENTE:</div>
                            <div className="cell"></div>
                        </div>
                        <div className="topInputLeft">
                            <div className="cell">TIPO DE INVESTIGACIÓN:</div>
                            <div className="cell"></div>
                        </div>

                    </div>
                    <div className="firstBodyCells">
                        <div className="cotizacion">COTIZACION
                        </div>
                        <div className="littleCellsLeft">
                            <div className="leftSon"></div>
                            <div className="leftSon"></div>
                        </div>
                        <div className="littleCellsRight">
                            <div className="rightSon"></div>
                            <div className="rightSon"></div>
                        </div>
                    </div>

                    <div className="secondBodyCells">
                        <div className="leftSon">
                            <div className="item titleColor1"></div>
                            <div className="details titleColor1"></div>
                        </div>
                        <div className="rightSon">
                            <div className="hours titleColor2"></div>
                            <div className="cost titleColor2"></div>
                            <div className="import titleColor2"></div>
                        </div>
                    </div>

                    <div className="thirdBodyCells">
                        <div className="item"></div>
                        <div className="details"></div>
                        <div className="hours"></div>
                        <div className="cost"></div>
                        <div className="import"></div>

                    </div>

                    <div className="fourthBodyCells">
                        <div className="comments"></div>
                        <div className="cost">
                            <div className="son">SUBTOTAL</div>
                            <div className="son">DSCTO*</div>
                            <div className="son">TOTAL**</div>
                        </div>
                        <div className="import">
                            <div className="son"></div>
                            <div className="son"></div>
                            <div className="son"></div>
                        </div>

                    </div>
                    <div className="description">
                        <div className="left titleColor1">
                        </div>
                        <div className="center titleColor2  ">
                        </div>
                        <div className="right titleColor2 ">
                        </div>
                        <div className="left  bordes">
                        </div>
                        <div className="center  bordes">
                        </div>
                        <div className="right  bordes">
                        </div>
                        <div className="left  bordes">
                        </div>
                        <div className="center  bordes">
                        </div>
                        <div className="right  bordes">
                        </div>
                        <div className="left  bordes">
                        </div>
                        <div className="center  bordes">
                        </div>
                        <div className="right  bordes">
                        </div>
                        <div className="left  bordes">
                        </div>
                        <div className="center  bordes">
                        </div>
                        <div className="right  bordes">
                        </div>
                        <div className="left  bordesInv">
                        </div>
                        <div className="center  bordes">
                        </div>
                        <div className="right  bordes">
                        </div>
                    </div>
                    <div className="cotRightText">
                        Cotizacion valida por 7 dias
                    </div>


                </div>
                <img className="bottomLogo1" src={Fb} alt="" />
                <p className="Logo1Text">/drtesislatam</p>

                <img className="bottomLogo3" src={Web} alt="" />
                <p className="Logo2Text">+51971022354</p>
                <img className="bottomLogo4" src={Location} alt="" />
                <p className="Logo3Text">www.drtesis.com</p>
                <img className="bottomLogo2" src={Wssp} alt="" />
                <p className="Logo4Text">Av.Inca Garcilazo de la Vega<br/> 1658 01 Lima,Peru</p>

            </div>

        </div>
    )
}