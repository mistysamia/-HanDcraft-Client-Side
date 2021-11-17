import React from 'react';
import './Sale.css';
import sale1 from '../../images/sale1.jpg'
import sale2 from '../../images/sale2.jpg'
import sale3 from '../../images/sale3.jpg'
import sale4 from '../../images/sale4.jpg'

const Sale = () => {
    return (
        <div>
            <section className='saleSection'>
                <h2 className='pt-5 pb-2'>Best Sale Right Now</h2>

                <section className='sales'>
                    <article className='eachImg'>
                      <a href='https://www.google.com/search?q=craft+in+bangladesh&oq=craft+in+ba&aqs=chrome.0.0i20i263i512j0i10j69i57j0i10j0i512j0i22i30l2j69i60.5837j0j7&sourceid=chrome&ie=UTF-8'> <img src={sale1} /></a> 
                    </article>
                   
                    <article className='eachImg'>
                      <a href='https://www.google.com/search?q=craft+in+bangladesh&oq=craft+in+ba&aqs=chrome.0.0i20i263i512j0i10j69i57j0i10j0i512j0i22i30l2j69i60.5837j0j7&sourceid=chrome&ie=UTF-8'> <img src={sale2} /></a> 
                    </article>

                    <article className='eachImg'>
                      <a href='https://www.google.com/search?q=craft+in+bangladesh&oq=craft+in+ba&aqs=chrome.0.0i20i263i512j0i10j69i57j0i10j0i512j0i22i30l2j69i60.5837j0j7&sourceid=chrome&ie=UTF-8'> <img src={sale3} /></a> 
                    </article>

                    <article className='eachImg'>
                      <a href='https://www.google.com/search?q=craft+in+bangladesh&oq=craft+in+ba&aqs=chrome.0.0i20i263i512j0i10j69i57j0i10j0i512j0i22i30l2j69i60.5837j0j7&sourceid=chrome&ie=UTF-8'> <img src={sale4} /></a> 
                    </article>
                </section>
            </section>


        </div>
    );
};

export default Sale;