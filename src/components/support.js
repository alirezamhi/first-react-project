import React from "react";
import style from "./support.module.css";
import apple from "../images/Applelogo.jpg";
import samsung from "../images/samsunglogo.png";
import xiaomi from "../images/xiaomi.png";


const support = ()=>{
    return(
        <div className={style.container}>
            <h1>who support us ?</h1>
            <div className={style.allimage}>
                <img src={apple} alt="phone"/>
                <img src={samsung} alt="phone"/>
                <img src={xiaomi} alt="phone"/>
            </div>
        </div>
    );
};
export default support;