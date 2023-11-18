import React from "react";
import '../../../Styles/StylesAddVenta.css'
const Ventas= () =>{
    return(
        <div className="cuerpo">
            <div className="title">
                <h1>REGISTRO DE VENTAS</h1>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Buscar Producto"/>
                <button className="button"></button>
            </div>

            <div className="textInputWrapper">
                <input placeholder="Cantidad" type="text" className="textInput"/>
            </div>

            <button className="btn-add">
                Confirmar
            </button>
        </div>
    )
}

export default Ventas;