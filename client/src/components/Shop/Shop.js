import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {getProducts} from "../../api/index";
import "./styles.css";
import Customization from "./Customization/Customization";

const   Shop = () => {
    const [val, setVal] = useState("No cookie.");
    const url = "http://localhost:5000";
    const tab = ["CECI", "EST", "UN", "TEST"];

    const callRefreshToken = async () => {
        try {
            let res = await axios.post(url + "/auth/refresh_token", undefined, {withCredentials: true});
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const printCookies = async () => {
        try {
            await axios.get(url + "/cookies", {withCredentials: true});
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="shop">
            <Button>
                <NavLink to="/test" style={{color: "white"}} activeStyle={{borderBottom: "2px groove black"}}>TEST</NavLink>
            </Button>
            <Button onClick={callRefreshToken}>CALL R_JWT</Button>
            <Button onClick={printCookies}>PRINT COOKIE</Button>
            <p>{val}</p>
            <h2 className="shop-title">Shop</h2>
            <Customization />
        </div>
    );
};

export default Shop;