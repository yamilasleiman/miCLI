import React, { useState } from 'react';

function ModalCarrito(show) {
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

