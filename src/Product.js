import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <div className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <span key={i} role='img'>⭐</span>
                    ))

                    }
                </div>
            </div>
            <img    
                src={image}
                alt=''
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
