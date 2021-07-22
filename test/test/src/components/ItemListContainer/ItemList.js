// items de los productos :/
import React from 'react'
import { useState, useEffect } from 'react'
import productData from './data.json';
import ItemCountHooks from './../ItemCount/ItemCountHooks';

export default function Promises() {

const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts();
}, []);


const getProducts = async () =>{
    let ServerOnline = true;
    let promesa = new Promise((res, reject)=>{
        setTimeout(()=>{
            if(ServerOnline){
                res(productData);
            }else{
                reject( new Error('Servidor sin conexion'));
            }
        }, 3000);    
    });
    console.log(promesa);
    let data = await promesa;
    setProducts(data);
    console.log("_______________________________1");
    console.log(products);
}

    return (
        <div className='Product_Container'>

            {products.map(element => {
                return (
                    <ItemCountHooks

                    />
                )
            })}
        </div>
    )
}
