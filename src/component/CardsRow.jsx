import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import data from "../../data/experience.json";
import { Link } from "react-router-dom";

function Cards({ poste }) {
  return (
    <Card
      style={{
        width: "25rem",
        backgroundColor: "rgba(217,217,217,.25)",
        backdropFilter: "blur(5px)",
        color:"aliceblue"
      }}
    >
      <Card.Img variant="top" src={poste.photo} />
      <Card.Body> 
        <Card.Title>{poste.poste}</Card.Title>
        <Card.Text>{poste.description_poste}</Card.Text>
        <Button variant="primary"><Link to={`/experiences/${poste.id}`} style={{color:"white"}}> Voir Plus</Link></Button>
      </Card.Body>
    </Card>
  );
}

function CardsRow() {
  return (
    <Row className="align-items-center justify-content-center">
      {Object.keys(data).map((posteKey, index) => (
        <Col
          key={index}
          md={4}
          className="text-center"
          style={{ paddingLeft: 50, paddingTop: index % 2 === 0 ? 150 : 100 }}
        >
          <Cards poste={data[posteKey]} />
        </Col>
      ))}
    </Row>
  );
}

export default CardsRow;
