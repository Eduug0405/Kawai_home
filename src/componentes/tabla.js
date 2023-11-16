
import React, { useEffect } from 'react';
import '../estilos/tabla.css';

export default function Tabla() {

    const datosDeLaBaseDeDatos = [
        { nombre: 'Espejo', precio: 50 },
        { nombre: 'mascarilla', precio: 20 },
        { nombre: 'ventilador',  precio: 100 },
        
      ];


    const handleEliminar = (id) => () => {
        console.log(`Eliminar elemento con ID: ${id}`);
    };
      
    const handleModificar = (id) => () => {
        console.log(`Modificar elemento con ID: ${id}`);
    };

    return (
        <div className="table">
        <div className="table-row table-header">
          <div className="table-cell">Nombre</div>
          <div className="table-cell">Precio</div>
          <div className="table-cell">Acciones</div>
        </div>
        {datosDeLaBaseDeDatos.map((item) => (
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
  
