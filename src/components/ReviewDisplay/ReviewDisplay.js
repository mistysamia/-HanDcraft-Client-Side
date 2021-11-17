import React from 'react';
import './ReviewDisplay.css';
import StarRatings from 'react-star-ratings';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewDisplay = (props) => {

    const { img, name, comment, review } = props.reviews;
    return (
        <div>
            <section className='eachReviewDisplay'>
                <article className='imgSection'>
                    <img src={img} />
                </article>
                <h5 className='text-start'>{name}</h5>

                <StarRatings

                    rating={review}
                    starDimension="17px"
                    starSpacing="4px"
                    starEmptyColor='rgb(177, 173, 173)'
                    starRatedColor='rgb(252, 179, 23)'
                />
                <br/>
                 <FaQuoteLeft className='quotesIcon'></FaQuoteLeft> 
                <div className='commentSection p-2 mt-2'>
                  <p>{comment}</p>
                </div>

            </section>

        </div>
    );
};

export default ReviewDisplay;