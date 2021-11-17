import React from 'react';
import './MyPendingOrder.css'
import useAuth from '../../hooks/useAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";



const MyPendingOrder = (props) => {

    const { email, address, number, country, city, img, product, price, zipcode, userId } = props.myOrder;
    const { user, logOut } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteNewOrder = () => {
        const data = {};
        data.userId = userId;
        fetch(`https://vast-woodland-49902.herokuapp.com/deleteordersreq`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
              
                setShow(false);
                window.location.reload();
            })
    }

    return (
        <div>
            {user.email == email &&
                <section className='eachMyOrderSection'>
                    <section className='eachMyOrder'>
                        <div className='bookingDetails'>
                            <p className='title'>Booking Details </p>
                            <p><strong>Address : </strong>{address}</p>
                            <p><strong>City : </strong>{city}</p>
                            <p><strong>Country : </strong>{country}</p>
                            <p><strong>Phone : </strong>{number}</p>
                        </div>
                        <div className='packageDetails'>
                            <p className='title'>Order Summary </p>
                            <div className='packageDetailsDisplay '>
                                <article className=' '>
                                    <div className='imgSection'>
                                        <img src={img} />
                                    </div>
                                    <p className='mt-2 packageName'>{product.productname}</p>
                                </article>
                                <article className=' paymentSection'>
                                    <h5 className='my-4'>Payment </h5>
                                    <p>Price : Tk .{price}</p>
                                    <p>Status : Paid</p>
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
                                <span class="badge bg-primary pending">Pending</span>
                            </div>
                        </div>

                    </section>

                </section>

            }

        </div>
    );
};

export default MyPendingOrder;