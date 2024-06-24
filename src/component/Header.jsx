import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import data from "../../data/profil.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
export default function Header() {
  return (
    <>
      <TemporaryDrawer />
      <Container fluid className="header">
        <Row>
        
          <Col md={8} className="header1">
            <h1 style={{ marginLeft: "30%" }}>HI THERE!</h1>
            <h1 className="bigFont" style={{ marginLeft: "30%" }}>
              I'M {data.nom} {data.prenom}
            </h1>
            <h3 style={{ marginLeft: "30%" }}>{data.profession} </h3>
            <p
              style={{
                marginLeft: "30%",
                marginRight: "10%",
                paddingTop: "15px",
              }}
            >
              {data.description}
            </p>
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                active
                style={{ marginRight: "12%", float: "right" }}
                onClick={() => {}}
              >
                Contact
              </Button>
            </Link>
          </Col>
          <Col md={4} className="header2 p-0">
            <Image src={data.photoDeProfil} fluid className="profil" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
