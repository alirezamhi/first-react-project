import React, { Component } from 'react';
import style from "./card.module.css";
import up from "../images/up.png"
import down from "../images/down.png"



class card extends Component {
    constructor(){
        super();
        this.state = {
            counter :0 ,
        }
    }
    downHandler = () => {
        if(this.state.counter >= 1){
            this.setState(prevState => ({
                    counter: prevState.counter - 1,
            }))
        }
    }
    upHandler = () => {
        this.setState(prevState => ({
            counter : prevState.counter +1 ,
        }))
    }
    render() {
        const {image , name , cost}=this.props;
        return (
            <div className={style.card}>
                <img src={image} alt="phone"/>
                <h3>{name}</h3>
                <p>{cost}</p>
                <hr />
                <div className={style.counter}>
                    <img src={down} className={this.state.counter ? "" :style.active} alt="down" onClick={this.downHandler}/>
                    <span>{this.state.counter}</span>
                    <img src={up} alt="up" onClick={this.upHandler}/>
                </div>

            </div>
            
        );
    }
}

export default card;