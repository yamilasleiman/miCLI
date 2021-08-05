import React from 'react';
import ButtonCountador from '../BotonContador/BotonContador';


export default function ItemDetail(props) {
    return (
        <div>
            <img src={props.image} ></img>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <ButtonCountador
            stock={miItem.inStock}
           />
        </div>
        /*agregar contador aca*/
    )
}
