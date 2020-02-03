import React from "react";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


class About extends React.Component {

    render (){
        return (
            <Row >
                 
            <Col className="col-lg-offset-5 p-5" sm="7">
              <h1>ABOUT US</h1>
              <Card body>
                <CardTitle>Artisan School</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               
              </Card>
            </Col>
          </Row>
            
            
        )
    }
}
export default About;