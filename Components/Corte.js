"use client"
import React from "react";
import 'Styles/StylesCorte.css';
import DataTable from 'react-data-table-component';
const Corte = () =>{
   const columns = [
       {
         name: 'Nombre',
           selector: row => row.name
       },
       {
          name: 'Cantidad',
           selector: row => row.cantidad
       },
       {
         name: "Total",
         selector:row => row.total
       }
   ];



   const data =[
       {
           name:'Mochila Grande',
           cantidad:'2',
           total:'100'
       }
   ]

    return(
        <div className="cuerpo">
              <h5>Registro de Ventas</h5>
        <img className="bambu" src="/assets/bambu.png"/>
        <DataTable
            className="custom"
            columns={columns}
            data={data}
        >
        </DataTable>
            <button className="button type1">
            </button>
        </div>
    )
}

export default Corte;