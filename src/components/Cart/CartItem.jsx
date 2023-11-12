import React from 'react'
import styles from './CartItem.module.scss'
import { removeProduct, plusCount, minusCount } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'


const CartItem = ({image, name, desc, count, price, id}) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className={styles.cartItem}>
            <img className={styles.cartItem__image} src={image} alt="phone" />
            <div className={styles.cartItem__info}>
                <h2>{name}</h2>
                <p>{desc}</p>
                <button onClick={() => dispatch(removeProduct(id))}>Remove</button>
            </div>
            <div className={styles.cartItem__price_qnt}>
                <h2 className={styles.cartItem__price}>${price}</h2>
                <div className={styles.cartItem__quantity}>
                    <p onClick={() => dispatch(plusCount(id))}>+</p>
                    <h2>{count}</h2>
                    <p onClick={() => dispatch(minusCount(id))}>-</p>
                </div>
            </div>
            <h2>${price * count}</h2>
        </div>
        <hr />
        </>
    )
}

export default CartItem