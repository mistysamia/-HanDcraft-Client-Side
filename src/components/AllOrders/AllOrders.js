import React from 'react';
import allOrderImg1 from '../../images/allOrderImg1.jpg'
import allOrderImg2 from '../../images/allOrderImg2.jpg'
import allOrderImg3 from '../../images/allOrderImg3.jpg'
import OrderRequest from '../OrderRequest/OrderRequest';
import { useEffect, useState } from 'react';
import './AllOrders.css'
import Choose from '../Choose/Choose';
import AllOrdersDisplay from '../AllOrdersDisplay/AllOrdersDisplay';
import CompanyName from '../CompanyName/CompanyName';

const AllOrders = () => {


    const [packageRequest, setPackageRequest] = useState([]);
    const [displayRequest, setDisplayRequest] = useState([]);




    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/orderrequest`)
            .then(res => res.json())
            .then(data => {
                setPackageRequest(data.orderrequest);
                setDisplayRequest(data.orderrequest);
            });
    }, []);


    const [allOrderDisplay, setallOrderDisplay] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/allorderdisplay`)
            .then(res => res.json())
            .then(data => {
                setallOrderDisplay(data.allOrderDisplay);
            });
    }, []);

    return (
        <div>
            {/* Header Part Starts */}
            <section id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carouselImg">
                        <img src={allOrderImg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={allOrderImg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={allOrderImg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            {/* Header Part Ends */}


            <div className="container mb-5 newOrderReq">
                {displayRequest.length>0 ?
                    <div>
                        <h3 className='newOrdersTitle'>New Orders </h3>
                        <hr/>
                        <article className=''>
                            {
                                displayRequest.map(request => <OrderRequest
                                    key={request.key}
                                    request={request}>
                                </OrderRequest>)
                            }
                        </article>
                    </div>: <div>
                    <h3 className='newOrdersTitle text-center'>No New Order Request </h3>
                    </div>
                }
            </div>

            <Choose></Choose>


            <div className=''>
                <article className='allOrderDisplay'>
                    {
                        allOrderDisplay.map(request => <AllOrdersDisplay
                            key={request.key}
                            orders={request}
                        >
                        </AllOrdersDisplay>)
                    }
                </article>
            </div>
            <CompanyName></CompanyName>

        </div>
    );
};

export default AllOrders;