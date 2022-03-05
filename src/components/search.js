import React, { Component } from 'react';
import style from "./search.module.css";

class search extends Component {
    render() {
        return (
            <div className={style.container}>
                <h1>search what you want</h1>
                <input type={search} placeholder="search..."/>
            </div>
        );
    }
}

export default search;