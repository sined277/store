import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { selectProductsQuantity } from '../../store/slices/cartSlice'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const productsQuantity = useSelector(selectProductsQuantity)
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h2 className={styles.navbar__logo}>Shop</h2>
            </Link>


            <Link to="cart">
            <div className={styles.cart}>
                <AiOutlineShoppingCart className={styles.cart__logo} />
                <span className={styles.quantity}>{productsQuantity}</span>
            </div>
            </Link>
        </nav>
    )
}

export default Navbar
