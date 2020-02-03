import React from "react";
import {
  
    CardImg,  CardBody, CardTitle, CardSubtitle, CardText,Button,Card,Col
  } from 'reactstrap';

function CardHomePage (props){
return (
    <Col md="4">
                <Card body>
                    <CardImg top width="100%" src={props.imgSrc} alt={props.imgTitle} title={props.imgTitle} />
                    <CardBody>
                    <CardTitle>{props.imgTitle}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="success">Inscreva-se</Button>
                    </CardBody>
                </Card>
    </Col>
);
}

export default CardHomePage;