import React from 'react';
import './AddNewService.css'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

const AddNewService = (props) => {
    const { img, productname, price, review, quantity, productId, productNo,key } = props.products;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteNewOrder = () => {
        const data = {};
        data.productId = productId;

        console.log(data.productId);
        fetch(`https://vast-woodland-49902.herokuapp.com/deleteproduct`, {
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

        <tr>
            <th scope="row">{props.productNo}</th>
            <td>{productId}</td>
            <td>{productname}</td>
            <td className='d-flex justify-content-center'>
                <div className='addnewImgPart'>
                    <img src={img} />
                </div>
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
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
            </td>
        </tr>

    );
};

export default AddNewService;