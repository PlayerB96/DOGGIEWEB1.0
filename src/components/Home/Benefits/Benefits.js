import React from 'react'
import image from '../../../assets/imgs/Benefits/img.png'
import './Benefit.scss'


export default function Benefits(props) {

    const data = {
        "t1" : "",
        "t2" : "",
        "listData": []
    }

    const listItems = props.data.listData.map((item) =>
        <li className="item" key={item.toString()}>
            {item}
        </li>
    );
    return (
        <div className="benefitsContainer">
            <div className="t1">{props.data.t1}</div>
            <div className="t2">{props.data.t2}</div>
            <div className="infoContainer">
                <div className="imageContainer">
                    <img className="image" src={image} alt={image}></img>
                </div>

                <ul className="list">
                    {listItems}
                </ul>
            </div>

        </div>
    )
}
