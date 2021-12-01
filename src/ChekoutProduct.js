import React from 'react'
import './ChekoutProduct.css'
import { useStateValue } from './StateProvider';

function ChekoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const remove =() => {
        dispatch({
            type:"REMOVE",
            id: id,
        })
    }
    return (
        <div className="chekoutProduct">
            <img src={image} className="chekoutProductImg"/>
            <div className="chekoutProductInfo">
                <p className="chekoutProductTitle">{title}</p>
                <p className="chekoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>   
                </p>
                <div className="chekoutProductRating">
                    {Array(rating).fill().map((_, i)=>
                    (<span>⭐</span>))}
                </div>
                <button className="chekoutProductRemove" onClick={remove}>Remove from basket</button>
            </div>
        </div>
    )
}

export default ChekoutProduct;
