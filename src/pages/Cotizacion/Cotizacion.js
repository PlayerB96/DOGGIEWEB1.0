// import Navigation from "../../Nav-Bar/Navigation"
import student from "../../assets/imgs/Form_student.png";
import './Cotizacion.scss'

export default function Cotizacion(props) {
    return (
        <div className="form-block">
            <div className="left-container">
                <div className="img-container">
                    <img className="student" src={student} alt="" />
                </div>
            </div>

            <div className="right-container">
                <div className="data-container">
                    <div className="titulo">
                        <h1>Solicita una cotización</h1>
                    </div>
                    <div className="primera-fila">
                        <div className="nombre">
                            <input className="input-nombre" type="text" placeholder="*Nombre" />
                        </div>
                        <div className="apellido">
                            <input className="input-apellido" type="text" placeholder="*Apellido" />
                        </div>
                    </div>
                    <div className="segunda-fila">
                        <div className="correo">
                            <input className="input-correo" type="text" placeholder="*Correo Electronico" />
                        </div>

                    </div>
                    <div className="tercera-fila">
                        <div className="telefono">
                            <input className="input-telefono" type="text" placeholder="*Telefono" />
                        </div>
                        <div className="pais">
                            <select className="input-pais" placeholder="*Pais" name="*Pais" id="">
                                <option value="" disabled selected hidden>*Pais</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Chile">Chile</option>
                                <option value="Peru">Peru</option>
                                <option value="Otro">Otro</option>
                            </select>

                        </div>
                    </div>
                    <div className="cuarta-fila">
                        <div className="requerimiento">
                            <select className="input-requerimiento" name="*Tipo de requerimiento" id="*Tipo de requerimiento">
                                <option value="" disabled selected hidden>*Tipo de requerimiento</option>
                                <option value="Correciones,estilo y/o normativa">Correciones,estilo y/o normativa</option>
                                <option value="Proyecto de tesis">Proyecto de tesis</option>
                                <option value="Estadisticas">Estadisticas</option>
                                <option value="Tesis">Tesis</option>
                                <option value="Pack Proyecto de tesis + tesis">Pack Proyecto de tesis + tesis</option>
                                <option value="Otro">Otro</option>
                            </select>

                        </div>
                    </div>
                    <div className="quinta-fila">
                        <div className="especialidad">
                            <select className="input-especialidad" name="Especialidad" id="Especialidad">
                                <option value="" disabled selected hidden>Especialidad</option>
                                <option value="Administracion">Administracion</option>
                                <option value="Arquitectura">Arquitectura</option>
                                <option value="Ingenieria">Ingenieria</option>
                                <option value="Derecho">Derecho</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div className="sexta-fila">
                        <div className="univ-org">
                            <select className="input-univ-org" placeholder="Universidad/Organizacion" name="Universidad/Organizacion" id="Universidad/Organizacion">
                                <option value="" disabled selected hidden>Universidad/Organizacion</option>
                                <option value="Pontificia Universidad Catolica del Peru">Pontificia Universidad Catolica del Peru</option>
                                <option value="Universidad Peruana Cayetano Heredia">Universidad Peruana Cayetano Heredia</option>
                                <option value="Universidad del Pacifico">Universidad del Pacifico</option>
                                <option value="Universidad de Lima">Universidad de Lima</option>
                                <option value="Universidad San Martin de Porres">Universidad San Martin de Porres</option>
                                <option value="Universidad Inca Garcilazo de la Vega">Universidad Inca Garcilazo de la Vega</option>
                                <option value="Universidad Ricardo Palma">Universidad Ricardo Palma</option>
                                <option value="Universidad Peruana de Ciencias Aplicadas">Universidad Peruana de Ciencias Aplicadas</option>
                                <option value="Universidad San Ignacion de Loyola">Universidad San Ignacion de Loyola</option>
                                <option value="Universidad Tecnologica del Peru">Universidad Tecnologica del Peru</option>
                                <option value="Universidad Cientifica del Sur">Universidad Cientifica del Sur</option>
                                <option value="Otro">Otro</option>
                            </select>

                        </div>

                    </div>
                    <div className="septima-fila">
                        <div className="descuento">
                            <select className="input-descuento" name="" id="">
                                <option value="" disabled selected hidden>Descuento del mes</option>
                                <option value="Enero">Enero</option>
                                <option value="Febrero">Febrero</option>
                                <option value="Marzo">Marzo</option>
                                <option value="Abril">Abril</option>
                                <option value="Mayo">Mayo</option>
                                <option value="Junio">Junio</option>
                                <option value="Julio">Julio</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Septiembre">Septiembre</option>
                                <option value="Octubre">Octubre</option>
                                <option value="Noviembre">Noviembre</option>
                                <option value="Diciembre">Diciembre</option>
                            </select>
                        </div>
                        <div className="codigo">
                            <input className="input-codigo" type="text" placeholder="Codigo de descuento" />
                        </div>

                    </div>
                    <div className="octava-fila">
                        <div className="entrega">
                            <select className="input-entrega" name="Tiempo de entrega" id="Tiempo de entrega">
                                <option value="" disabled selected hidden>Tiempo de entrega</option>
                                <option value="1 semana">1 semana</option>
                                <option value="2 semanas">2 semanas</option>
                                <option value="3 semanas">3 semanas</option>
                                <option value="4 semanas">4 semanas</option>
                                <option value="5 semanas">5 semanas</option>
                                <option value="6 semanas">6 semanas</option>
                                <option value="7 semanas">7 semanas</option>
                                <option value="8 semanas">8 semanas</option>
                                <option value="+ de 8 semanas">+ de 8 semanas</option>
                            </select>
                        </div>
                    </div>
                    <div className="novena-fila">
                        <div className="avance">
                            <input className="input-avance" type="text" placeholder="Ajunta tu estructura y/o avance" />
                        </div>

                    </div>
                    <div className="decima-fila">
                        <div className="detalles">
                            <input className="input-detalles" type="text" placeholder="*Detalles adicionales" />
                        </div>
                    </div>
                    <div className="undecima-fila">
                        <button className="boton">
                            <h3 className="text">Enviar</h3>
                        </button>
                    </div>

                </div>


            </div>

        </div>)

}