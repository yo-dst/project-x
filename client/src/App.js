import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Avis from "./components/Avis/Avis";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Account from "./components/User/Account/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test/Test";
import { updateUser } from "./actions/user";

const   App = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(updateUser());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/shop" component={Shop} />
                <Route path="/avis" component={Avis} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />
                <Route path="/account" component={Account} />
                <Route path="/test" component={Test} />
                <Redirect to="/shop" />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;