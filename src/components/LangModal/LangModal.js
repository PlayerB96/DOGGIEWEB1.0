import React from 'react'
import blackLocation from '../../assets/imgs/LangModal/blackLocation.png'
import yellowLocation from '../../assets/imgs/LangModal/yellowLocation.png'
import logo from '../../assets/imgs/LangModal/logo.svg'
import './LangModal.scss'

export default function LangModal(props) {
    return (
        <div className="backgroundLangModal">
            <div className="modalContainer">
                <div className="upContainer">
                    <img className="logo" src={logo} alt="logo"></img>
                    <button className="exitBtn" onClick={props.modalAction}>X</button>
                </div>
                <div className="bodyModal">
                    <div className="body-modal-title">
                        {props.data.title}
                    </div>
                    <div className="continent-lan-title">
                        {props.data.continents[0].name}
                    </div>
                    <div className="continent-lan-container">
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[0].countries[0].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[0].countries[0].language}
                                </div>
                            </div>
                        </div>
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[0].countries[1].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[0].countries[1].language}
                                </div>
                            </div>


                        </div>
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[0].countries[2].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[0].countries[2].language}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="continent-lan-title">
                        {props.data.continents[1].name}
                    </div>
                    <div className="continent-lan-container">
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[1].countries[0].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[1].countries[0].language}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="continent-lan-title">
                        {props.data.continents[2].name}
                    </div>
                    <div className="continent-lan-container">
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[2].countries[0].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[2].countries[0].language}
                                </div>
                            </div>
                        </div>
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[2].countries[1].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[2].countries[1].language}
                                </div>
                            </div>


                        </div>
                        <div className="continent-lan">
                            <img className="location" src={blackLocation} alt="" />
                            <div className="lan-info">
                                <div className="country">
                                    {props.data.continents[2].countries[2].name}
                                </div>
                                <div className="lan">
                                    {props.data.continents[2].countries[2].language}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
