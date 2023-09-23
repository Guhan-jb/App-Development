import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import '../Assets/CSS/HomePage.css';

const HomePage = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Welcome to Sports Emporium</h1>

      {/* Sliding Cards */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <Row>
            {Array.from({ length: 3 }).map((_, index) => (
              <Col md={4} key={index}>
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200"
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>Product {index + 1}</Card.Title>
                    <Card.Text>
                      High-quality sports gear for your next adventure.
                    </Card.Text>
                    <button class="shopnow-btn"> Shop now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {Array.from({ length: 3 }).map((_, index) => (
              <Col md={4} key={index + 3}>
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200"
                    alt={`Product ${index + 4}`}
                  />
                  <Card.Body>
                    <Card.Title>Product {index + 4}</Card.Title>
                    <Card.Text>
                      Stay active and stylish with our latest collection.
                    </Card.Text>
                    <button class="shopnow-btn"> Shop now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>

      {/* Grid of 3x4 Cards */}
      <Row>
        {Array.from({ length: 12 }).map((_, index) => (
          <Col md={3} key={index}>
            <Card className="product-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/200x150"
                alt={`Product ${index + 7}`}
              />
              <Card.Body>
                <Card.Title>Product {index + 7}</Card.Title>
                <Card.Text>
                  Gear up for your favorite sports with our top picks.
                </Card.Text>
                <button class="shopnow-btn"> Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
