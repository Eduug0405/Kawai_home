import React, { useEffect, useState } from 'react';
import '../estilos/tabla.css';
import axios from "axios";

export default function Tabla() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/productos",);
            //const productosArray = Object.values(response.data);
            setProductos(response.data.data);
            console.log(response)
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const handleEliminar = (id) => {
        console.log(`Eliminar elemento con ID: ${id}`);
    };

    const handleModificar = (id) => {
        console.log(`Modificar elemento con ID: ${id}`);
    };

    return (
        <div className="table">
            <div className="table-row table-header">
                <div className="table-cell">Nombre</div>
                <div className="table-cell">Precio</div>
                <div className="table-cell">Acciones</div>
            </div>
            {productos.map((item) => (
                <div key={item.id} className="table-row">
                    <div className="table-cell">{item.nombre}</div>
                    <div className="table-cell">{item.precio}</div>
                    <div className="table-cell">
                        <button className="button-55" onClick={() => handleEliminar(item.id)}>Eliminar</button>
                        <button className="button-55" onClick={() => handleModificar(item.id)}>Modificar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
