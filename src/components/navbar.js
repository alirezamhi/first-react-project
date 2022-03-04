import react from "react";
import style from "./header.module.css";
import logo from "../images/logo.jpg";
const Navbar = () => {
    return(
        <nav className= {style.navbar}>
            <div className={style.list}>
                <ul className={style.list}>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About us</li>
                </ul>
            </div>
            <div>
                <img  src = {logo} alt="logo" className={style.image}/>
            </div>
        </nav>
    );
};
export default Navbar ;