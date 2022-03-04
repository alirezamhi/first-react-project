import React from "react";
import style from "./baner.module.css";
import image from "../images/mountain.jpg";

const Banner = () => {
    return(
        <div className={style.container}>
            <img src={image} alt="mountain" className={style.image}/>
            <div className={style.text}>
                <h1>botostart</h1>
                <p>we are learning <span>React.js</span></p>
            </div>
        </div>
    )
};
export default Banner ;