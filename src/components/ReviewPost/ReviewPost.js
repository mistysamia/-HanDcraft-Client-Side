import React from 'react';
import './ReviewPost.css'
import useAuth from '../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const ReviewPost = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, logOut } = useAuth();
    const [showModal, setShow] = useState(false);
    const [addReview, setAddReview] = useState([]);
    const [newRate, setNewRate] = useState([]);


    let setModal = false;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(setModal);


    const handleAddReview = event => {
        const addReviewSet = event.target.value;
        console.log(addReviewSet);
        setAddReview(addReviewSet);
    }
    
    const ratingChanged = (newRating) => {
        setNewRate(newRating)  ;
    };
    const handleNewService = () => {
        setShow(false);
        reset();
        window.location.reload();
    }

    let data = {};
    const Id= Math.random()*100000;
    const reviewId = parseInt(Id.toString());

    const submitReview = () => {


        if (newRate == 0 && addReview.length == 0) {


        }
        else {
            data.name = user.displayName;
            data.email = user.email;
            data.img = user.photoURL;
            data.comment = addReview;
            data.review = parseFloat(newRate);
            data.reviewId=reviewId;

            fetch(`https://vast-woodland-49902.herokuapp.com/addnewreview`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        setShow(true);
                        reset();
                        
                    }

                })
        }


    };

    return (
        <div>
            <section className='reviewPost'>
                <article>
                    <h3 className='mb-3'>Write Us a Review</h3>
                </article>
                <section className='reviewPostSection'>
                    <article className='d-flex justify-content-end'>
                        <article className='imgPart'>
                            {user.photoURL && <img src={user.photoURL} />}
                        </article>
                    </article>

                    <article className='reviewField'>
                        <h4>{user.displayName}</h4>
                        <p>Your review will be posted publicly on the web.</p>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={40}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="rgb(13, 151, 0)"
                        />
                        <textarea onChange={handleAddReview} name="paragraph_text" className="textArea"></textarea>
                        <br />


                        <button type="button" className='btn btn-primary' onClick={submitReview} type="submit" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop" data-bs-target="#exampleModal">Submit</button>
                        <Modal
                            show={showModal}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmation Message</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Thank you for your review!
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleNewService}>Okay</Button>
                            </Modal.Footer>
                        </Modal>

                    </article>
                </section>
            </section>

        </div>
    );
};

export default ReviewPost;