import classNames from "classnames";
import "./App.css";
import WorkOrders from "./WorkOrders";
import ProductRow from "./ProductRow";
import Header from "./Header";
import BtnGroup from "./BtnGroup";
import Sidebar from "./Sidebar";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListingPage from "./ListingPage";
import HomePage from "./HomePage";

import React from "react";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ListingPage" component={ListingPage} />
        {/* <Route path='/login' component={Loginpage}/>
          <Route path='/AdminLogin' component={AdminLogin}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/admindashboard' component={AdminDashboard}/>
          <Route path='/newbooking' component={NewBooking}/>
          <Route path='/mybooking' component={MyBooking}/>
          <Route path='/allbooking' component={AllBooking}/> */}
      </Switch>
    </Router>
  );
}
