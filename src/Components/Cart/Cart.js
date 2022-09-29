import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    for (const game of cart) {
        total+=game.time
    }
    return (
        <div>
            <h3>CSE</h3>
                <div>
                    <h3>Exercise Details</h3>
                    <div className='cart-display'>
                    <h4>Exercise time</h4>
                    <p>{total}s</p>
                    </div>
                    <div>
                        <h4>Break time</h4>
                    </div>
                </div>
        </div>
    );
};

export default Cart;