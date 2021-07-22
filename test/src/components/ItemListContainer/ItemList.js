// items de los productos :/
import React from 'react'
import { useState, useEffect } from 'react'
import productData from './data.json';
import Item from './Item';

export default function Promises() {

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
        }, 3000);    
    });
    console.log(promesa);
    let data = await promesa;
    setProducts(data);
}

    return (
        <div className='Product_Container'>
            {products.map(element => {
                return (
                    <Item
                        title={element.title}
                        description={element.description}
                        price={element.price}
                        image={element.image}
                    />
                )
            })}
        </div>
    )
}
