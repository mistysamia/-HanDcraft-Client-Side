import React from 'react';
import './ManageProduct.css'
import { useEffect, useState } from 'react';
import AddNewService from '../AddNewService/AddNewService';
import DisplayAllProduct from '../DisplayAllProduct/DisplayAllProduct';


const ManageProduct = () => {


    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {

                setDisplayProducts(data.products);
            });
    }, []);

    let productNo = 1;
    return (
        <div className=''>
            <article className='manageProductsTable'>
                <h2 className='mb-5'>Product List</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Product Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayProducts.map(Product => <DisplayAllProduct
                                    key={Product.key}
                                    products={Product}
                                 productNo={productNo++}
                                >
                                </DisplayAllProduct>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    );
};

export default ManageProduct;