import React from "react";
import TemporaryDrawer from "../component/TemporaryDrawer";
import data from "../../data/experience.json";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import CardsRow from "../component/CardsRow";


export default function Experiences() {
  return (
    <>
      <TemporaryDrawer />
      <Container fluid className="header animated animate__rubberBand">
        <Row className="align-items-center justify-content-center">
          <Col className="text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/7905/7905476.png"
              fluid
              className=""
              style={{ width: 100, height: 100, marginTop: "100px" }}
            />
            <h1>Experience</h1>
          </Col>
        </Row>

        <CardsRow />

      </Container>
    </>
  );
}
