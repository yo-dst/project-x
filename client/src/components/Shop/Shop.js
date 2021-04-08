import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap"; 
import "./styles.css";
import Customization from "./Customization/Customization";

const   Shop = () => {
    return (
        <div className="shop">
            <h2 className="shop-title">Shop</h2>
            <Customization />
        </div>
    );
};

export default Shop;