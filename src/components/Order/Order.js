import React from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Order.css';
const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);
    const onSubmit = data => {
        console.log(data)
    }

    const products = location.state;
    let productsPrice = products.price;
    const [price, setPrice] = useState([productsPrice]);
    const [code, setCode] = useState([0]);
    let codeUsed = 0;

    const hadnlePromoCode = () => {

        const promocode = document.getElementById('promoCode').value;

        if (promocode == 'winter21' && codeUsed == 0) {
            const BillAfterPromo = productsPrice * 0.2;
            productsPrice = productsPrice - BillAfterPromo;
            codeUsed = 1;
            document.getElementById('alert').style.display = "none";
            setPrice(productsPrice);
            setCode(20);
        }
        else if (codeUsed != 1) {
            setPrice(productsPrice);
            setCode(0);
            document.getElementById('alert').style.display = "block";
        }
    }
    const handleProceedToShipping = () => {
            history.push('/placeOrder', [products, price, code]);
       
    }
   
    return (
        <div className='container'>
            <section className='orderShow'>

                <section className='eachOrderShow row'>
                    <section className='orderDetails col-12 col-md-8'>
                        <div className='OrderTitle'>
                            <h2>Proceed to <span className='title'>ORDER</span></h2>
                            <p>Add promo code - 'winter21' to get 20% OFF </p>
                        </div>
                        <div className='orderDetailsShow row'>
                            <article className='col-12 col-sm-4'>
                                <section className='orderImgPart'>
                                    <img src={products.img} />
                                </section>
                            </article>
                            <article className='col-12 col-sm-8 py-3 px-5'>
                                <h4 className='text-start'>{products.productname}</h4>
                               
                                <h5 className='text-start'>Tk. {products.price}</h5>
                            </article>
                        </div>



                    </section>
                    <section className='cart col-12 col-md-4'>
                        <h2 className='mb-5'>Checkout Summary</h2>
                        <div className='cartDetails'>
                            <h5 className='text-start'> Payable Total: <span className='price'>Tk. {price}</span></h5>
                            <hr />
                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">Visa Card</div>
                            </label>

                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">Paypal</div>
                            </label>
                            <hr />
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add Promo Code" aria-label="Recipient's username" id='promoCode' aria-describedby="button-addon2" />
                                <button className="btn btn-success" type="button" id="button-addon2" onClick={hadnlePromoCode}>Apply</button>
                            </div>

                            <article className="alert alert-success alert alert-danger alert-dismissible fade show" id='alert' role="alert"
                                id="alert" >
                                <p className="mb-0">Enter the promo code correctly.</p>
                            </article>
                            <div >
                                <button className='btnSection my-3 mx-2' onClick={handleProceedToShipping} >Place Order</button>
                            </div>
                        </div>

                    </section>


                </section>
            </section>
        </div>
    );
};

export default Order;