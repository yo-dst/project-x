import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

const   Login = () => {
    return (
        <div className="login">
            <h2 className="login-title">Connectez-vous</h2>
            <Form className="login-form">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="loginFormEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="loginFormPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"></Form.Control>
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