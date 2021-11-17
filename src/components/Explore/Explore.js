import React from 'react';
import { useEffect, useState } from 'react';
import './Explore.css';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Loader from "react-loader-spinner";


const Explore = () => {

    const [displayProducts, setDisplayProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);


    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {

                setDisplayProducts(data.products);
                setLoadingProducts(false);
            });
    }, []);

    return (
        <div>
             <section className='productTitle'>
                <p className='title'>Our Products</p>
            </section>
            <div className="container mb-5">
            <div className="sweet-loading">
                    <Loader type="TailSpin" visible={loadingProducts} color="#00BFFF" height={80} width={80} />
                </div>
                <article className='productDisplay'>
                    {
                        displayProducts.map(Product => <ProductDisplay
                            key={Product.key}
                            products={Product}
                        >
                        </ProductDisplay>)
                    }
                </article>
            </div>
        </div>
    );
};

export default Explore;