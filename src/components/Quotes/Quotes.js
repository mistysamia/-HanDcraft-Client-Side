import React from 'react';
import './Quotes.css'
import { SiKashflow } from "react-icons/si";
const Quotes = () => {
    return (
        <div>
            <section className='quotesDisplay'>
                <h3>  <SiKashflow /> </h3>
                <p>“If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to. Find out how other people live and eat and cook. Learn from them – wherever you go”</p>
                <h2>– Anthony Bourdain</h2>
            </section>
        </div>
    );
};

export default Quotes;