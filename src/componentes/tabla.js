import React, { useEffect, useState } from 'react';
import '../estilos/tabla.css';
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

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

    const handleEliminar = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/productos/${id}`)
             console.log(('Producto eliminado con exito'))
            fetchData()
        } catch (error){
            console.log('No se pudo eliminar el producto')
        }
    };

    const handleModificar = async (id, nuevoPrecio, nuevoNombre) => {
        try {
            const datosActualizar = {
                nombre: nuevoNombre,
                precio: nuevoPrecio
            };

            // Configura la solicitud con el método PATCH y el cuerpo JSON
            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosActualizar)
            });

            // Verifica si la solicitud fue exitosa
            if (response.ok) {
                console.log("Producto actualizado exitosamente");
                // Refresca los datos después de la actualización
                fetchData();
            } else {
                console.error("Error al actualizar el producto:", response.statusText);
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
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
                        <button className="button-55" onClick={() => {
                            const nuevoPrecio = prompt('Ingresa el nuevo precio:');
                            const nuevoNombre = prompt('Ingresa el nuevo nombre:');
                            if (nuevoPrecio !== null && nuevoNombre !== null) {
                                handleModificar(item.id, nuevoPrecio, nuevoNombre);
                            }
                        }}>Modificar</button>

                    </div>
                </div>
            ))}
        </div>
    );
}
