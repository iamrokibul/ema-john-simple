import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total, prdct) => total+prdct.price,0);
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatTotal= num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="cart-items">
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Total Price: {formatTotal(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {formatTotal(tax)}</p>
            <h4>Total Price: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;