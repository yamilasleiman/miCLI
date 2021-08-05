import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

export default function ItemList(props) {
    return (
        <>
            {props.products.map(element => {
                return (
                        <Link
                            to={`/ItemId/${element.id}`} itemId={element.id}>
                            <Item
                                title={element.title}
                                description={element.description}
                                price={element.price}
                                image={element.image}
                                stock={element.inStock}
                            />
                        </Link>
                )
            })}
        </>
    )
}
