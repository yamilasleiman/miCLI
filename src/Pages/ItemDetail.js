import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Categories(props) {

    const [productsCategory,setProductsCategory] = useState([]);

    const {categoriaID} = useParams();

    const getProduct = async () =>{
        let llamada = fetch(`http://localhost:4000/product/category/${categoriaID}`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProductsCategory(JSON.parse(llamada));
    }

    useEffect(() => {
        getCategory();
    },[categoriaID])

    return (
        <div>
            <h1>CATEGORIA {categoriaID}</h1>
            {productsCategory.map(element =>{
                return (
                   <Link to={`/Detalle/${element.title}/${element.id}`}><p> {element.title}</p>
                   </Link>
                )
            })}
        </div>
    )
}