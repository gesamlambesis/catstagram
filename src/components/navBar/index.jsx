import React from 'react'
import { Navbar, Form, FormControl, InputGroup} from 'react-bootstrap';
import image from '../../images/searchIcon.png'

const NavBar = ({
    filterCats
}) => {
    return (
        <Navbar className="bg-navBar" style={{background: "grey"}} expand="lg">
        <Navbar.Brand href="#home">Catstagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <InputGroup className="search-input" onChange={(element) => {filterCats(element.target.value)}}>
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"><img className="search-icon" src={image}/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        placeholder="Buscar..."
        aria-label="Buscar..."
        aria-describedby="basic-addon1"
        />
    </InputGroup>
      </Navbar>
    )
}

export default NavBar