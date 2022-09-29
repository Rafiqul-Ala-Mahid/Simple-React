import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    for (const game of cart) {
        total+=game.time
    }
    return (
        <div>
            <h3>Rafiqul Ala Mahid</h3>
            <h4>Developer</h4>
            <p>Favourite Games: </p>
            <p>Cricket, Football, Chess, Tennis</p>
            <h3>Add some break</h3>
            <div className="cart-display">
                <button>
                    <p><span>10</span>s</p>
                </button>
                <button>
                    <p><span>20</span>s</p>
                </button>
                <button>
                    <p><span>30</span>s</p>
                </button>
                <button>
                    <p><span>40</span>s</p>
                </button>
            </div>
                <div>
                    <h3>Games Cost Details</h3>
                    <div className='cart-display'>
                    <h4>Game time:</h4>
                    <p>{total}s</p>
                    </div>
                    <div className='cart-display'>
                    <h4>Break time:</h4>
                    <p><span>0</span>s</p>
                    </div>
            </div>
            <button id='activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;