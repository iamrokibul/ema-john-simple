import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="single_product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button 
                    onClick={()=>props.handleAddProduct(props.product)} 
                    className="cart-add-btn"
                    ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;