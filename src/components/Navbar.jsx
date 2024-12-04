import menuIcon from "../assets/Hero/menuIcon.svg";
import closeIcon from "../assets/Hero/closeIcon.svg";
import "../styles/Hero.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mywork">My Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menuIcon">
        {!openMenu && (
          <div className="theMenuIcon">
            <img
              src={menuIcon}
              alt="The menu icon"
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          </div>
        )}
        {openMenu && (
          <div className="theMenulist">
            <div className="theOuterBackground">
              <div className="closeIcon">
                <img
                  src={closeIcon}
                  alt="Close icon"
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                />
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mywork"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    My Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
