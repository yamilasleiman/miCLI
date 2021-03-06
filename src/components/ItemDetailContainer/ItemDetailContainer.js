import React, { useState, useEffect } from 'react';
import productData from '../data.json';
import { useParams } from 'react-router-dom';
import ButtonCountador from '../BotonContador/BotonContador';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
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
        data.forEach((element) => {
            if (element.id === parseInt(ItemId.ItemId)) {
                setItem(element);
                return;
            }
        })
    }
    return (
        <div className="item-product-container">
            <ItemDetail
                title={miItem.title}
                image={miItem.image}
                price={miItem.price}
                description={miItem.description}
                stock={miItem.inStock}
                />
        </div>
    );
}
