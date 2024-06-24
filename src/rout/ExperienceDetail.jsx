import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/experience.json";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import TemporaryDrawer from "../component/TemporaryDrawer";

export default function ExperienceDetail() {
  const { postId } = useParams(); // Récupère l'ID du poste de l'URL
  // Trouve le poste correspondant dans les données en utilisant l'ID
  const poste = data.find((poste) => poste.id === postId);
  if (!poste) {
    return <div>Poste non trouvé</div>;
  }

  return (
    <>
      <Container fluid>
        <Card
          className="bg-dark text-white"
          style={{ borderRadius: 0, border: "none" }}
        >
          <Card.Img
            src={poste.photo}
            alt="Card image"
            style={{ borderRadius: 0, height: 750 }}
          />
          <Card.ImgOverlay style={{ color: "#1a2127" }}>
            <TemporaryDrawer />
            <Card.Title
              style={{ fontSize: "6em", paddingTop: 200, textAlign: "center" }}
            >
              {poste.poste}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <Container fluid className="header" style={{ paddingTop: "50px" }}>
        <Row className="" style={{ margin: 15 }}>
          <Col className="">
            <h2>Detail de mon travail</h2>
            <p>{poste.description_poste}</p>
          </Col>
        </Row>

        <Row xs={1} md={3} className="g-4" style={{ margin: 15 }}>
          {/* Utilisez map pour itérer sur les données de realisations_responsabilites */}
          {poste.realisations_responsabilites.map((realisation, index) => (
            <Col
              key={index}
              md={4}
              style={{
                paddingLeft: 50,
                paddingTop: index % 2 === 0 ? 150 : 100,
                color:"aliceblue"
              }}
            >
              <Card
                style={{
                  width: "25rem",
                  backgroundColor: "rgba(217,217,217,.25)",
                  backdropFilter: "blur(5px)",
                  color:"aliceblue"
                }}
              >
                {/* Assurez-vous d'avoir les données disponibles avant de les utiliser */}
                {realisation.photo && (
                  <Card.Img variant="top" src={realisation.photo} />
                )}
                <Card.Body>
                  <Card.Title>{realisation.description}</Card.Title>
                  <Card.Text>{realisation.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
