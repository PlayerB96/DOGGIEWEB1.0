import React from 'react'
import arrowUp from '../../assets/imgs/ToolsLader/arrowUp.svg'
import wsspIcon from '../../assets/imgs/ToolsLader/wsspIcon.svg'
import './ToolsLaders.scss'
import { useState, useEffect } from 'react'
export default function ToolsLaders(props) {
    const [isVisible, setIsVisible] = useState(true);
    const [isBlocked, setBlocked] = useState(false);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])


    const listenToScroll = () => {
        let heightToHideFrom = props.hh;
        let heightToBlock = props.hb;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        if (winScroll > heightToBlock) {
            isBlocked && setBlocked(true);
        } else {
            setBlocked(true);
        }
    };

    let leftBtn;
    if (!isVisible) {
        leftBtn =
            <div className="tools-lader-container-dynamic">
                <div className="leftBtn" onClick={UpAction}>
                    <div className="text">VOLVER ARRIBA</div>
                    <img src={arrowUp} alt="arrowUp"></img>
                </div>
                <img className="rightBtn" onClick={WsspAction} src={wsspIcon} alt="wsspIcon"></img>
            </div>;
    } else {
        leftBtn =
            <div className="tools-lader-container-static">
                <img className="rightBtn" onClick={WsspAction} src={wsspIcon} alt="wsspIcon"></img>
            </div>;
    }

    return (
        <>
            {leftBtn}
        </>
    )
}

function UpAction() {
    window.scrollTo(0, 0);
}

function WsspAction() {
    const numerPhone = '51939206205';
    const link = 'https://wa.me/' + numerPhone;

    //window.location.href = link;
    window.open(link, "_blank");
}
