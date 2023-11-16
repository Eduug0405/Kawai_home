import React from "react";
import 'Styles/StylesReporte.css';

const Reporte = () =>{
    return(
        <div className="cuerpo">
          <div className="reportes">
          <h3>Reportes de Ventas</h3>
          </div>
            <div className="btn-pdf">
                <button>PDF</button>
            </div>
            <div className="btn-stats">
                <button>STATS</button>
            </div>
            <div className="btn-gra">
                <button>GRAPHICS</button>
            </div>
            <div>
                <button className="btn"><i className="animation"></i>BUTTON<i className="animation"></i>
                </button>
            </div>
        </div>
    )
}
export default Reporte;