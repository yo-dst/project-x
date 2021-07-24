import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { NavLink, Router, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { login } from "../../actions/user";

const   Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.user || user.isLoading)
            history.push("/account");
        else if (user.err)
            setPassword("");
    }, [user, history]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="login">
            <h2 className="login-title">Connectez-vous</h2>
            {user.err}
            <Form className="login-form" onSubmit={handleLogin}>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="loginFormEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="loginFormPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row style={{justifyContent: "center", marginTop: "20px"}}>
                    <Button type="submit" size="lg">Connexion</Button>
                </Form.Row>
            </Form>
            <NavLink to="/resetPassword" className="reset-password-link">
                Mot de passe oublié ?
            </NavLink>
            <NavLink to="/register" className="register-button">
                <Button type="button" size="lg">Créer un compte</Button>
            </NavLink>
        </div>
    );  
};

export default Login;