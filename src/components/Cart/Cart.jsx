import React from 'react'
import styles from './Cart.module.scss'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectTotalPrice } from '../../store/slices/cartSlice'
import { clearCart } from '../../store/slices/cartSlice'

const Cart = () => {

    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
    const dispatch = useDispatch()

  return (
    <section className={styles.cart}>
    <div className={styles.container}>
        <div className={styles.cart__title}>
            Shopping Cart
        </div>
        <div className={styles.cart__row}>
            <div className={styles.cart__product}>
                Product
            </div>

            <div className={styles.cart__price_qnt}>
                <h2>Price</h2>
                <h2>Quantity</h2>
            </div>

            <div className={styles.cart__total}>
                Total
            </div>
        </div>
        <hr />
        {cartItems.map((product) => {
            console.log({...product})
            return (
                <CartItem key={product.id} {...product} />
            )
        })}
        

        <div className={styles.cart__buttons}>
            <div onClick={() => dispatch(clearCart())} className={styles.button__clear}>
                clear Cart
            </div>
            <div className={styles.cart__sub}>
                <div className={styles.sub__subtotal}>
                    <h2>Subtotal</h2>
                    <p>${totalPrice}</p>
                </div>
                <p>Calculating at checkout</p>
                <button className={styles.cheacout}>
                    Cheack Out
                </button>
                <Link to='/'>
                    <h3 className={styles.back}>Continue Shopping</h3>
                </Link>
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default Cart