import React from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './NewService.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import AddNewService from '../AddNewService/AddNewService';


const NewService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [showModal, setShow] = useState(false);
    const history = useHistory();

    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {

                setDisplayProducts(data.products);
            });
    }, []);


    let setModal = false;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(setModal);




    const [productname, setProductname] = useState([]);
    const handleProduct = event => {
        const productnameSet = event.target.value;
        setProductname(productnameSet);
    }
    const [madein, setMadein] = useState([]);
    const handleMadein = event => {
        const madeinSet = event.target.value;
        setMadein(madeinSet);
    }
    const [care, setCare] = useState([]);
    const handleCare = event => {
        const careSet = event.target.value;
        setCare(careSet);
    }
    const [price, setPrice] = useState([]);
    const handlePrice = event => {
        const priceSet = event.target.value;
        setPrice(priceSet);
    }
    const [review, setReview] = useState([]);
    const handleReview = event => {
        const ReviewSet = event.target.value;
        setReview(ReviewSet);
    }
    const [image, setImage] = useState([]);
    const handleImage = event => {
        const imageSet = event.target.value;
        setImage(imageSet);
    }
    const [madeby, setMadeby] = useState([]);
    const handleMadeBy = event => {
        const madebySet = event.target.value;
        setMadeby(madebySet);
    }
    const [quantity, setQuantity] = useState([]);
    const handleQuantity = event => {
        const quantitySet = event.target.value;
        setQuantity(quantitySet);
    }
    const [usage, setUsage] = useState([]);
    const handleUsage = event => {
        const usageSet = event.target.value;
        setUsage(usageSet);
    }

    const handleNewService = () => {
        setShow(false);
        reset();
        window.location.reload();
    }
    const Id= Math.random()*100000;
    const productId = parseInt(Id.toString());

    const onSubmit = data => {
        var reviewStar = parseFloat(review);
        data.productname = productname;
        data.quantity = quantity;
        data.img = image;
        data.usage = usage;
        data.price = price;
        data.madeby = madeby;
        data.care = care;
        data.review = reviewStar;
        data.madein = madein;
        data.productId=productId;

        console.log(data);
        fetch(`https://secure-temple-07734.herokuapp.com/addnewpackage`, {
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
    let productNo=1;
    return (
        <div>
            <section className='placeOrderShow'>

                <section className='eachPlaceOrderShow '>
                    <section className='placeOrderDetails '>

                        <form className="row g-3 mt-5 placeOrderForm needs-validation" onSubmit={handleSubmit(onSubmit)}>
                            <div className='PlaceOrderTitle mt-3 mb-5 text-center'>
                                <h2>Add a New <span className='title'>Productdetails</span></h2>
                            </div>
                            <div className="col-7">
                                <label>Product Name :</label>
                                <input type="text" className="form-control" placeholder="Productname..." required onChange={handleProduct} />
                            </div>
                            <div className="col-5 days">
                                <label>Made-In :</label>
                                <input type="text" className="form-control" placeholder="MadeIn..." required onChange={handleMadein} />
                            </div>
                            <div className="col-12">
                                <label>Care :</label>
                                <input type="text" className="form-control" placeholder="Care..." required onChange={handleCare} />
                            </div>
                            <div className="col-md-4">
                                <label> Price :</label>
                                <input type="tel" className="form-control" id="inputNumber" placeholder="Price..." required onChange={handlePrice} />
                            </div>
                            <div className="col-md-4">
                                <label>Review :</label>
                                <input type="text" className="form-control" id="inputNumber" placeholder="Review..." required onChange={handleReview} />
                            </div>
                            <div className="col-md-12">
                                <label>Image :</label>
                                <input type="text" className="form-control" id="inputImage" placeholder="Image..." required onChange={handleImage} />
                            </div>
                            <div className="col-md-4">
                                <label>Made-By : </label>
                                <input type="text" className="form-control" id="inputNumber" placeholder="MadeBy..." required onChange={handleMadeBy} />
                            </div>
                            <div className="col-md-4">
                                <label>Quantity :</label>
                                <input type="number" className="form-control" id="inputNumber"  min="0"  placeholder="Quantity..." required onChange={handleQuantity} />
                            </div>
                            <div className="col-md-12">
                                <label>Usage :</label>
                                <input type="text" className="form-control" id="inputImage" placeholder="Usage..." required onChange={handleUsage} />
                            </div>



                            <div >
                                <button className='btnSection my-3 mx-2' type="submit" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" data-bs-target="#exampleModal" onClick={handleShow}>Submit</button>
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
                                        New Tour Package Added!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleNewService}>Okay</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </form>

                    </section>

                   
                </section>


            </section>
        </div>
    );
};

export default NewService;