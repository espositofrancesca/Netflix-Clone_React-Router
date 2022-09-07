import { Container, Row, Button, Nav, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container>
      <div className="footer">
        
        <Row className="my-6 text-center">
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Audio and Subtitles
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Help Center
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Media center
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Jobs
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Privacy
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Cookie Preferences
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Audio Description
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Gift Cards
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Investor Relations
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Terms of Use
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Legal Notices
              </Nav.Link>
              <Nav.Link className="mb-2 p-0 text-muted" href="#">
                Information
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Button size="sm" className="btn-footer my-5">
            Service Code{" "}
          </Button>
        </Row>
        <Row className="text-center">
          <p className="text-secondary font-weight-light">1977-2022 Netflix, Inc.</p>
        </Row>
      </div>
    </Container>
  );
};

export default MyFooter;
