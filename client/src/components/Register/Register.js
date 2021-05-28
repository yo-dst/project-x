import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { register } from "../../api/index";

const   Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleRegister = (event) => {
        event.preventDefault();

        let userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        };

        register(userData)
            .then((data) => {
                if (data.success)
                    history.push("/login");
                else 
                    setPassword("");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="register">
            <h2 className="register-title">Créer un compte</h2>
            <Form className="register-form" onSubmit={handleRegister}>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormFirstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control 
                                type="text"
                                value={firstname}
                                onChange={(event) => setFirstname(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormLastname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control 
                                type="text"
                                value={lastname}
                                onChange={(event) => setLastname(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="registerFormEmail">
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
                        <Form.Group controlId="registerFormPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control 
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
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