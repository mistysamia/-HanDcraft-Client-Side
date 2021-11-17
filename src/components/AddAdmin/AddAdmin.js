import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import './AddAdmin.css';
import { Button, Modal } from 'react-bootstrap';
import AddAdminDisplay from '../AddAdminDisplay/AddAdminDisplay';
import DashBoard from '../DashBoard/DashBoard';


const AddAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();



    const [name, setName] = useState([]);
    const handleName = event => {
        const NameSet = event.target.value;
        setName(NameSet);
    }

    const [email, setEmail] = useState([]);
    const handleEmail = event => {
        const emailSet = event.target.value;
        setEmail(emailSet);
    }

    const [pass, setPass] = useState([]);
    const handlePass = event => {
        const passSet = event.target.value;
        setPass(passSet);
    }


    const [showModal, setShow] = useState(false);
    let x = false;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(x);
    const Id = Math.random() * 100000;
    const adminId = parseInt(Id.toString());




    const onSubmit = () => {
        setShow(true);
    };

    const AddConfirm = () => {
        let data = {};
        data.name = name;
        data.email = email;
        data.pass = pass;
        data.adminId = adminId;

        fetch(`https://vast-woodland-49902.herokuapp.com/addnewadmin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setShow(false);
                    reset();
                    window.location.reload();
                }
            })
    }

    const [displayAdmin, setDisplayAdmin] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/admindisplay`)
            .then(res => res.json())
            .then(data => {
                setDisplayAdmin(data.admins);
            });
    }, []);

    let adminNo = 1;

    return (
        
        <div className=''>
            
            <section className='addAdminShow'>

                <section className='eachAddAdminShow '>
                    <section className=' '>
                        <form className="row g-3 mt-5 addAdminForm needs-validation" onSubmit={handleSubmit(onSubmit)}>

                            <h2 className='text-center'>Add New Admin</h2>
                            <div className="col-12">
                                <input type="text" className="form-control" id="inputAddress" placeholder="Name..." required onChange={handleName} />
                            </div>

                            <div className="col-12">
                                <input type="email" className="form-control" id="inputAddress" placeholder="Email..." required onChange={handleEmail} />
                            </div>

                            <div className="col-12">
                                <input type="password" className="form-control" id="inputAddress" placeholder="Password..." required onChange={handlePass} />
                            </div>

                            <div >
                                <button className='btn btn-primary my-3 mx-2' type="submit" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" data-bs-target="#exampleModal" onClick={handleShow}>Submit</button>
                                <Modal
                                    show={showModal}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirmation Message  </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        New Admin Added Successfully!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={AddConfirm}>Okay</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </form>

                    </section>
               


                <article className='addAdminTable'>
                    <h2 className='mb-5 admin'>Admin List</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Admin Id</th>
                                    <th scope="col"> Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    displayAdmin.map(admin => <AddAdminDisplay
                                        key={admin.key}
                                        admin={admin}
                                        adminNo={adminNo++}
                                    >
                                    </AddAdminDisplay>)
                                }
                            </tbody>
                        </table>
                    </div>
                </article>
                </section>
            </section>
        </div >
    );
};

export default AddAdmin;