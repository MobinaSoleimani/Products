import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './shared/Product';
import { fetchProducts } from '../redux/products/productsAction';
import styles from "./Store.module.css";
import Loading from "../assets/icons/Loading.gif";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])


    return (
        <div className={styles.container} >
            {
                productsState.loading ? 
    
                <img className={styles.loading} src={Loading} alt=""/>   :
                productsState.error ?
                    <p>Somethin went wrong</p> :
                    productsState.products.map(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }
        </div>
    );
};

export default Store;