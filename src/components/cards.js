import React, { Component } from 'react';
import Card from './card';
import style from "./cards.module.css"
import iphone13 from "../images/iphone13.jpg";
import iphone12 from "../images/iphone12.jpg";
import s22ultra from "../images/s22ultra.jpg";
import s21ultra from "../images/s21ultra.jpg";
import s22 from "../images/s22.jpg";

class cards extends Component {
    render() {
        return (
            <div className={style.container}>
                <Card image={iphone13} name="Iphone 13" cost="130$" />
                <Card image={iphone12} name="Iphone 12" cost="150$" />
                <Card image={s22ultra} name="s22ultra" cost="170$" />
                <Card image={s21ultra} name="s21ultra" cost="180$" />
                <Card image={s22} name="s22" cost="100$" />
            </div>
        );
    }
}

export default cards;