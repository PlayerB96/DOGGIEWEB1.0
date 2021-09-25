// import Navigation from "../../Nav-Bar/Navigation"
import BaseImg from "../../assets/imgs/Pdf/Recurso3.svg"
import WaterMark from "../../assets/imgs/Pdf/marcaAgua.svg"
import Logo from "../../assets/imgs/Pdf/Logo.svg"
import './Pdf.scss'

export default function Pdf(props) {

    return (
        <div className="docBody">
            <div className="border">
                <div className="bluebar"></div>
                <img src={BaseImg} alt="" />
                <img className="logo" src={Logo} alt="" />
                <img className="waterMark" src={WaterMark} alt="" />
                <div className="cellsParent">
                    <div className="topCells">
                        <div className="topInputLeft">
                            <div className="cell">FECHA:</div>
                            <div className="cell"></div>
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
                            <div className="leftSon">a</div>
                            <div className="leftSon">b</div>
                        </div>
                        <div className="littleCellsRight">
                            <div className="rightSon"></div>
                            <div className="rightSon"></div>
                        </div>
                    </div>

                    <div className="secondBodyCells">
                        <div className="leftSon"></div>
                        <div className="rightSon"></div>
                    </div>

                    <div className="thirdBodyCells">

                    </div>
                </div>



            </div>

        </div>
    )
}