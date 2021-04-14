import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./styles.css";


const   Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <Form className="contact-form">
                <Form.Row>
                    <Form.Group as={Col} controlId="contactFormFirstname">
                        <Form.Control type="text" placeholder="Nom"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contactFormLastname" style={{marginLeft: "15px"}}>
                        <Form.Control type="text" placeholder="Prénom"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{marginTop: "10px"}}>
                    <Form.Group as={Col} controlId="contactFormEmail">
                        <Form.Control type="mail" placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contactFormMobile" style={{marginLeft: "15px"}}>
                        <Form.Control type="text" placeholder="Téléphone mobile"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{marginTop: "10px"}}>
                    <Form.Group as={Col} md={4} controlId="contactFormZIPCode">
                        <Form.Control type="text" placeholder="Code postal"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contactFormCity" style={{marginLeft: "15px"}}>
                        <Form.Control type="text" placeholder="Ville"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{marginTop: "10px"}}>
                    <Form.Group as={Col} controlId="contactFormQuestionSubject">
                        <Form.Control as="select">
                            <option>Votre question est liée à ...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} style={{marginLeft: "15px"}}>
                        <Form.Control type="text" placeholder="Numéro de commande"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{marginTop: "10px"}}>
                    <Form.Group as={Col} controlId="contactFormMessage">
                        <Form.Control as="textarea" rows={5} placeholder="Message"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{marginTop: "10px"}}>
                    <Col>
                        <Button>Captcha ici</Button>
                    </Col>
                </Form.Row>
                <Form.Row style={{marginTop: "25px", marginBottom: "50px"}}>
                    <Col>
                        <Button type="submit">Envoyer</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
        
    );
};

export default Contact;