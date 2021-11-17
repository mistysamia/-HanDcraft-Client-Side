import React from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Modal } from 'react-bootstrap';

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);


    const products = location.state[0];
    const price = location.state[1];
    const code = location.state[2];
    let packagePrice = products.price;

    const [address, setAddress] = useState([]);
    const handleAddress = event => {
        const addressSet = event.target.value;
        setAddress(addressSet);
    }
    const [country, setCountry] = useState([]);
    const handleCountry = event => {
        const countrySet = event.target.value;
        setCountry(countrySet);
    }

    const [city, setCity] = useState([]);
    const handleCity = event => {
        const citySet = event.target.value;
        setCity(citySet);
    }

    const [zip, setZip] = useState([]);
    const handleZip = event => {
        const zipSet = event.target.value;
        setZip(zipSet);
    }

    const [number, setNumber] = useState([]);
    const handleNumber = event => {
        const numberSet = event.target.value;
        setNumber(numberSet);
    }

    const [date, setDate] = useState([]);
    const handleDate = event => {
        const dateSet = event.target.value;
        setDate(dateSet);
    }
    const [showModal, setShow] = useState(false);
    let x = false;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(x);
    const Id= Math.random()*100000;
    const userId = parseInt(Id.toString());


    const onSubmit = data => {
        data.name = user.displayName;
        data.email = user.email;
        data.address = address;
        data.city = city;
        data.country = country;
        data.zipcode = zip;
        data.number = number;
        data.date = date;
        data.product = products;
        data.userId = userId;
        data.price=price;
        data.img=products.img;
       
        console.log(data);
        fetch(`https://vast-woodland-49902.herokuapp.com/orderrequest`, {
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
    };

    const handleProceedToHome = () => {
        history.push('/home');
    }
    return (
        <div className='container'>
            <section className='placeOrderShow'>

                <section className='eachPlaceOrderShow row'>
                    <section className='placeOrderDetails col-12 col-md-8'>
                        <div className='PlaceOrderTitle'>
                            <h2>Proceed to <span className='title'>ORDER</span></h2>
                        </div>
                        <form className="row g-3 mt-5 placeOrderForm needs-validation" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12">
                                <input type="email" className="form-control"
                                    id="inputEmail4" value={user.displayName} readOnly required />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control"
                                    id="inputEmail4" value={user.email} readOnly required />
                            </div>

                            <div className="col-12">
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address..." required onChange={handleAddress} />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>

                            <div className="col-md-5">
                                <input type="text" className="form-control" id="inputCity" placeholder="Country..." required onChange={handleCity} />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="inputCountry" placeholder="City..." required onChange={handleCountry} />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="inputZip" placeholder="Zip Code..." required onChange={handleZip} />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input type="tel" className="form-control" id="inputNumber" placeholder="Contact Number..." required onChange={handleNumber} />
                            </div>
                            <div className="col-md-12">
                                <input type="datetime-local" id="meeting-time"
                                    name="meeting-time" value="2021-06-12T19:30"
                                    min="2018-06-07T00:00" max="2025-06-14T00:00" className="form-control" onChange={handleDate} required />
                            </div>

                            <div >
                                <button className='btnSection my-3 mx-2' type="submit" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" data-bs-target="#exampleModal" onClick={handleShow}>Submit</button>
                                <Modal
                                    show={showModal}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Order Placed </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Woohoo, your order has been placed Successfully!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleProceedToHome}>Okay</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </form>

                    </section>
                    <section className='cart col-12 col-md-4'>
                        <h2 className='mb-5'>Checkout Summary</h2>
                        <div className='cartDetails mt-5'>
                            <h5 className='text-start mt-5'> Total: <span className=' totalPrice'>Tk.{products.price}</span></h5>

                            <h5 className='text-start mb-4 mt-3'> Discount: <span className='discount'>Tk.{code}</span></h5>
                            <hr />
                            <h5 className='text-start mb-5'> Payable Total: <span className='payablePrice'>Tk.{price}</span></h5>


                        </div>

                    </section>


                </section>


            </section>
        </div >
    );
};

export default PlaceOrder;