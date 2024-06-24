import React from "react";
import TemporaryDrawer from "../component/TemporaryDrawer";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import UnstyledTextareaIntroduction from "../component/UnstyledTextareaIntroduction";

export default function Contact() {
  return (
    <>
      <TemporaryDrawer  />
      <Container fluid className="ContactContainer">
        <Row>
          <Col
            md={5}
            className="contactImage bigFont"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              paddingTop: "25%",
            }}
          >
            {" "}
            Call Me
          </Col>
          <Col md={7}>
          
            <Form style={{ width: "60%", margin: "25% 25%"}}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label><br/>
                <UnstyledTextareaIntroduction type="text" name="name" required />
              </Form.Group>
              
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label><br/>
                <UnstyledTextareaIntroduction type="text" name="name" required />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label><br/>
                <UnstyledTextareaIntroduction type="text" name="name" required />
              </Form.Group>

              <Form.Group controlId="formRememberMe">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  name="rememberMe"
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{marginLeft:"35%"}}>
                Create Contact
              </Button>
            </Form>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
