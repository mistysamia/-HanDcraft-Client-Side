import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Sale from '../Sale/Sale';
import homeContact from '../../images/homeContact.jpg'
import Quotes from '../Quotes/Quotes';
import Footer from '../Footer/Footer';
import ExtraImgSection from '../ExtraImgSection/ExtraImgSection';
import homeBg1 from '../../images/homeBg1.jpg'
import homeBg2 from '../../images/homeBg2.jpg'
import homeBg3 from '../../images/homeBg3.jpg'
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Review from '../Review/Review';
import VideoSection from '../VideoSection/VideoSection';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { css } from "@emotion/react";
import Loader from "react-loader-spinner";

const Home = () => {

    const [displayReviews, setDisplayReviews] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    const history = useHistory();

    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingReview, setLoadingReview] = useState(true);
    
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {

                setDisplayProducts(data.products.slice(0, 6));
                setLoadingProducts(false);
            });
    }, []);

    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => {
                setDisplayReviews(data.review);
                setLoadingReview(false);
            });
    }, []);


    const handleExplore = () => {
        history.push('/explore');
    }






    return (
        <div>


            {/* Header Part Starts */}
            <section id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carouselImg">
                        <img src={homeBg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={homeBg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={homeBg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            {/* Header Part Ends */}

            <Sale></Sale>


            <ExtraImgSection></ExtraImgSection>



            {/* Product details Starts */}

            <section className='productTitle'>
                <p className='title'>New In</p>
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

                <a onClick={handleExplore} href="" className='explore'>Explore For More
                    <BsArrowRight></BsArrowRight></a>
            </div>

            <VideoSection></VideoSection>

            {/* Product details Ends */}


            {/* Review Part Starts */}
            <section className='productTitle'>
                <p className='title'>Our New Varieties</p>
            </section>

            <div className="sweet-loading">
                <Loader type="TailSpin" visible={loadingReview} color="#00BFFF" height={80} width={80} />
            </div>
            <Review></Review>
            {/* Review Part Ends */}


            <section className='productTitle'>
                <p className='title'>What Our <span className='customersSpan'>Customers Are Saying</span></p>
                <p></p>
            </section>
            <div className=" mb-5">
                <section className='reviewDisplay'>
                    {
                        displayReviews.map(review => <ReviewDisplay
                            key={review.key}
                            reviews={review}
                        >
                        </ReviewDisplay>)
                    }
                </section>
            </div>




        </div>
    );
};

export default Home;