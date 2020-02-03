import React from "react";
import { Container, Form, Input, Row, Label, Button } from "reactstrap";


class Contact extends React.Component {

    render (){
        return (

            <Container className="p-5">
                <Form >
                    <h1>CONTACT US</h1>
                    <Row className="col-md-6  p-2" >
                        <Label>Full name visitor</Label>
                            <Input type="text" placeholder="white your name" />
                    </Row>
                    <Row className="col-md-6  p-2" >
                            <Input type="email" placeholder="white your email" />
                    </Row>
                    <Row className="col-md-6  p-2" >
                            <Input type="text" placeholder="white subject" />
                    </Row>
                    <Row className="col-md-6  p-2" >
                        <textarea className="form-control"></textarea>
                    </Row>
                    <Row className="col-md-6  p-2" >
                    <Button className="col-md-12"  color="success">Submit</Button>
                    </Row>
                </Form>
            </Container>
            
        )
    }
}
export default Contact;