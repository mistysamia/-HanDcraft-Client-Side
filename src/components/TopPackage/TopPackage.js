import React from 'react';
import './TopPackage.css';
import { SiAirplayaudio } from "react-icons/si";
import { SiApacheflink } from "react-icons/si";
import { SiAzurefunctions } from "react-icons/si";


const TopPackage = () => {
    return (
        <div>
            <section className='topPackage'>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                            <div className='packageDetailsIcon'>
                                <h3>  <SiAirplayaudio /> </h3>
                                <h2>Quasar Expeditions
</h2>
                                <hr className='w-50 ' />
                                <p>Quasar Expeditions is for adventurers. The highly specialized itineraries are designed to make guests feel like they're James Cook or Charles Darwin. "Quasar Expeditions' guides are the ultimate, passionate gatekeepers to the Galápagos Islands,"
                                </p>
                            </div>
                    </div>
                </article>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                    <div className='packageDetailsIcon'>
                                <h3>  <SiApacheflink /> </h3>
                                <h2>Mountain Lodges </h2>
                                <hr className='w-50 ' />
                                <p>The companies that made the list have the skills and connections to create itineraries that reflect their clients' personal interests. No. 3 VBT Bicycling  Vacations curates two-wheeled trips all over the globe.
                                </p>
                            </div>
                    </div>
                </article>
                <article className='eachTopPackage'>
                    <div className='packageDetails'>
                    <div className='packageDetailsIcon'>
                                <h3>  <SiAzurefunctions /> </h3>
                                <h2>Classic Journeys</h2>
                                <hr className='w-50 ' />
                                <p>Linking up with the right tour operator can take an amazing trip and turn it into a trip of a lifetime. This might seem like magic, but their in-the-know expertise and long-standing relationships open the doors for the seemingly impossible,
                                </p>
                            </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default TopPackage;