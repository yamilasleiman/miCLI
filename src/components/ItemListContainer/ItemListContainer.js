import React from 'react'
import { useState, useEffect } from 'react';
import productData from '../data.json';
import ItemList from '../ItemList/ItemList';
export default function ItemListContainer() {

const [products, setProducts] = useState([]);

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
        }, //3000
        );    
    });
    let data = await promesa;
    setProducts(data);
}

    return (
        <div className='Product_Container'>
            <div className="contenedor">
                <ItemList products={products} />
            </div>
        </div>
    )
}
