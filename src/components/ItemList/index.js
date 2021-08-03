import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer';
import { Link } from 'react-router-dom';

export default function index(props) {
    return (
        <>
            {props.products.map(element => {
                return (
                    <>
                        <Link
                            to={`/ItemId/${element.id}`} itemId={element.id}>
                            <ItemDetailContainer
                                title={element.title}
                                description={element.description}
                                price={element.price}
                                image={element.image}
                                max={element.max} 
                                min={element.min} 
                                stock={element.inStock}
                            />
                        </Link>
                    </>
                )
            })}
        </>
    )
}
