import { useGetAllPruductsQuery } from '../../store/slices/productsApi'
import styles from './Home.module.scss'


import { addToCart } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'
const Home = () => {
    const { data, error, isLoading } = useGetAllPruductsQuery()

    const dispacth = useDispatch()

    return (
        <div className='home_container'>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                    <h2 className={styles.arrivals}>New Arrivals</h2>
                    <div className={styles.products}>
                        {data?.map((product) => {
                            return (
                                <div key={product.id} className={styles.card}>
                                    <h3 className={styles.title}>{product.name}</h3>
                                    <img className={styles.image} src={product.image} alt={product.name} />
                                    <div className={styles.details}>
                                        <span className={styles.desc}>{product.desc}</span>
                                        <span className={styles.price}>${product.price}</span>
                                    </div>
                                    <button onClick={() => dispacth(addToCart(product))} className={styles.button}>Add to cart</button>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home