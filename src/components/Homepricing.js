"use client"
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

const Homepricing = () => {
  return (
    <>
      <div className="Homepricing py-5">
        <Container>
          <Row>
            <Col lg={3}>
            <p className="m-0 fs-1 fw-bold text-white">Our Pricing</p>
            <p className="m-0 text-white">Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion</p>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col lg={12}>
                <Nav variant="pills" className="flex-row">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
            </Col>
          </Row>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
};

export default Homepricing;
