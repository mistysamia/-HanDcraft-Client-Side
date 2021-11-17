import React from 'react';
import reviewImg1 from '../../images/reviewImg1.jpg'
import reviewImg2 from '../../images/reviewImg2.jpg'
import reviewImg3 from '../../images/reviewImg3.jpg'
import './Review.css'

const Review = () => {
    return (
        <div>
            <section className='reviewSectionDisplay'>
                <section className='reviewSection'>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                            <div className='imgPart'>
                                   <img src={reviewImg1} className="card-img-top" alt="..." />
                            </div>
                         
                            <div className="card-body mainReviewSection">
                                <h5>Clay Dinnerware</h5>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                        <div className='imgPart'>
                            <img src={reviewImg2} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body mainReviewSection">
                                <h5>Jute Bags</h5>

                            </div>
                        </div>
                    </section>
                    <section className='eachReviewSection'>
                        <div className="card eachReviewSectionCard" >
                        <div className='imgPart'>
                               <img src={reviewImg3} className="card-img-top" alt="..." />
                        </div>
                         
                            <div className="card-body mainReviewSection">
                                <h5>Handmade Ornaments</h5>
                            </div>
                        </div>
                    </section>
                </section>

            </section>
        </div>
    );
};

export default Review;