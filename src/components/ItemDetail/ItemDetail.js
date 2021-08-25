import React from 'react';
import ButtonCountador from '../BotonContador/BotonContador';


export default function ItemDetail(props) {
    return (
        <div className="especial">
            <div className="estilos">
            <img src={props.image} ></img>
            <h2>{props.title}</h2>
            <p className="precio">{props.price}</p>
            <p>{props.description}</p>
            </div>
            <ButtonCountador
            stock={props.stock}
           />
        </div>
    )
}
