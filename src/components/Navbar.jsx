import React from 'react'
import shopping_cart from "./shopping-cart.png"
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
     <div id='main'>

        <div id="navbar">
               <div>
               <div className="logo" style = {{ fontSize: "20px", marginLeft :"-300px"  }} >TeeRex Store</div>
               <Link to="/" style = {{ fontSize: "20px", marginRight :"-600px", textDecoration:"none"}}>Products</Link>
               <Link to="/cart" style = {{ marginRight :"-220px"}}> <img src={shopping_cart}></img></Link>
               </div>
        </div>
    </div>
  )
}

