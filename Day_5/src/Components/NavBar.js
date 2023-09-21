import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import {Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../redux/userSlice';

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const Email = useSelector(selectUser);
  console.log(Email.email);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    nav("/");
  };
  const HandleNav = (param) => {
    nav(`${param}`);
  };


  const HandleLogin = () => {
    if (Email.email) {
      return (
        <>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={()=>HandleNav("/profile")}>
              Profile
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={HandleLogout}>
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="nav-item">
          <button className="nav-link btn btn-link" onClick={()=>HandleNav("/login")}>
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">CarBros.</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            onClick={() => setShowBasic(!showBasic)}
          />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <div className="nav-item">
                <button className="nav-link btn btn-link" onClick={()=>HandleNav("/")}>
                  Home
                </button>
              </div>
              <NavDropdown title="Categories" className="nav-item dropdown">
            <div className="dropdown-menu">
              <NavDropdown.Item className="dropdown-item" onClick={() => HandleNav('/mens')}>
                Men's
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" onClick={() => HandleNav('/womens')}>
                Women's
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" onClick={() => HandleNav('/accessories')}>
                Accessories
              </NavDropdown.Item>
            </div>
          </NavDropdown>
              <div className="nav-item">
                <button className="nav-link btn btn-link" onClick={()=>HandleNav("/")}>
                  Deals
                </button>
              </div>
              {HandleLogin()}
              <div className="ml-auto">
                <Form className="form-inline">
                  <FormControl type="text" className="mr-sm-2" placeholder="Search" />
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
