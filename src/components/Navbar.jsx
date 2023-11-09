import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";

export default function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const showOffCanvasHandler = () => setShowOffcanvas(true);
  const hideShowOffCanvasHandler = () => setShowOffcanvas(false);
  return (
    <>
      <Navbar
        className="main fixed-top"
        expand="lg"
        style={{ backgroundColor: "#F1F3FF" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="images/logo.png"
              alt=""
              style={{ width: "100px", height: "34px" }}
            />
          </Navbar.Brand>
          <Button
            className="btn btn-white navbar-toggler"
            type="button"
            onClick={showOffCanvasHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Nav className="d-none d-lg-flex">
            <Nav.Link href="#ourservices" style={{ marginRight: "30px" }}>
              Our Services
            </Nav.Link>
            <Nav.Link href="#whyus" style={{ marginRight: "30px" }}>
              Why Us
            </Nav.Link>
            <Nav.Link href="#testimonial" style={{ marginRight: "30px" }}>
              Testimonial
            </Nav.Link>
            <Nav.Link href="#faq" style={{ marginRight: "30px" }}>
              FAQ
            </Nav.Link>
            <button className="btn-utama">Register</button>
          </Nav>
        </Container>

        <Offcanvas
          show={showOffcanvas}
          onHide={hideShowOffCanvasHandler}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold" style={{ marginLeft: "20px" }}>
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end">
            <Nav className="mr-2 mb-lg-0">
              <Nav.Item className="mx-3 my-1">
                <Nav.Link href="#ourservices">Our Services</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" mx-3 my-1">
                <Nav.Link href="#whyus">Why Us</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3 my-1">
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3 my-1">
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav.Item>
            </Nav>
            <button className="mx-3 my-1 btn-utama">Register</button>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
      <h1 className="h1">halo</h1>
    </>
  );
}
