import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

import "./styles.css";
import Customization from "./Customization/Customization";
import config from "../../config";
import { token } from "../../api/index";

const   Shop = () => {
    const [val, setVal] = useState("No cookie.");

    const createCookie = () => {
        fetch(config.serverUrl + "createCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }
    
    const getCookie = () => {
        fetch(config.serverUrl + "getCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    const delCookie = () => {
        fetch(config.serverUrl + "delCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    const getToken = () => {
        token("12345")
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return (
        <div className="shop">
            <Button onClick={createCookie}>CREATE COOKIE</Button>
            <Button onClick={getCookie}>GET COOKIE</Button>
            <Button onClick={delCookie}>DEL COOKIE</Button>
            <Button onClick={getToken}>GET TOKEN</Button>
            <p>{val}</p>
            <h2 className="shop-title">Shop</h2>
            <Customization />
        </div>
    );
};

export default Shop;