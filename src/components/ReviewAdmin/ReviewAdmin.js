import React from 'react';
import ReviewAdminDisplay from '../ReviewAdminDisplay/ReviewAdminDisplay';
import './ReviewAdmin.css'
import { useEffect, useState } from 'react';


const ReviewAdmin = () => {

    const [displayReview, setDisplayReview] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => {
                setDisplayReview(data.review);
            });
    }, []);

    let reviewNo = 1;
    return (
        <div>
             <article className='reviewAdminTable'>
                <h2 className='mb-5'>Review List</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Review Id</th>
                                <th scope="col"> Name</th>
                               
                                <th scope="col">Email</th>

                                <th scope="col">Comment</th>
                                <th scope="col">Review</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayReview.map(Review => <ReviewAdminDisplay
                                    key={Review.key}
                                    review={Review}
                                    reviewNo={reviewNo++}
                                >
                                </ReviewAdminDisplay>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    );
};

export default ReviewAdmin;