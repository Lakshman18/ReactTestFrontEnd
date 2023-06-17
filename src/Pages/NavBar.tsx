import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{background:'#DDD888'}}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/"  style={{ textDecoration: 'none' }}><NavLink >Students</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/teachers"  style={{ textDecoration: 'none' }}><NavLink >Teachers</NavLink></Link>
            </NavItem> 
            <NavItem>
              <Link to="/subject"  style={{ textDecoration: 'none' }}><NavLink >Subjects</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/classRoom"  style={{ textDecoration: 'none' }}><NavLink >ClassRooms</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/allocateClassRoom"  style={{ textDecoration: 'none' }}><NavLink >Allocate Class Room</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/allocateSubject"  style={{ textDecoration: 'none' }}><NavLink >Allocate Subject</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/allocateClassRoom"  style={{ textDecoration: 'none' }}><NavLink >Student Report</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default NavBar;
