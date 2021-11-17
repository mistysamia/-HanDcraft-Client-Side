import React from 'react';
import './ManageOrderRequestDisplay.css'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrderRequestDisplay = (props) => {

    const { name, number, email, address, userId, city, country, zipcode, price, product, img } = props.pendingOrder;

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

    const Id = Math.random() * 100000;
    const orderId = parseInt(Id.toString());

    const handleAddNewOrder = () => {
        const data = {};
        data.name = name;
        data.email = email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zipcode;
        data.number = number;
        data.product = product;
        data.price = price;
        data.orderId = orderId;
        data.userId = userId;
        data.img = img;
        fetch(`https://vast-woodland-49902.herokuapp.com/addordersrequest`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                   // toast("Order Confirmed!");
                    window.location.reload();
                }
            })
    }

    return (

        <tr className='ManageOrderReqDisplay'>
            <th scope="row">{props.orderListNo}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{number}</td>
            {/* <td className='comment'>{comment}</td> */}
            <td>{address},{city},{country}</td>
            <td>{price}</td>
            <td>{product.productId}</td>
            <td><span class="badge bg-primary statusBadge ">Pending</span></td>
            <td><button type="button" class="btn btn-success mx-1 px-2" onClick={handleAddNewOrder}>Add</button></td>
            <td>
                <Button variant="danger" onClick={handleShow}>
                    Delete
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
            </td>
        </tr>
    );
};

export default ManageOrderRequestDisplay;