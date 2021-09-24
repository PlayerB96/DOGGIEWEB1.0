import React from 'react'
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
                    <div>{props.data.title}</div>
                </div>
            </div>
        </div>
    )
}
