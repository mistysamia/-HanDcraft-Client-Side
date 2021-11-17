import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.svg';
import './Header.css';
import { SiSnapcraft } from "react-icons/si";
import $ from "jquery";
import { useEffect, useState } from 'react';


const Header = () => {
    const { user, logOut } = useAuth();
    const nameIs = true;
    const nameAvailable = user.displayName ? user.displayName : '';

    console.log("nameAvailable  ", nameAvailable);
    const firstName = nameAvailable.substring(0, nameAvailable.indexOf(" "));
    let name = 0;
    if (firstName.length > 0)
        name = firstName;
    else
        name = nameAvailable;


    const [displayAdmin, setDisplayAdmin] = useState([]);
    useEffect(() => {
        fetch(`https://vast-woodland-49902.herokuapp.com/admindisplay`)
            .then(res => res.json())
            .then(data => {
                setDisplayAdmin(data.admins);
            });
    }, []);

    let setting = 0;
    displayAdmin.map(admin => {
        if (user.email == admin.email) {
            setting = 1;
        }
    }
    );

    console.log("set ",user.email," ",setting);


    return (
        <div >

            <nav className="navbar fixed-top navbar-expand-lg  navbar-dark HeaderBgColor">
                <div className="container-fluid">
                    <NavLink to="/home" style={{ color: 'white' }}><a className="nav-link active  navImg" aria-current="page" href="" ><SiSnapcraft></SiSnapcraft> <span className='title'>Han<span className='titleDay'>D</span>Craft</span></a></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto  mt-3">
                            <NavLink to="/explore"> <a className="nav-link active pageName" href="">Explore</a></NavLink>
                            {user.email && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">DashBoard</a>
                                

                               {setting==0 &&
                                    <ul className="dropdown-menu dp">
                                    <li><NavLink to="/pay"><a className="dropdown-item" href="#">Pay</a></NavLink></li>
                                    <li><NavLink to="/myorder"><a className="dropdown-item" href="#">My Orders</a></NavLink></li>
                                    <li><NavLink to="/reviewpost"><a className="dropdown-item" href="#">Review</a></NavLink></li>
                                </ul>
                               }
                                {setting==1 &&
                                    <ul className="dropdown-menu dp">
                                    <li><NavLink to="/addadmin"><a className="dropdown-item" href="#">Add Admin</a></NavLink></li>
                                    <li><NavLink to="/newservice"><a className="dropdown-item" href="#">Addnew Service</a></NavLink></li>
                                    <li><NavLink to="/manageproduct"><a className="dropdown-item" href="#">Manage Products</a></NavLink></li>
                                    <li><NavLink to="/reviewadmin"><a className="dropdown-item" href="#">Manage Reviews</a></NavLink></li>
                                    <li><NavLink to="/ManageOrderRequest"><a className="dropdown-item" href="#">Manage All Orders</a></NavLink></li>
                                </ul>
                                }
                            </li>}


                            {
                                user.email ?
                                    <a onClick={logOut} href="" className='logoutBtn mt-2 ' style={{ color: 'white' }}>LOGOUT</a>
                                    :
                                    <NavLink to="/login" className=""><a className="nav-link active  " href="" >LOGIN</a></NavLink>
                            }

                        </ul>
                        <span className="navbar-text mt-3 userName">
                            {user.email && <p className='displayName mt-3'>Welcome {name} </p>}
                        </span>
                        <span className="navbar-text mt-3 userImg">
                            {user.photoURL && <img src={user.photoURL} />}

                        </span>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;