import React from 'react';
import { faShoppingCart, fastar } from '@fortawesome/free-solid-svg-icons';
import './ProductDisplay.css';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';
import { SiVerizon } from "react-icons/si";
import { Link } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';


const ProductDisplay = (props) => {

    const { img, productname, price, review, quantity } = props.products;

    const history = useHistory();

    const handleToShowDetails = () => {
        history.push('/productdetails', props.products);
    }


    return (
        <div>
            <section className='eachProducts'>
                <section className='eachProductDisplay'>
                    <div className='eachProductImg'>
                        <img src={img} />
                    </div>
                    <div className='eachProductDisplayDetails'>

                        <div className='productName'>
                            <h6 className='text-start mt-2'>  {productname}</h6>
                        </div>
                        
                        <p className='text-start'><strong>Price : </strong> Tk.{price}</p>
                        {quantity > 0 &&
                            <p className='text-start instock'>In-Stock</p>
                        }
                        {quantity <= 0 &&
                            <p className='text-start outstock'>Stock Out</p>
                        }


                        <div>
                            <button className='btnSectionDetails my-3 mx-2' onClick={handleToShowDetails} >Quick View</button>
                        </div>
                    </div>
                </section>
            </section>
        </div >
    );
};

export default ProductDisplay;