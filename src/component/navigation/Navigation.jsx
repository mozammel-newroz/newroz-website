import React from "react";
import {  Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";
import ServiceDetails from "../../pages/ServiceDetails";
import PortfolioItem from "../../pages/portfolio/PortfolioItem";
import Portfolio from "../../pages/portfolio/Portfolio";

const Navigation = () => {
  return (
    <div>
 
        <Switch>
          <Route path="/portfolio/:id">
            <PortfolioItem />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/services/:id">
            <ServiceDetails />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
       
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
  
    </div>
  );
};

export default Navigation;
