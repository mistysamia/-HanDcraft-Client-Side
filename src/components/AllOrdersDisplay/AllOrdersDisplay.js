import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AllOrdersDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const AllOrdersDisplay = (props) => {

    const { name, email, number, price, img, packagename,userId } = props.orders;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteNewOrder = () => {
        const data = {};
        data.userId = userId;
        fetch(`https://vast-woodland-49902.herokuapp.com/deleteorders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                   
                }  
                 setShow(false);
                 window.location.reload();
            })
    }

    return (
        <div>
            <section className='eachAllOrderDisplay'>
                <div className='imgPart'>
                    <section className='imgSection'>
                        <img src={img} />
                    </section>
                </div>
                <div className='details'>
                    <h3>{packagename}</h3>
                    <p><strong>Paid : $</strong>{price}</p>
                    <p><strong>Booking Date : </strong>{price}</p>
                    <hr />
                    <div className='bookingSection'>
                        <article>
                            <h5>Booked By :</h5>
                            <p><strong>Name : </strong>{name}</p>
                            <div className='d-flex'>
                                <p><strong>E-mail : </strong>{email}</p>
                                <p className='mx-5'><strong>Phone : </strong>{number}</p>
                            </div>
                        </article>
                        <article className='btnPart'>
                            <Button variant="danger" onClick={handleShow}>
                            <MdDelete></MdDelete> Delete
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Cancel Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want cancel the order ?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleDeleteNewOrder}>
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </article>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default AllOrdersDisplay;