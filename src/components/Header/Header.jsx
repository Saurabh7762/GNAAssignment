import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import "./Header.css";



const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/categories",
    display: "Categories",
  },
  {
    path: "/destinations",
    display: "Destinations",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/pages",
    display: "Pages",
  },
  {
    path: "/dashboard",
    display: "Dashboard",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header sticky__header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <h3>TripWeb</h3>
            </div>
            {/* logo end */}

            {/* menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-4 text-decoration-none">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                      <i class="ri-arrow-down-s-fill"></i>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn primary__btn">
                  <Link to="/">Become An Expert</Link>
                </Button>
                <Button className="btn secondary__btn">
                  <Link to="/">Sign In / Register</Link>
                </Button>
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header
