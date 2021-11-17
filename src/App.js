import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import { registerVersion } from '@firebase/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Packages from './components/Packages/Packages';
import Order from './components/Order/Order';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Header from './components/Header/Header';
import AllOrders from './components/AllOrders/AllOrders';
// import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import NewService from './components/NewService/NewService';
import MyOrder from './components/MyOrder/MyOrder';
import Error from './components/Error/Error';
import MyPendingOrder from './components/MyPendingOrder/MyPendingOrder';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import Explore from './components/Explore/Explore';
import Pay from './components/Pay/Pay';
import ReviewPost from './components/ReviewPost/ReviewPost';
import AddAdmin from './components/AddAdmin/AddAdmin';
import ManageProduct from './components/ManageProduct/ManageProduct';
import ReviewAdmin from './components/ReviewAdmin/ReviewAdmin';
import ManageOrderRequest from './components/ManageOrderRequest/ManageOrderRequest';
import DashBoard from './components/DashBoard/DashBoard';



function App() {
  return (
    <div className="App">
      <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/placeOrder">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <PrivateRoute path="/order">
                <Order></Order>
              </PrivateRoute>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/explore">
                <Explore></Explore>
              </Route>
              <PrivateRoute path="/productdetails">
                <ProductsDetails></ProductsDetails>
              </PrivateRoute>
              <PrivateRoute path="/pay">
                <Pay></Pay>
              </PrivateRoute>
              <PrivateRoute path="/pendingrequest">
                <MyPendingOrder></MyPendingOrder>
              </PrivateRoute>
              <PrivateRoute path="/reviewpost">
                <ReviewPost></ReviewPost>
              </PrivateRoute>
              <PrivateRoute path="/allorders">
                <AllOrders></AllOrders>
              </PrivateRoute>
              <PrivateRoute path="/addadmin">
                <AddAdmin></AddAdmin>
              </PrivateRoute>
              <PrivateRoute path="/manageproduct">
                <ManageProduct></ManageProduct>
              </PrivateRoute>
              <PrivateRoute path="/manageorderrequest">
                <ManageOrderRequest></ManageOrderRequest>
              </PrivateRoute>
              <PrivateRoute path="/myorder">
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path="/reviewadmin">
                <ReviewAdmin></ReviewAdmin>
              </PrivateRoute>
              <PrivateRoute path="/newservice">
                <NewService></NewService>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <DashBoard></DashBoard>
              </PrivateRoute>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
