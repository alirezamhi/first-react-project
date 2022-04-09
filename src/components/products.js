import React, { Component } from 'react';
import Card from './card';
import Style from './products.module.css'
import axios from 'axios';

class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
         .then(Response => this.setState({
             products:Response.data
            }))
        }
        render() {
        return (
            <div className={Style.container}>
                {this.state.products.map(product => <Card key={product.id} image={product.image} name={product.title} cost={`${product.price} $`}/>)}
            </div>
        );
    }
}

export default products;