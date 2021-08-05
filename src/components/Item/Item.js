import React from 'react';

export default function Item(props) {
    return (
        <div>
            <img src={props.image} ></img>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}