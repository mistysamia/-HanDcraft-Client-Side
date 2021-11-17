import React from 'react';
import './ApprovedOrderDisplay.css'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const ApprovedOrderDisplay = (props) => {
    const { name, orderId, number, email, address, userId, city, country, zipcode, price, product, img } = props.allOrder;

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
                setShow(false);
                window.location.reload();
            })
    }



    return (
        <tr className='ApprovedOrderDisplay'>
            <th scope="row">{props.allOrderNo}</th>
            <td>{orderId}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{number}</td>
            <td>{address},{city},{country}</td>
            <td>{price}</td>
            <td>{product.productId}</td>
            <td><span class="badge bg-success statusBadge ">Shipped</span></td>
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

export default ApprovedOrderDisplay;