import React, {useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Test from "./components/Test/Test";
import "./styles.css";
import { CSSTransition } from "react-transition-group";

const   App = () => {
    const [inProp, setInProp] = useState(false);
    return (
        //<Provider>
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        //</Provider>
    );
};

export default App;