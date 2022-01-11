import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navebar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} 
      navbar-${props.red} bg-${props.red} 
      navbar-${props.yellow} bg-${props.yellow}
      navbar-${props.green} bg-${props.green}
      navbar-${props.orange} bg-${props.orange}
      `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/z">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/"> */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}

          <div className="d-flex">
            <div
              className="bg-primary  rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ hight: "25px", width: "25px", cursor: "pointer" }}
            ></div>
            {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
            <div
              className="bg-danger  rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ hight: "25px", width: "25px", cursor: "pointer" }}
            ></div>
            {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
            <div
              className="bg-success  rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ hight: "25px", width: "25px", cursor: "pointer" }}
            ></div>

            {/* ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{
                hight: "25px",
                width: "25px",
                cursor: "pointer",
                border: "1px solid lightgrey",
                boxShadow: " 0.5px 1.5px lightgrey",
              }}
            ></div>
            {/* ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
            <div
              className="bg-dark  rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ hight: "25px", width: "25px", cursor: "pointer" }}
            ></div>
            {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
            <div
              className="bg-warning text-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ hight: "25px", width: "25px", cursor: "pointer" }}
            >
              .
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navebar.prototypes = { title: PropTypes.string, aboutTitle: PropTypes.string };

Navebar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
