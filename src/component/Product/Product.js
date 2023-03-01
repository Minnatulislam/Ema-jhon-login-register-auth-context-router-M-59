import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {handelAddToCart, product} = props
    const {name, img, price, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-body'>
            <h2 style={{marginBottom:'7px' }}>Name : {name}</h2>
            <h3 style={{marginBottom:'0px', marginTop:'0px'}}>Price : {price}</h3>
            <h5 style={{marginBottom:'5px', marginTop:'0px'}}>Manufacture : {seller}</h5>
            <p style={{ marginBottom:'45px', marginTop:'0px'}}>Ratings : {ratings}</p>
            <button onClick={ () => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Product;