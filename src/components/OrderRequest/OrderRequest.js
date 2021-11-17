import React from 'react';
import './OrderRequest.css';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Modal } from 'react-bootstrap';



const OrderRequest = (props) => {

    const { name, email, number, address, city, zipcode, country, price, userId, img } = props.request;
    const { packagename } = props.request.package;
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const handleAddNewOrder = () => {
        const data = {};
        data.name = name;
        data.email = email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zipcode;
        data.number = number;
        data.packagename = packagename;
        data.price = price;
        data.userId = userId;
        data.img = img;
        console.log("sc  ", data, "   ", typeof (data));
        fetch(`https://vast-woodland-49902.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast("Order Confirmed!");
                    
                } window.location.reload();
            })
    }

    const handleDeleteNewOrder = () => {
        const data = {};
        data.name = name;
        data.email = email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zipcode;
        data.number = number;
        data.packagename = packagename;
        data.price = price;
        data.userId = userId;
        data.img = img;
        console.log("sc  ", data, "   ", typeof (data));
        fetch(`https://vast-woodland-49902.herokuapp.com/deleteordersreq`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast("Order Rejected!");
                    // 
                }window.location.reload();
            })
    }


    return (
        <div>
            <section className='eachRequest'>
                <h3>{packagename}</h3>
                <article className='row'>
                    <div className='col-12 col-md-9'>
                        <h5 className=' mt-3' >Booked By : </h5>
                        <div className='mx-5'>
                            <p><strong>Name : </strong>{name}</p>
                            <p><strong>E-mail : </strong>{email}</p>
                            <p><strong>Phone : </strong>{number}</p>
                            <p><strong>Address : </strong>{address} ,{city}, {country} ,{zipcode}</p>
                            <p><strong>Booking Date : </strong>{address}</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 btnSection'>
                        <div className='d-flex  '>
                            <button type="button" className="btn btn-success mx-2" onClick={handleAddNewOrder} id="liveToastBtn"><AiOutlinePlus></AiOutlinePlus> Add</button>
                            <ToastContainer />

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


                        </div>
                    </div>
                </article>


            </section>

        </div>
    );
};
export default OrderRequest;