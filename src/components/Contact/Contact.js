import React from 'react';
import './Contact.css';

import footerImg from '../../images/footerImg.jpg'
const Contact = (props) => {
    return (
        <div>
            <section className='ContactPart'>
                <div className='container'>
                    <section className='row '>


                        <div className='col-12 col-sm-6 col-md-6'>
                            <article className=' ContactDetails'>
                                <h2 className='mb-3'><span>Holi</span> Day</h2>
                                <p>Over 900,000 Hotels Worldwide. Book Now, Pay When You Stay. No Booking Fees. 24/7 Customer Service. Read Real Guest Reviews. Get Instant Confirmation. Save 10% with Genius. Best Price Guarantee. We speak your language. Types: Hotels, Apartments, Villas.</p>
                                <h4 className='mt-5'>Contact Us</h4>
                                <div class="input-group mb-3 mt-4 mailUs">
                                    <input type="email" className="form-control" placeholder="Enter your mail" aria-label="Enter your mail" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-danger" type="button" id="button-addon2">Enter</button>
                                </div>
                            </article>
                        </div>


                        <article className='col-12 col-sm-6 col-md-6 eachFootercol'>
                            <div className='ContactImg'>
                                <img src={props.img} className='img-fluid' />
                            </div>
                        </article>

                    </section>

                </div>

            </section>
        </div>
    );
};

export default Contact;