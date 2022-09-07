
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoNetflix from "../assets/logo.png";
import Form from 'react-bootstrap/Form';
import { BellFill } from "react-bootstrap-icons";
import { Search } from 'react-bootstrap-icons'
import { PersonFill } from "react-bootstrap-icons";
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {

const location = useLocation()
console.log(location);

return(
  <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar">
    
      <Link to="/">
        <Navbar.Brand>
          <img
            src={LogoNetflix}
            width="120"
            height="70"
            className="d-inline-block align-top"
            alt="Netflix Logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/home" className={location.pathname === '/home' ? 'nav-link-active' : 'nav-link' }>Home</Link>
          <Link to="/tvshow" className={location.pathname === '/tvshow' ? 'nav-link-active' : 'nav-link' }>TV Shows</Link>
          <Link to="/movies" className={location.pathname === '/movies' ? 'nav-link-active' : 'nav-link' }>Movies</Link>
          <Link to="/recent" className={location.pathname === '/recent' ? 'nav-link-active' : 'nav-link' }>Recenly Added</Link>
          <Link to="/mylist" className={location.pathname === '/mylist' ? 'nav-link-active' : 'nav-link' }>My List</Link>
        </Nav>
        <Nav>
        <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder={ location.pathname === '/tvshow' ? "Search Tv Show" : "Search Film" }
              className="me-2 searchbar"
              aria-label="Search"
            />
            <Search className="text-light"/>
            <p> KIDS</p>

            <BellFill/>
            <PersonFill/>
          </Form>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
)}

export default MyNavbar;
