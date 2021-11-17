import React from 'react';
import './DeliveryUpdate.css'
import { MdTravelExplore } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";


const DeliveryUpdate = () => {
    return (
        <div>
            <section className='deliveryUpdate'>
                <p className='text-start title'>Your Order Delivery Information</p>
                <section className='deliveryProcedure row'>

                    <article className='col-3'>
                        <div className='eachdeliveryUpdateImg'>
                            <article className='deliveryUpdateImg'>
                                <MdTravelExplore></MdTravelExplore>
                            </article>
                        </div>
                        <div className='imgTitle'>
                            <p>Order Placed</p>
                        </div>
                    </article>

                    <article className='col-3'>
                        <div className='eachdeliveryUpdateImg'>
                            <article className='deliveryUpdateImg'>
                                <MdCardTravel></MdCardTravel>
                            </article>
                        </div>
                        <div className='imgTitle'>
                            <p>Order Confirmed</p>
                        </div>
                    </article>

                    <article className='col-3'>
                        <div className='eachdeliveryUpdateImg '>
                            <article className='deliveryUpdateImg right'>
                                <SiYourtraveldottv></SiYourtraveldottv>
                            </article>
                        </div>
                        <div className='imgTitle'>
                            <p>On Tour</p>
                        </div>
                    </article>

                    <article className='col-3'>
                        <div className='eachdeliveryUpdateImg '>
                            <article className='deliveryUpdateImg rightNotDone'>
                                <FiThumbsUp></FiThumbsUp>
                            </article>
                        </div>
                        <div className='imgTitle'>
                            <p>Tour Successful</p>
                        </div>
                    </article>
                </section>
            </section>
        </div>
    );
};

export default DeliveryUpdate;