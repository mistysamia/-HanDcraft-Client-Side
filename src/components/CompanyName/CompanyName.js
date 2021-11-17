import React from 'react';
import './CompanyName.css'

const CompanyName = () => {
    return (
        <div>
            <section className='companyName'>
                <h1 className='mt-5'>TRUSTED BY <span className='spanCode'>20,000</span> COMPANIES</h1>
                <div className=' my-5 companyImg'>
                    <article className='imgSection mb-5'>
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/1.png' />
                    </article>
                    <article className='imgSection mb-5'>
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/2.png' />
                    </article>
                    <article className='imgSection mb-5'>
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/3.png' />
                    </article>
                    <article className='imgSection mb-5' >
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/4.png' />
                    </article>
                    <article className='imgSection mb-5'>
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/5.png' />
                    </article>
                    <article className='imgSection mb-5'>
                        <img src='https://templates.envytheme.com/zash/default/assets/img/partner-image/6.png' />
                    </article>
                </div>
            </section>
        </div>
    );
};

export default CompanyName;