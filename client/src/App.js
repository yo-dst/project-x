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
import Avis from "./components/Avis/Avis";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./styles.css";
import { CSSTransition } from "react-transition-group";

const   App = () => {
    const [inProp, setInProp] = useState(false);
    return (
        //<Provider>
            <div>
                <Header />
                <Switch>
                    <Route path="/shop" component={Shop} />
                    <Route path="/avis" component={Avis} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect to="/shop" />
                </Switch>
                <Footer />
            </div>
        //</Provider>
    );
};

const   App2 = () => {
    return (
        <Test />
    );
}

export default App;