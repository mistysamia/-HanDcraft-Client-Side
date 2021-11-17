import React from 'react';
import '../Choose/Choose.css'
import chooseImg from '../../images/chooseImg.jpg'
import { BsColumnsGap } from "react-icons/bs";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsAsterisk } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BsLayers } from "react-icons/bs";
import { BsBoundingBox } from "react-icons/bs";

const Choose = () => {
    return (
        <div>
            <section className='chooseSection'>
                <article className='chooseSectionImg'>
                    <img src={chooseImg} />
                </article>
                <article className='chooseSectionDetails'>
                    <p className='title'>Your Benefits</p>
                    <h1>Why Choose Us</h1>
                    <p>Discover all of our Offers in activities, flights and hotels. Benidorm awaits you! All tourist information available. Plan your trip and enjoy more than 300 sunny days! Guaranteed fun.</p>

                    <div className='listSection'>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsFillDiagram3Fill /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best Overall</p>
                                <p className='details'>Their eclectic trips are extremely popular.</p>
                            </div>
                        </article>

                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsAsterisk /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best Budget</p>
                                <p className='details'>With cycling, trekking and  volunteer has a wide range.</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsColumnsGap /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best for Families</p>
                                <p className='details'>The company's destination portfolio ranges .</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsFullscreenExit /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best for Europe</p>
                                <p className='details'>The expert knowledge and guides in which they operate.</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsLayers /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best Nature Tour</p>
                                <p className='details'>U.K.-based Naturetrek was founded predominantly  bird watching  .</p>
                            </div>
                        </article>
                        <article className='eachList'>
                            <div className='iconSection'>
                                <h3>  <BsBoundingBox /> </h3>
                            </div>
                            <div className='detailsSection'>
                                <p className='title'>Best Cruise</p>
                                <p className='details'>Every participant will have an opportunity.</p>
                            </div>
                        </article>
                    </div>
                </article>

            </section>
        </div>
    );
};

export default Choose;