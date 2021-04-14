import react, { useState } from "react";
import { Row, Col, Form, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

const   CustomForm = (props) => {
    const [descriptionFileName, setDescriptionFileName] = useState("Télécharger une image");
    const [locationFileName, setLocationFileName] = useState("Télécharger une image");

    return (
        <Form onSubmit="">
            <Form.Row className="custom-form-row">
                <Col md={{span: 5, offset: 1}}>
                    <Form.Group controlId="artworkDescription">
                        <Form.Label>
                            Description  
                            <OverlayTrigger
                                key="descriptionTooltip"
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltipDescription">
                                        Blablabla
                                    </Tooltip>
                                }
                            >
                                <FontAwesomeIcon icon={faInfoCircle} size="1x" style={{marginLeft: "10px"}} />
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control as="textarea" rows={3}></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={1} style={{textAlign: "center"}}>
                    <Form.Text style={{fontSize: "15px"}}>et/ou</Form.Text>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="artworkDescriptionFile" style={{margin: "0px"}}>
                        <Form.File
                            label={descriptionFileName}
                            data-browse="Parcourir"
                            custom
                            onChange={(e) => setDescriptionFileName(e.target.value.split("\\").pop())}
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="custom-form-row">
                <Col md={{span: 5, offset: 1}}>
                    <Form.Group controlId="artworkLocation">
                        <Form.Label>
                            Emplacement
                            <OverlayTrigger
                                key="descriptionTooltip"
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltipDescription">
                                        Blablabla
                                    </Tooltip>
                                }
                            >
                                <FontAwesomeIcon icon={faInfoCircle} size="1x" style={{marginLeft: "10px"}} />
                            </OverlayTrigger>
                        </Form.Label> 
                        <Form.Control as="textarea" rows={2}></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={1} style={{textAlign: "center"}}>
                    <Form.Text style={{fontSize: "15px"}}>et/ou</Form.Text>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="artworkLocationFile"  style={{margin: "0px"}}>
                        <Form.File
                            label={locationFileName}
                            data-browse="Parcourir" 
                            custom
                            onChange={(e) => setLocationFileName(e.target.value.split("\\").pop())}
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="custom-form-row">
                <Col md={{span: 8, offset: 1}}>
                    <Form.Group controlId="artworkColors">
                        <Form.Label>
                            Couleur(s) principale(s)
                            <OverlayTrigger
                                key="colorsTooltip"
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltipColors">
                                        Blablabla
                                    </Tooltip>
                                }
                            >
                                <FontAwesomeIcon icon={faInfoCircle} size="1x" style={{marginLeft: "10px"}} />
                            </OverlayTrigger>
                        </Form.Label>
                        <div> {/* Penser à key with map + rendre accessible les couleurs par l'admin */}
                            {["red", "blue", "green", "black", "white", "yellow"].map((color) => (
                                <Form.Check inline>
                                    <Form.Check.Input type="checkbox" style={{display: "none"}} />
                                    <Form.Check.Label>
                                        <Button style={{background: `${color}`}} className="checkbox-label"></Button>
                                    </Form.Check.Label>
                                </Form.Check>
                            ))}
                        </div>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="custom-form-row">
                <Col md={{span: 2, offset: 1}}>
                    <Form.Group controlId="artworkSize">
                        <Form.Label>
                            Dimensions
                            <OverlayTrigger
                                key="sizeTooltip"
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltipSize">
                                        Blablabla
                                    </Tooltip>
                                }
                            >
                                <FontAwesomeIcon icon={faInfoCircle} size="1x" style={{marginLeft: "10px"}} />
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control as="select" onChange={props.handleSelectChange}>
                                <option value="20">20 x 20 (cm)</option>
                                <option value="40">40 x 40 (cm)</option>
                                <option value="80">80 x 80 (cm)</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row style={{marginTop: "60px"}}>
                <Col md={{span: 6, offset: 1}}>
                    <Form.Group>
                        <Button type="submit" style={{marginRight: "10px"}}>Ajouter au panier</Button>
                        <Button type="submit" style={{marginLeft: "10px"}}>Sauvegarder</Button>
                    </Form.Group>    
                </Col>
                <Col md={{span: 2, offset: 2}} style={{display: "flex", justifyContent: "end"}}>
                    <Form.Group>
                        <Button type="button" style={{}}>Prix: 20€</Button>
                    </Form.Group>
                </Col>
            </Form.Row>
        </Form>
    )
}

const   Price = (selectedValue) => {
    let price;

    if (selectedValue == "20")
        price = "20";
    else if (selectedValue == "40")
        price = "35";
    else if (selectedValue == "80")
        price = "55";
    return (
        <Card.Text>{price} €</Card.Text>
    );
};

const   Customization = () => {
    const [selectedValue, setSelectedValue] = useState("20");

    const   handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <Card className="custom-card">
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Personnalisation de l'oeuvre</Card.Title>
                <CustomForm handleSelectChange={handleSelectChange} />
            </Card.Body>
        </Card>
    );
};

export default Customization;