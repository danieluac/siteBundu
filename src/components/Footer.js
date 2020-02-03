import React from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
   
    render()
    {
        return (
            <footer className="sm-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            Hi friend
                        </Col>
                        <Col className="p-0 d-flex" md={3}  sm={12}>
                            kepp in touch me, now!..
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer