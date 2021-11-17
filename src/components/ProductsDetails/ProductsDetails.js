import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './ProductsDetails.css';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import { packageDetailsBG } from '../../images/packageDetailsBG.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const ProductsDetails = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state);
    }, [location]);
    const onSubmit = data => {
        console.log(data)
    }
    const products = location.state;

    let quantityBtn=1;
    const handleProceedToShipping = () => {
         history.push('/order', products);
    }


    return (
        <div>
            <section className='productShow'>
                <section className='eachProductShow'>
                    <section className='productShowImg'>
                        <section className='productShowImgPart'>
                            <img src={products.img} />
                        </section>
                    </section>
                    <section className='productShowDetails'>
                        <h2>{products.productname} </h2>
                        {products.quantity>0 &&
                           <p className='instock'>In-Stock</p>
                        }
                        {products.quantity<=0 &&
                           <p  className='stockout'>Stock Out</p>
                        }
                        
                        <h6><span className=' mx-1'>Tk.{products.price}</span></h6>

                      
                        <p className='text-start mt-3'>Made-By : {products.madeby} </p>
                        <p className='text-start mt-3'>Usage : {products.usage} </p>
                        <p className='text-start'>Care : {products.care}</p>
                        <p className='text-start'>Made-In : {products.madein}</p>
                       

                        <StarRatings

                            rating={products.review}
                            starDimension="23px"
                            starSpacing="4px"
                            starEmptyColor='rgb(177, 173, 173)'
                            starRatedColor='rgb(252, 179, 23)'
                        />
                        <br/>

                        {products.quantity >0  &&
                              <button className=' btnSection my-3 mx-2 mt-4' onClick={handleProceedToShipping}><AiOutlineShoppingCart className='cart'></AiOutlineShoppingCart>Add To Cart</button>
                        }
                        {products.quantity <=0 &&
                            <button className='btn disabled btnSection my-3 mx-2 mt-4' onClick={handleProceedToShipping}>Add To Cart</button>
                        }
                      

                        
                    </section>
                </section>
            </section>
        </div>
    );
};

export default ProductsDetails;