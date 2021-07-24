import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";

import "./styles.css";

const myTestFunction = () => {

}

const MyComponenent = (props) => {
    return (
        <div style={{background: "yellow", width: "200px", height: "200px"}} onClick={e => props.setVal(!props.val)}>
            Click me to change val
        </div>
    );
} 

const Test = () => {
    const [val, setVal] = useState(true);

    return (
        <div style={{height: "500px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{marginBottom: "10%"}}>I AM HERE TO TEST</h1>
            <MyComponenent val={val} setVal={setVal} />
            <p>{val ? "true" : "false"}</p>
        </div>
    );
};

export default Test;