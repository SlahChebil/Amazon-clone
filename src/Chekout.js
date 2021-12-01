import React from 'react';
import './Chekout.css';
import ChekoutProduct from './ChekoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';
function Chekout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="chekout">
            <div className="chekoutLeft">
                <img src="https://www.coolmilk.com/wp-content/uploads/250-newsletter-banner-advert.png" alt="" className="chekoutAd"/>
                <h2 className="chekoutTitle">Your Shopping basket</h2>
                {basket.map(item => (
                    <ChekoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className="chekoutRight">
                <Subtotal />
            </div>
        </div>
    )
}

export default Chekout
