import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuTop = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">HIVE examples</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/docs">Docs</Nav.Link>
            <NavDropdown title="level-basic" id="menuLevelBasic">
              <NavDropdown.Item href="/level-basic#ExampleOne">exampleOne</NavDropdown.Item>
              <NavDropdown.Item href="/level-basic#ExampleTwo">exampleTwo</NavDropdown.Item>
              <NavDropdown.Item href="/level-basic#ExampleThree">exampleThree</NavDropdown.Item>
              <NavDropdown.Item href="/level-basic#ExampleFour">exampleFour</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="level-medium" id="menuLevelMedium" className="disable">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2-1">Work in progress</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuTop;
