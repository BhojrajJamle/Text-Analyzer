import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? " rgb(118 165 203)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "rgb(4, 39, 67)",
  };

  return (
    <div
      className="cuntainer"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-2">About us</h1>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item mx-2 my-2" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This is the Mj-Creations, Text Analyzer here you can analyze ,
              convert in UPPERCASE , convert in lowercase , capitalize first
              latter , you can remove white spaace , you can remove extra
              spaces. This is very use full Tool for the persons who have less
              time to do work like this .
              {/* This is the Mj-Creations, Text Analyzer here you can analyze , convert in UPPERCASE , convert in lowercase , capitalize first latter , you can remove white spaace , you can remove extra spaces. This is very use full Tool for the persons who have less time to do work like this . */}
            </div>
          </div>
        </div>
        <div className="accordion-item mx-2 my-2" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our website is free to use you don't have to Pay to do your work
              here.
            </div>
          </div>
        </div>
        <div className="accordion-item mx-2 my-2" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Browser compaitible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              {" "}
              This web-site is browser compaitible so you can use it in any
              browser its performans will not decrease
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
