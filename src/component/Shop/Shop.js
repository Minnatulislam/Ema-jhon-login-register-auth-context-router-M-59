import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getPreviousStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getPreviousStoreCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        setCart(savedCart)
    }, [products]) 

    
    const handelAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]

        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (

        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        keys={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="sidebar-container">
                
                <Cart cart={cart} clearCart ={clearCart}>
                    <br></br>
                <Link to="/orders">
                <button className='clear-btn'>
                    <p>Review Orders</p>
                    <FontAwesomeIcon className='' icon = {faArrowRight}></FontAwesomeIcon>
                </button>
                </Link>
                    
                  
                </Cart>
            </div>
        </div>
    );
};

export default Shop;