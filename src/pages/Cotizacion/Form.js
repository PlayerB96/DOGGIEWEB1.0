import React, { useState } from 'react';
import student from "../../assets/imgs/Form_student.png";
import beliaikin from "../../assets/imgs/beliaikin.jpg";
import './Form.scss'
import Pdf from "../../components/Pdf/Pdf";
export default function Cotizacion(props) {


    function generateJson() {

        // const formValues = {
        //     name: document.getElementById("name").value,
        //     lastName: document.getElementById("lastname").value,
        //     email: document.getElementById("email").value,
        //     phone: document.getElementById("phone").value,
        //     country: document.getElementById("country").value,
        //     request: document.getElementById("request").value,
        //     carreer: document.getElementById("carreer").value,
        //     university: document.getElementById("university").value,
        //     monthDiscount: document.getElementById("monthDiscount").value,
        //     discountCode: document.getElementById("discountCode").value,
        //     time: document.getElementById("time").value,
        //     structure: document.getElementById("structure").value,
        //     details: document.getElementById("details").value
        // }



    }
    // const returnPdf = Pdf(data);
    return (

        <div className="form-block">
            <div className="left-container">
                <div className="img-container">
                    <img className="student" src={beliaikin} alt="beliaikin" />
                </div>
            </div>

            <div className="right-container">
                <div className="data-container">
                    <div className="titulo">
                        <h1>Solicita una cotización</h1>
                    </div>
                    <div className="row-around">

                        <input className="input-type-1" type="text" placeholder="*Nombre" id="name" />


                        <input className="input-type-1" type="text" placeholder="*Apellido" id="lastname" />

                    </div>
                    <div className="row-center">

                        <input className="input-type-2" type="text" placeholder="*Correo Electronico" id="email" />


                    </div>

                    <div className="row-center">

                        <select className="input-type-2" name="*Tipo de servicio" id="request">
                            <option value="" disabled selected hidden>*Tipo de Servicio</option>
                            <option value="Guarderia">Guarderia</option>
                            <option value="Bañado">Bañado</option>
                            <option value="Desparacitación">Desparacitación</option>
                            <option value="Disciplina">Disciplina</option>
                            <option value="Otro">Otro</option>
                        </select>


                    </div>

                    <div className="row-center">
                        <button className="boton" onClick={generateJson}>
                            <h3 className="text">Enviar</h3>
                        </button>
                    </div>

                </div>


            </div>

        </div>

    )

}