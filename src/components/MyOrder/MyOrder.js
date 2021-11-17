import React from 'react';
import DeliveryUpdate from '../DeliveryUpdate/DeliveryUpdate';
import MyOrderDisplay from '../MyOrderDisplay/MyOrderDisplay';
import './MyOrder.css'
import { useEffect, useState } from 'react';
import MyPendingOrder from '../MyPendingOrder/MyPendingOrder';


const MyOrder = () => {

    const [myOrder, setmyOrder] = useState([]);
    const [pendingOrder, setPendingOrder] = useState([]);

    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/orderrequestdisplay`)
            .then(res => res.json())
            .then(data => {
                setPendingOrder(data.orderRequestDisplay);
            });
    }, []);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/allorderdisplay`)
            .then(res => res.json())
            .then(data => {
                setmyOrder(data.allOrderDisplay);

              
            });
    }, []);

    return (
        <div>
            <section className='myOrder'>
                <DeliveryUpdate></DeliveryUpdate>

                <article >
                    {
                        pendingOrder.map(pendingOrder => <MyPendingOrder
                            key={pendingOrder.key}
                            myOrder={pendingOrder}
                        >
                        </MyPendingOrder>)
                    }
                </article>
                <article >
                    {
                        myOrder.map(myOrder => <MyOrderDisplay
                            key={myOrder.key}
                            myOrder={myOrder}
                        >
                        </MyOrderDisplay>)
                    }
                </article>


            </section>

        </div>
    );
};

export default MyOrder;