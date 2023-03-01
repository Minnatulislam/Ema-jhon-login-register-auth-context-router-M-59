import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)


    const removeItemHandle = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
           <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                            key = {product.id}
                            product = {product}
                            removeItemHandle = {removeItemHandle}
                        ></ReviewItem>)
                }

                {
                    cart.length === 0 && <h2 style={{margin : '50px 200px'}}>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                }
           </div>
           <div className="sidebar-container">
                <Cart 
                cart = {cart}
                clearCart ={clearCart}
                ></Cart>
           </div>
        </div>
    );
};

export default Orders;   