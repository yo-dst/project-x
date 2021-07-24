import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { signup } from "../../api/index";

const   Signup = () => {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSignup = (event) => {
        event.preventDefault();
        let userData = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        };
        signup(userData)
            .then((res) => {
                history.push("/login");
            })
            .catch((err) => {
                setPassword("");
                setError(err.response.data.msg);
            });  
    }

    return (
        <div className="register">
            <h2 className="register-title">Créer un compte</h2>
            {error}
            <Form className="register-form" onSubmit={handleSignup}>
                <Form.Row>
                        <Col>
                            <Form.Group controlId="registerFormUsername">
                                <Form.Label>Pseudo</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
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

export default Signup;