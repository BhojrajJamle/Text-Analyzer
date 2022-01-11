import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UPPERCASE !", "success");
  };
  const handleLoclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lovercase !", "success");
  };
  const handleClearclick = () => {
    // let newText = text.toLowerCase();
    setText("");
    props.showAlert("text deleted !", "success");
  };
  const handleAnclick = () => {
    let firstchar = text.charAt(0);
    let newText = firstchar.toUpperCase();
    setText(newText + text.slice(1));
    props.showAlert("1st later has been capitalized !", "success");
  };
  const handleUnclick = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert(" white space has been removed !", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space has been removed !", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copyed to clipbord !", "success");
  };

  // there is anothere function

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="cantainer"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#13466e"
                  : "white" - props.red === "red"
                  ? "black"
                  : "white",
              color:
                props.mode === "dark"
                  ? "white"
                  : "black" - props.red === "red"
                  ? "white"
                  : "black",
            }}
            id="my box"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleupclick}
        >
          convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleLoclick}
        >
          convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleAnclick}
        >
          1st latter capital
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleUnclick}
        >
          Remove white space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleCopy}
        >
          copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleClearclick}
        >
          clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : "black" - props.red === "red"
              ? "white"
              : "black",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charachters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Nothig to preview!"}</p>
      </div>
    </>
  );
}
