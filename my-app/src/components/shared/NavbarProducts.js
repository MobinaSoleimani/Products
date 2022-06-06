import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shopIcon from "../../assets/icons/shop.svg";
import styles from "./NavbarProducts.module.css";

const NavbarProducts = () => {
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.iconContainer}>
                <Link to="/cart"><img src={shopIcon} /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    </div>
    );
};

export default NavbarProducts;