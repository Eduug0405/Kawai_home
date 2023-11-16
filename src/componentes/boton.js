import React, { useState } from "react";
import Modal from 'react-modal';
import '../estilos/boton.css';

const Boton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="posision"> 
            <button className="button-56" role="button" onClick={openModal}>Agregar Producto</button> 

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar Producto Modal"
            >
    <div className="tamano">      
        <div class="form-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <div class="form-container">
                            <h3 class="title">Agregar nuevo producto</h3>
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label>nombre</label>
                                    <input type="text" class="form-control" placeholder="User Name"/>
                                </div>
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                <button class="btn signup">Crear producto</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>         
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
};

export default Boton;
