import React from "react";
import style from "./header.module.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className= {style.navbar}>
            <div className={style.list}>
                <ul className={style.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                </ul>
            </div>
            <div>
                <img  src = {logo} alt="logo" className={style.image}/>
            </div>
        </nav>
    );
};
export default Navbar ;