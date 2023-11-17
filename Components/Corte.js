"use client"
import React, { useState, useEffect } from "react";
import 'Styles/StylesCorte.css';
import DataTable from 'react-data-table-component';
import axios, { get } from "axios";

const Corte = () => {

    const [ventas, setVentas] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/ventas");
            setVentas(response.data.data);
            console.log(response);
        } catch (error) {
            console.log("Error al obtener datos", error);
        }
    };

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre
        },
        {
            name: 'Cantidad',
            selector: row => row.cantidad
        },
        {
            name: "Total",
            selector: row => row.total
        }
    ];

    const data = ventas.map((venta) => {
        return {
            nombre: venta.nombre,
            cantidad: venta.cantidad,
            total: venta.total
        };
    });

    return (
        <div className="cuerpo">
            <h5>Registro de Ventas</h5>
            <img className="bambu" src="/assets/bambu.png" />

            <DataTable
                className="custom"
                columns={columns}
                data={data}
            >
            </DataTable>
            <button className="button type1">
            </button>
        </div>
    );
};

export default Corte;
