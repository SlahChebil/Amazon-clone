import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" className="homeImage"/>
                <div className="homeRow">
                    <Product 
                    id='123564'
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                    price={99.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={5}/>
                    <Product 
                    id="1698877"
                    title='The Design of Everyday Things: Revised and Expanded Edition' 
                    price={199.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg" 
                    rating={3}/>
                    <Product 
                    id='3269898'
                    title='Hooked: How to Build Habit-Forming Products' 
                    price={199.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41NbRv8byAL._SX329_BO1,204,203,200_.jpg" 
                    rating={3}/>
                </div>
                <div className="homeRow">
                    <Product 
                    id='2356569'
                    title='Amzone House' 
                    price={199.99} 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sur8Dgt4bC3Io9C31ISxAETOymOlALsHr8953XOzXDzxXNYHWHxGJl4LIx9XwsP7KL8&usqp=CAU" 
                    rating={3}/>
                    <Product 
                    id='3239787'
                    title='Emotional Design: Why We Love (or Hate) Everyday Things Paperback' 
                    price={199.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41MTiz-I5HL._SX326_BO1,204,203,200_.jpg" 
                    rating={3}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
