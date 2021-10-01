import React from 'react'
import "./AboutUs.scss"
export default function Valores(props) {

    const listCards = props.data.listData.map((item) =>
        <div className="rowSon">
            <h1 className="naranja">{item.title}</h1>
            <p className="text">{item.body}</p>
        </div>
    )
    return (
        <div className="mainContainer1">
            <div className="firstRow">
                <h2 className="firstTitle">{props.data.t1}</h2>
                <h1 className="naranja">{props.data.t2[1]}</h1>
                <p>{props.data.t2[2]}</p>
            </div>

            <div className="secondRow">
               {listCards}
            </div>


        </div>
    )
}
