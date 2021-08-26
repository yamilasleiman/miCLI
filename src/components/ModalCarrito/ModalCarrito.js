import React, { useState } from 'react';
import { useCartContext } from '../Contex';


function ModalCarrito(show) {
    const [item, setItem] = useState([]);
    const { addToCart} = useCartContext()

    const [openModal, setOpenModal] = useState(show)

    return (
        <>
        {openModal && (
            <div className="moda-cart-container">
                <button onClose={() => setOpenModal(false)}>Cerrar</button>
            </div>
        )}
        </>
    )
}

export default ModalCarrito;

