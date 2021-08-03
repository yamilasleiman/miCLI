import React, { useState, useEffect } from 'react';
import productData from '../data.json';
import { useParams } from 'react-router-dom';
import ButtonCountador from '../BotonContador';
import ItemDetailContainer from '../ItemDetailContainer';

export default function ItemProduct() {
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
            <ItemDetailContainer
                image={miItem.image}
                title={miItem.tittle}
                price={miItem.price}
                description={miItem.description}
                />
            <ButtonCountador
                max={miItem.max}
                min={miItem.min}
                stock={miItem.inStock}
            />
        </div>
    );
}
