import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is the basket :",basket);
    const addToBasket= () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });   
    };
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_, i)=>
                    (<span>⭐</span>))}
                </div>
            </div>
            <img src={image} className="productImage"/>
            <button className="buttonProduct" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
