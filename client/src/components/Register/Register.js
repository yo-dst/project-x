import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./styles.css";

const   Register = () => {
    return (
        <div className="register">
            <h2 className="register-title">Créer un compte</h2>
            <Form className="register-form">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormFirstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormLastname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row style={{justifyContent: "center", marginTop: "20px"}}>
                    <Button type="submit" size="lg">S'inscrire</Button>
                </Form.Row>
            </Form>
        </div>
    );
};

export default Register;