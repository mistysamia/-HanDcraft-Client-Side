import React from 'react';
import './ManageOrderRequest.css'
import { useEffect, useState } from 'react';
import ManageOrderRequestDisplay from '../ManageOrderRequestDisplay/ManageOrderRequestDisplay';
import ApprovedOrderDisplay from '../ApprovedOrderDisplay/ApprovedOrderDisplay';

const ManageOrderRequest = () => {

    const [pendingOrder, setPendingOrder] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/orderrequestdisplay`)
            .then(res => res.json())
            .then(data => {
                setPendingOrder(data.orderRequestDisplay);
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


    let orderListNo = 1 , allOrderNo=1;

    return (
        <div>
             <article className='manageOrderRequestTable'>
                <h2 className='mb-5'>New Order Request</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact </th>
                                <th scope="col">Address</th>
                                <th scope="col">Price </th>
                                <th scope="col">Product Id</th>
                                <th scope="col">Status</th>
                                <th scope="col">Add</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pendingOrder.map(pendingOrder => <ManageOrderRequestDisplay
                                    key={pendingOrder.key}
                                    pendingOrder={pendingOrder}
                                    orderListNo={orderListNo++}
                                >
                                </ManageOrderRequestDisplay>

                                )
                            }
                        </tbody>
                    </table>
                </div>

                <h2 className='my-5'>All Order List</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col" >Order Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact </th>
                                <th scope="col">Address</th>
                                <th scope="col">Price </th>
                                <th scope="col">Product Id</th>
                                <th scope="col">Status</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrderDisplay.map(allOrder => <ApprovedOrderDisplay
                                    key={allOrder.key}
                                    allOrder={allOrder}
                                    allOrderNo={allOrderNo++}
                                >
                                </ApprovedOrderDisplay>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </article>
            
        </div>
    );
};

export default ManageOrderRequest;
