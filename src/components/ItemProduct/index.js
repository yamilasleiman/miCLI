import React, { useState, useEffect } from 'react';
import productData from '../ItemListContainer/data.json';
import { useParams } from 'react-router-dom';

export default function ItemCount() {
    const [products, setProducts] = useState([]);
    const [miItem, setItem] = useState({})

    const ItemId = useParams({});

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{
        let ServerOnline = true;
        let promesa = new Promise((respuesta, reject)=>{
            setTimeout(()=>{
                if(ServerOnline){
                    respuesta(productData);
                }else{
                    reject( new Error('Servidor sin conexion'));
                }
            }, );    
        });
        let data = await promesa;
        setProducts(data);
        data.forEach((element) => {
            if (element.id === parseInt(ItemId.ItemId)) {
                setItem(element);
                return;
            }
        })
    }

    return (
        <div className="item-product-container">
            <img src={miItem.image} ></img>
            <h2>{miItem.tittle}</h2>
            <p>{miItem.price}</p>
            <p>{miItem.description}</p>
        </div>
    );
}