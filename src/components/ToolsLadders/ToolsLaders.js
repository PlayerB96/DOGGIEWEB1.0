import React from 'react'
import arrowUp from '../../assets/imgs/ToolsLader/arrowUp.svg'
import wsspIcon from '../../assets/imgs/ToolsLader/wsspIcon.svg'
import './ToolsLaders.scss'
import { useState, useEffect } from 'react'
export default function ToolsLaders(props) {
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <div className="tools-lader-container">
            {
                !isVisible
                && <div className="leftBtn" onClick={UpAction}>
                    <div className="text">VOLVER ARRIBA</div>
                    <img src={arrowUp} alt="arrowUp"></img>
                </div>
            }
            <img className="rightBtn" onClick={WsspAction} src={wsspIcon} alt="wsspIcon"></img>
        </div>
    )
}

function UpAction() {
    window.scrollTo(0, 0);
}

function WsspAction() {

}
