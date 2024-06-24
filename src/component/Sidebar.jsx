import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <Container fluid className="p-3" style={{ backgroundColor: '#f8f0f0', height: '100vh', width: '250px' }}>
      <Row className="mb-4">
        <Col className="text-center">
          <Image src="path_to_logo.png" roundedCircle style={{ width: '100px', height: '100px' }} />
          <h5 className="mt-3">Atelier J.RICHARD</h5>
        </Col>
      </Row>

      <ListGroup variant="flush">
        {['Accueil', 'Client', 'Panier', 'Article'].map((item, index) => (
          <ListGroup.Item
            key={index}
            className="border-0 p-3"
            onClick={() => handleItemClick(index)}
            style={{ backgroundColor: activeItem === index ? 'black' : 'transparent', color: activeItem === index ? 'white' : 'black' }}
          >
            <Link to={`/${item.toLowerCase()}`} className="text-decoration-none" style={{ color: activeItem === index ? 'white' : 'inherit' }}>
              <Image src="path_to_icon.png" rounded style={{ width: '24px', height: '24px' }} className="me-2" />
              {item}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Card className="mt-5 text-center" style={{ backgroundColor: '#d9b6b6' }}>
        <Card.Body>
          <Card.Title>À Propos</Card.Title>
          <Card.Text>AtelierJ.Richard1</Card.Text>
          <Image src="path_to_icon.png" rounded style={{ width: '24px', height: '24px' }} className="me-2" />
        </Card.Body>
      </Card>

      <Row className="text-center mt-5">
        <Col>
          <small className="text-muted">Developped by Lantomalala</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
