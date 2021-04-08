import react, { useState } from "react";
import { Row, Col, Form, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

const   renderColor = (color) => {
    return (
        <div className={`checkbox-label checkbox-label-${color}`}></div>
    );
}

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
                    <Form.Group style={{margin: "0px"}}>
                        <Form.File
                            id="artworkDescriptionFile" 
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
                    <Form.Group style={{margin: "0px"}}>
                        <Form.File 
                            id="artworkLocationFile" 
                            label={locationFileName}
                            data-browse="Parcourir" 
                            custom
                            onChange={(e) => setLocationFileName(e.target.value.split("\\").pop())}
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="custom-form-row">
                <Col md={{offset: 1}}>
                        
                    {/*<Form.Group controlId="artworkColors">
                        <Form.Label>Couleurs principales</Form.Label>
    
                        <div key="inline-checkbox">
                            <Form.Check inline label={renderColor("blue")} type="checkbox" id="custom-color-blue" /> 
                            <Form.Check inline label={renderColor("red")} type="checkbox" id="custom-color-red" /> 
                            <Form.Check inline label={renderColor("green")} type="checkbox" id="custom-color-green" /> 
                        </div>
                            </Form.Group>*/}
                </Col>
            </Form.Row>
            <Form.Row className="custom-form-row" style={{background: "green"}}>
                <Col md={{span: 4, offset: 1}}>
                    <Form.Group controlId="artworkSize">
                        <Form.Label>Dimensions</Form.Label>
                        <Form.Control as="select" onChange={props.handleSelectChange}>
                                <option value="20">20 x 20 (cm)</option>
                                <option value="40">40 x 40 (cm)</option>
                                <option value="80">80 x 80 (cm)</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={{span: 3}} style={{background: "red"}}>
                    <div>20 €</div>
                </Col>
            </Form.Row>
            <Form.Row style={{marginTop: "60px", justifyContent: "center"}}>
                <Form.Group>
                    <Button type="submit" style={{marginRight: "10px"}}>Ajouter au panier</Button>
                    <Button type="submit" style={{marginLeft: "10px"}}>Sauvegarder</Button>
                </Form.Group>    
            </Form.Row>
        </Form>
    )
}

/*
const   CustomFormPrec = (props) => {
    return (
        <Form>
            <Form.Group as={Row} controlId="artworkSize">
                <Form.Label column md={2}>Dimensions</Form.Label>
                <Col md={2}>
                    <Form.Control as="select" onChange={props.handleSelectChange}>
                        <option value="20">20 x 20 (cm)</option>
                        <option value="40">40 x 40 (cm)</option>
                        <option value="80">80 x 80 (cm)</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="artworkDescription">
                <Form.Label column md={2}>Description</Form.Label>
                <Col md={9}>
                    <Form.Control as="textarea" rows={2}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="artworkColors">
                <Form.Label column md={2}>Couleurs principales</Form.Label>
                <div key="inline-checkbox">
                    <Form.Check inline label={renderColor("blue")} type="checkbox" id="custom-color-blue" /> 
                    <Form.Check inline label={renderColor("red")} type="checkbox" id="custom-color-red" /> 
                    <Form.Check inline label={renderColor("green")} type="checkbox" id="custom-color-green" /> 
                </div>
            </Form.Group>
            <Form.Group as={Row} controlId="artworkLocation">
                <Form.Label column md={2}>Emplacement</Form.Label>
                <Col md={3}>
                    <Form.File id="locationImg" label="" />
                </Col>
                <Col md={6}>
                    <Form.Control as="textarea" rows={2}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={{offset: 2}}>
                    <Button type="submit">Ajouter au panier</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};
*/

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