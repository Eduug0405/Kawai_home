import React from "react";
import '/Styles/StylesPrincipal.css';
const Principal = () =>{
    return(
        <div className="cuerpo">
            <div className="Bienvenida">
                <div className="Bienvenida-usuarios">BIENVENIDA</div>
            </div>
            <div className="Frase">
                <div className="admi">¿Qué desea realizar?</div>
            </div>
            <div className="container" >
                <div className="card">
                    <img src="/assets/icon1.png" alt=""/>
                    <div className="title">Administrar productos</div>
                </div>
                <div className="card">
                    <img src="/assets/bag-removebg-preview.png" alt=""/>
                    <div className="title">Agregar venta</div>
                </div>
                <div className="card">
                    <img src="/assets/dinero-removebg-preview.png" alt=""/>
                    <div className="title">Ventas</div>
                </div>
                <div className="card">
                    <img src="/assets/estadisticas-removebg-preview.png" alt=""/>
                    <div className="title">Reportes</div>
                </div>
            </div>
        </div>
    )
}

export default Principal;