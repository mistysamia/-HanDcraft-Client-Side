import React from 'react';
import './Article.css'
import articleImg1 from '../../images/articleImg1.jpg'
import articleImg2 from '../../images/articleImg2.jpg'
import { SiDpd } from "react-icons/si";
import { SiDeepnote } from "react-icons/si";

const Article = () => {
    return (
        <div className='article'>
            <section className='articleSection'>

                {/* Left Article Part Starts */}
                <article className='leftArticle'>
                    <section className='leftArticleSection'>
                        <article className='ArticleImg'>
                            <img src={articleImg1} />
                        </article>
                        <article className=' ArticleDetails'>
                            <div>
                                <div className='ArticleDetailsIcon'>
                                    <h3>  <SiDpd /> </h3>
                                </div>
                                <div className='title mt-4'>
                                    <p>Expedia Group</p>
                                </div>
                                <div className='borderSection mb-4'></div>
                                <div>
                                    <p className='text-center'>
                                        We connect partners big and small to the universe of travelers, giving access to data, tools and technology that empowers, maximizes potential and builds their business.
                                    </p>
                                </div>
                                <a href='https://www.expediagroup.com/home/default.aspx' target='_blank'> <button className='btnSection mt-3' >Learn More</button></a>
                            </div>
                        </article>
                    </section>
                </article>
                {/* Left Article Part Ends */}

                {/* Right Article Part Starts */}
                <article className='rightArticle'>
                    <section className='rightArticleSection'>
                        <article className=' ArticleImg'>
                            <img src={articleImg2} />
                        </article>
                        <article className=' ArticleDetails'>
                            <div>
                                <div className='ArticleDetailsIcon'>
                                    <h3>  <SiDeepnote /> </h3>
                                </div>
                                <div className='title mt-4'>
                                    <p>Booking Holdings</p>
                                </div>
                                <div className='borderSection mb-4'></div>
                                <div>
                                    <p className='text-center'>
                                    No matter who you are, or where you are going, our travel brands help every type of traveler not only find the trip that’s right for them, but get the best value every time.
                                    </p>
                                </div>
                                <a href='https://www.booking.com/index.html?aid=378266;label=misc-Blcv4qbj48lc_GW*J_7cwgS267778093390:pl:ta:p1:p22,563,000:ac:ap:neg:fi:tikwd-484181685061:lp9069450:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YYriJK-Ikd_dLBPOo0BdMww;ws=&gclid=Cj0KCQiAsqOMBhDFARIsAFBTN3c0GuykoFs40QuAD_sw7XM2getXqAEYW7JsSnkdSZO7YtZRLsVhMWoaApCeEALw_wcB' target='_blank'> <button className='btnSection mt-3' >Learn More</button></a>
                            </div>
                        </article>
                    </section>
                </article>

                {/* Right Article Part Ends */}

            </section>
        </div>
    );
};

export default Article;