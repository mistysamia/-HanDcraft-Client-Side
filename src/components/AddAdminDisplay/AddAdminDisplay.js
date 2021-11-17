import React from 'react';
import './AddAdminDisplay.css'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";


const AddAdminDisplay = (props) => {

    const {  name, adminId, email, pass } = props.admin;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteNewOrder = () => {
        const data = {};
        data.adminId = adminId;

        fetch(`https://vast-woodland-49902.herokuapp.com/deleteadmin`, {
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
        <tr className='addAdminDisplay'>
        <th scope="row">{props.adminNo}</th>
        <td>{adminId}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{pass}</td>
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

export default AddAdminDisplay;