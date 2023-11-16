"use client"
import React from "react";
import'/Styles/StylesVenta.css';
import {useRouter} from "next/navigation";

const Ventas = () =>{
    const navigation = useRouter()

    const handleClick = ()=>{
        navigation.push("/addVentaLink")
    }
    return(
        <div className="cuerpo">
            <div className="title">
              <h1>Ventas Realizadas</h1>
            </div>
            <div className="btn-venta">
            <button>Guardar Venta</button>
            </div>


            <button type="button" className="btn cube cube-hover" onClick={handleClick}>
                <div className="bg-top">
                    <div className="bg-inner"></div>
                </div>
                <div className="bg-right">
                    <div className="bg-inner"></div>
                </div>
                <div className="bg">
                    <div className="bg-inner"></div>
                </div>
                <div className="text">Nueva Venta</div>

            </button>

        </div>

    )
}

export default Ventas;