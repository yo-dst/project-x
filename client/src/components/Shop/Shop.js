import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

import "./styles.css";
import Customization from "./Customization/Customization";

const   Shop = () => {
    const [val, setVal] = useState("No cookie.");
    const url = "http://localhost:5000/";

    const createCookie = () => {
        fetch(url + "createCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }
    
    const getCookie = () => {
        fetch(url + "getCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    const delCookie = () => {
        fetch(url + "delCookie", {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return (
        <div className="shop">
            <Button onClick={createCookie}>CREATE COOKIE</Button>
            <Button onClick={getCookie}>GET COOKIE</Button>
            <Button onClick={delCookie}>DEL COOKIE</Button>
            <p>{val}</p>
            <h2 className="shop-title">Shop</h2>
            <Customization />
        </div>
    );
};

export default Shop;