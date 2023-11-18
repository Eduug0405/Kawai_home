import React, { useState,useEffect } from "react";
import Modal from 'react-modal';
import '../estilos/boton.css';
import axios from "axios";


const Boton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nombreProducto, setNombreProducto] = useState('')
    const [precioProducto, setPrecioProducto] = useState('');
    const [productos, setProductos] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nombre: nombreProducto,
            precio: parseInt(precioProducto)
        };

        try {
            const apiUrl = "http://localhost:3000/productos";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(apiUrl, options);
            if (response.ok) {
                const responseData = await response.json();
                console.log('Producto Registrado', responseData);
            } else {
                throw new Error('Error al agregar');
            }
        } catch (error) {
            console.error('Error al registrar', error);
        }
    }





    return (
        <div className="posision">
            <button className="button-56" role="button" onClick={openModal}>Agregar Producto</button>

            <Modal
                isOpen={modalIsOpen}
                contentLabel="Agregar Producto Modal"
            >
                <div className="tamano">
                    <div class="form-bg">
                        <div class="container">
                            <div class="row">
                                <div className="col-md-offset-3 col-md-6">
                                    <div class="form-container">
                                        <h3 class="title">Agregar nuevo producto</h3>
                                        <form class="form-horizontal" onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <label>nombre</label>
                                                <input type="text"
                                                       id="nombreProducto"
                                                       value={nombreProducto}
                                                       onChange={(e) => setNombreProducto(e.target.value)}
                                                       placeholder="Nombre"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Precio</label>
                                                <input type="text"
                                                       id="precioProducto"
                                                       value={precioProducto}
                                                       onChange={(e) => setPrecioProducto(e.target.value)}
                                                       placeholder="Precio"/>
                                            </div>
                                            <button  class="btn signup" onSubmit={handleSubmit}>Crear producto</button>
                                        </form>
                                    </div>


                                    <div className="form-update">
                                        <h3 className="title">Agregar nuevo producto</h3>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Cerrar</button>
            </Modal>
        </div>
    );
};

export default Boton;