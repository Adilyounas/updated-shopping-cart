import React from 'react'
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from "../assets/logo.jpg"
import {useSelector} from "react-redux"


const Header = () => {
    const {cartPageArray} = useSelector((state)=> state.cart )
    return (
        <div className="header">
            <div>
                <NavLink to={"/"}><img src={img} alt="logo" /></NavLink>
            </div>
            <NavLink to={"/"}> Home</NavLink>
            <div className='cartdiv'>
                <NavLink to={"/cart"}>
                    <AiOutlineShoppingCart />
                    <p>{cartPageArray.length}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Header