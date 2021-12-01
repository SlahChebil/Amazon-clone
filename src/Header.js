import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket , user}, dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="headerLogo"></img>
            </Link>
            <div className="headerSearch">
                <input className="headerSearchIngine" type="text"></input>
                <SearchIcon className="headerSearchIcon"/>
            </div>
            <div className="headerNav">
                <Link to={!user && '/Login'}>
                <div className="headerOption" onClick={handleAuthentication}>
                    <span className="headerLigne1">Hello{!user ? 'Guest' : user.email}</span>
                    <span className="headerLigne2">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className="headerOption">
                    <span className="headerLigne1">Returns</span>
                    <span className="headerLigne2">& Orders</span>
                </div>
                <div className="headerOption">
                    <span className="headerLigne1">Your</span>
                    <span className="headerLigne2">Prime</span>
                </div>
                <Link to='/chekout'>
                    <div className="headerBasket">
                        <ShoppingCartIcon />
                        <span className="headerLigne1 headerBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div> 
        </div>
    )
}

export default Header;
